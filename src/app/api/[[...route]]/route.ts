import { NextRequest, NextResponse } from 'next/server'
import { getAllPremiumJobs, getPremiumJobBySlug, getJobDetailsBySlug } from '@/lib/jobs'
import { createServerClient } from '@/lib/supabase'
import { SignJWT } from 'jose'

export const runtime = 'edge'

const rateLimit = new Map<string, { count: number; resetTime: number }>()
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 })
    return true
  }
  if (record.count >= 5) return false
  record.count++
  return true
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

async function generateUniqueSlug(title: string, supabase: ReturnType<typeof createServerClient>, excludeId?: string, startFrom = 0): Promise<string> {
  if (startFrom === 0) {
    const slug = slugify(title) || 'untitled'
    let query = supabase.from('premium_jobs').select('id').eq('slug', slug)
    if (excludeId) query = query.neq('id', excludeId)
    const { data } = await query.maybeSingle()
    if (!data) return slug
  }
  let counter = Math.max(1, startFrom)
  while (true) {
    const slug = `${slugify(title)}-${counter}`
    let query = supabase.from('premium_jobs').select('id').eq('slug', slug)
    if (excludeId) query = query.neq('id', excludeId)
    const { data: dn } = await query.maybeSingle()
    if (!dn) return slug
    counter++
  }
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ route?: string[] }> }) {
  const resolvedParams = await params
  const route = resolvedParams.route || []
  const path = route.join('/')

  if (path === 'admin/jobs') {
    try {
      const supabase = createServerClient()
      const { searchParams } = new URL(request.url)
      const industry = searchParams.get('industry') || undefined
      const search = searchParams.get('search') || undefined
      const page = parseInt(searchParams.get('page') || '1')
      const limit = 20
      const offset = (page - 1) * limit
      let query = supabase.from('premium_jobs').select('*', { count: 'exact' })
      if (search) query = query.or(`title.ilike.%${search}%,location.ilike.%${search}%,slug.ilike.%${search}%`)
      if (industry) query = query.eq('industry', industry)
      const { data, count } = await query.order('posted_date', { ascending: false }).range(offset, offset + limit - 1)
      return NextResponse.json({ jobs: (data as any[]) || [], total: count || 0 })
    } catch { return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 }) }
  }

  if (path === 'admin/industries') {
    try {
      const supabase = createServerClient()
      const { data } = await supabase.from('premium_jobs').select('industry').order('industry')
      const industries = data ? [...new Set(data.map((r: any) => r.industry))].sort() : []
      return NextResponse.json({ industries })
    } catch { return NextResponse.json({ error: 'Failed to fetch industries' }, { status: 500 }) }
  }

  if (route[0] === 'admin' && route[1] === 'jobs' && route[2]) {
    try {
      const supabase = createServerClient()
      const id = route[2]
      const { data } = await supabase.from('premium_jobs').select('*').eq('id', id).single()
      if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })
      return NextResponse.json({ job: data })
    } catch { return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 }) }
  }

  if (path === 'jobs') {
    try {
      const { searchParams } = new URL(request.url)
      const industry = searchParams.get('industry')
      const search = searchParams.get('search')
      let jobs = await getAllPremiumJobs()
      if (industry) jobs = jobs.filter((j) => j.industry.toLowerCase() === industry.toLowerCase())
      if (search) {
        const q = search.toLowerCase()
        jobs = jobs.filter((j) => j.title.toLowerCase().includes(q) || j.location.toLowerCase().includes(q) || j.industry.toLowerCase().includes(q))
      }
      return NextResponse.json({ jobs })
    } catch { return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 }) }
  }

  if (route[0] === 'jobs' && route[1]) {
    try {
      const [job, details] = await Promise.all([getPremiumJobBySlug(route[1]), getJobDetailsBySlug(route[1])])
      if (!job) return NextResponse.json({ error: 'Job not found' }, { status: 404 })
      return NextResponse.json({ job, details })
    } catch { return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 }) }
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 })
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ route?: string[] }> }) {
  const resolvedParams = await params
  const route = resolvedParams.route || []

  if (route[0] === 'admin' && route[1] === 'jobs' && route[2]) {
    try {
      const supabase = createServerClient()
      const { error } = await supabase.from('premium_jobs').delete().eq('id', route[2])
      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
      return NextResponse.json({ success: true })
    } catch { return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 }) }
  }

  if (route[0] === 'jobs' && route[1]) {
    try {
      const supabase = createServerClient()
      const { error } = await supabase.from('premium_jobs').delete().eq('id', route[1])
      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
      return NextResponse.json({ success: true })
    } catch { return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 }) }
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 })
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ route?: string[] }> }) {
  const resolvedParams = await params
  const route = resolvedParams.route || []
  const path = route.join('/')
  const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (!checkRateLimit(clientIP)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })

  if (path === 'admin/login') {
    try {
      const formData = await request.formData()
      const email = formData.get('email') as string
      const password = formData.get('password') as string
      if (!email || !password) return NextResponse.json({ error: 'Please enter email and password' }, { status: 400 })

      const supabase = createServerClient()
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) return NextResponse.json({ error: error.message || 'Invalid credentials' }, { status: 401 })
    } catch (e: any) {
      return NextResponse.json({ error: `Connection error: ${e.message || 'Unknown error'}. Please check your Supabase configuration.` }, { status: 500 })
    }

    const secret = new TextEncoder().encode(process.env.SESSION_SECRET || 'default-secret-change-me-in-production')
    const token = await new SignJWT({ admin: true }).setProtectedHeader({ alg: 'HS256' }).setExpirationTime('24h').sign(secret)

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 24 * 60 * 60, path: '/admin' })
    return response
  }

  if (path === 'admin/logout') {
    const response = NextResponse.redirect(new URL('/admin/login', request.url))
    response.cookies.set('admin_token', '', { maxAge: 0, path: '/admin' })
    return response
  }

  if (path === 'admin/jobs') {
    try {
      const supabase = createServerClient()
      const formData = await request.formData()
      const raw = Object.fromEntries(formData) as Record<string, string>
      const { title, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites } = raw

      const errors: Record<string, string> = {}
      if (!title) errors.title = 'Title is required'
      if (!industry) errors.industry = 'Industry is required'
      if (!location) errors.location = 'Location is required'
      if (!posted_date) errors.posted_date = 'Posted date is required'
      if (Object.keys(errors).length > 0) return NextResponse.json({ errors, job: raw })

      const record: Record<string, any> = {
        title, industry, currency: currency || 'LKR',
        salary_min: salary_min ? parseFloat(salary_min) : null,
        salary_max: salary_max ? parseFloat(salary_max) : null,
        location, job_type: job_type || industry,
        work_type: work_type || 'On-Site', posted_date,
        roles: roles || null, pre_requisites: pre_requisites || null,
      }

      let slug = raw.slug || ''
      let attempt = 0
      const isCustomSlug = slug && slug !== slugify(title)

      while (true) {
        if (attempt === 0 && isCustomSlug) {
          slug = slugify(slug)
          const { data: existing } = await supabase.from('premium_jobs').select('id').eq('slug', slug).maybeSingle()
          if (!existing) { record.slug = slug }
          else { attempt = 1; slug = await generateUniqueSlug(title, supabase, undefined, 1); record.slug = slug }
        } else {
          slug = await generateUniqueSlug(title, supabase, undefined, attempt)
          record.slug = slug
        }

        const { error } = await supabase.from('premium_jobs').insert(record)
        if (!error) return NextResponse.json({ success: true })
        if (error.code === '23505') { attempt++; continue }
        return NextResponse.json({ errors: { general: error.message }, job: raw })
      }
    } catch (e: any) {
      return NextResponse.json({ errors: { general: e.message } }, { status: 500 })
    }
  }

  if (route[0] === 'admin' && route[1] === 'jobs' && route[2]) {
    try {
      const supabase = createServerClient()
      const id = route[2]
      const formData = await request.formData()
      const raw = Object.fromEntries(formData) as Record<string, string>
      const { title, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites } = raw

      const errors: Record<string, string> = {}
      if (!title) errors.title = 'Title is required'
      if (Object.keys(errors).length > 0) return NextResponse.json({ errors, job: raw })

      const record: Record<string, any> = {
        title, industry, currency: currency || 'LKR',
        salary_min: salary_min ? parseFloat(salary_min) : null,
        salary_max: salary_max ? parseFloat(salary_max) : null,
        location, job_type: job_type || industry,
        work_type: work_type || 'On-Site', posted_date,
        roles: roles || null, pre_requisites: pre_requisites || null,
        updated_at: new Date().toISOString(),
      }

      let slug = raw.slug || ''
      let attempt = 0
      const isCustomSlug = slug && slug !== slugify(title)

      while (true) {
        if (attempt === 0 && !slug) { slug = await generateUniqueSlug(title, supabase, id); record.slug = slug }
        else if (attempt === 0 && isCustomSlug) {
          slug = slugify(slug)
          const { data: existing } = await supabase.from('premium_jobs').select('id').eq('slug', slug).neq('id', id).maybeSingle()
          if (!existing) { record.slug = slug }
          else { attempt = 1; slug = await generateUniqueSlug(title, supabase, id, 1); record.slug = slug }
        } else {
          slug = await generateUniqueSlug(title, supabase, id, attempt)
          record.slug = slug
        }

        if (!record.slug) { errors.slug = 'Slug is required'; return NextResponse.json({ errors, job: raw }) }

        const { error } = await supabase.from('premium_jobs').update(record).eq('id', id)
        if (!error) return NextResponse.json({ success: true })
        if (error.code === '23505') { attempt++; continue }
        return NextResponse.json({ errors: { general: error.message }, job: raw })
      }
    } catch (e: any) {
      return NextResponse.json({ errors: { general: e.message } }, { status: 500 })
    }
  }

  if (path === 'apply' || path === 'contact' || path === 'meeting') {
    return NextResponse.json({ message: 'Submission received' })
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 })
}
