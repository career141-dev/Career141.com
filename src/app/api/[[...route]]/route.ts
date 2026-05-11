import { NextRequest, NextResponse } from 'next/server'
import { getAllPremiumJobs, getPremiumJobBySlug, getJobDetailsBySlug } from '@/lib/jobs'
import { z } from 'zod'
import { createServerClient } from '@/lib/supabase'
import { SignJWT } from 'jose'
import { revalidatePath } from 'next/cache'
import { createJobAction, updateJobAction, deleteJobAction, getJobs, getIndustries, getJob } from '@/lib/admin-actions'

export const runtime = 'edge'

const brevoApiKey = process.env.BREVO_API_KEY

// Common Rate Limiter
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

export async function GET(request: NextRequest, { params }: { params: Promise<{ route?: string[] }> }) {
  const resolvedParams = await params
  const route = resolvedParams.route || []
  const path = route.join('/')

  if (path === 'admin/jobs') {
    try {
      const { searchParams } = new URL(request.url)
      const industry = searchParams.get('industry') || undefined
      const search = searchParams.get('search') || undefined
      const page = parseInt(searchParams.get('page') || '1')
      const result = await getJobs({ page, search, industry })
      return NextResponse.json(result)
    } catch { return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 }) }
  }

  if (path === 'admin/industries') {
    try {
      const industries = await getIndustries()
      return NextResponse.json({ industries })
    } catch { return NextResponse.json({ error: 'Failed to fetch industries' }, { status: 500 }) }
  }

  if (route[0] === 'admin' && route[1] === 'jobs' && route[2]) {
    try {
      const id = route[2]
      const job = await getJob(id)
      if (!job) return NextResponse.json({ error: 'Not found' }, { status: 404 })
      return NextResponse.json({ job })
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
  const path = route.join('/')

  if (route[0] === 'admin' && route[1] === 'jobs' && route[2]) {
    try {
      await deleteJobAction(route[2])
      revalidatePath('/admin/jobs')
      return NextResponse.json({ success: true })
    } catch { return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 }) }
  }

  if (route[0] === 'jobs' && route[1]) {
    try {
      await deleteJobAction(route[1])
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
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
      return NextResponse.json({ error: 'Please enter email and password' }, { status: 400 })
    }

    const supabase = createServerClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      return NextResponse.json({ error: error.message || 'Invalid credentials' }, { status: 401 })
    }

    const secret = new TextEncoder().encode(process.env.SESSION_SECRET || 'default-secret-change-me-in-production')
    const token = await new SignJWT({ admin: true })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(secret)

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60,
      path: '/admin',
    })

    return response
  }

  if (path === 'admin/logout') {
    const response = NextResponse.redirect(new URL('/admin/login', request.url))
    response.cookies.set('admin_token', '', { maxAge: 0, path: '/admin' })
    return response
  }

  if (path === 'admin/jobs') {
    try {
      const formData = await request.formData()
      const result = await createJobAction({} as any, formData)
      revalidatePath('/admin/jobs')
      return NextResponse.json(result)
    } catch (e: any) {
      return NextResponse.json({ errors: { general: e.message } }, { status: 500 })
    }
  }

  if (route[0] === 'admin' && route[1] === 'jobs' && route[2]) {
    try {
      const id = route[2]
      const formData = await request.formData()
      const result = await updateJobAction(id, {} as any, formData)
      revalidatePath('/admin/jobs')
      return NextResponse.json(result)
    } catch (e: any) {
      return NextResponse.json({ errors: { general: e.message } }, { status: 500 })
    }
  }

  if (path === 'apply' || path === 'contact' || path === 'meeting') {
    return NextResponse.json({ message: 'Submission received' })
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 })
}
