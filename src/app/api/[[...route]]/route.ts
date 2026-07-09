import { NextRequest, NextResponse } from 'next/server'
import { getPremiumJobBySlug, getJobDetailsBySlug } from '@/lib/jobs'
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

function sanitizeInput(input: FormDataEntryValue | string | null | undefined): string {
  return String(input || '')
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  const chunkSize = 0x8000

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize)
    binary += String.fromCharCode(...chunk)
  }

  return btoa(binary)
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.warn('TURNSTILE_SECRET_KEY is missing. Bypassing verification for development.')
    return true
  }

  const body = new URLSearchParams()
  body.append('secret', secret)
  body.append('response', token)

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    })

    if (!response.ok) return false
    const result = await response.json()
    if (!result.success) {
      console.error('Turnstile verification failed:', result['error-codes'] || result)
    }
    return Boolean(result.success)
  } catch (error) {
    console.error('Turnstile verification error:', error)
    return false
  }
}

async function sendApplicationEmail(fields: Record<string, string>, fileName: string, fileBase64: string): Promise<boolean> {
  const brevoApiKey = process.env.BREVO_API_KEY
  if (!brevoApiKey) {
    console.error('BREVO_API_KEY is missing in environment')
    return false
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'noreply@career141.com'
  const senderName = process.env.BREVO_SENDER_NAME || 'Career141'
  const recipientEmail = process.env.JOBS_RECIPIENT_EMAIL || 'jobs@career141.com'

  const htmlContent = `
    <h2>New Job Application</h2>
    <p><strong>Job:</strong> ${sanitizeInput(fields.jobTitle)}</p>
    <p><strong>Name:</strong> ${sanitizeInput(fields.firstName)} ${sanitizeInput(fields.lastName)}</p>
    <p><strong>Email:</strong> ${sanitizeInput(fields.email)}</p>
    <p><strong>Phone:</strong> ${sanitizeInput(fields.phone)}</p>
    <p><strong>Age:</strong> ${sanitizeInput(fields.age)}</p>
    <p><strong>Current Designation:</strong> ${sanitizeInput(fields.designation || 'N/A')}</p>
    <p><strong>Attachment:</strong> ${sanitizeInput(fileName)}</p>
  `

  const textContent = `
    New Job Application

    Job: ${sanitizeInput(fields.jobTitle)}
    Name: ${sanitizeInput(fields.firstName)} ${sanitizeInput(fields.lastName)}
    Email: ${sanitizeInput(fields.email)}
    Phone: ${sanitizeInput(fields.phone)}
    Age: ${sanitizeInput(fields.age)}
    Current Designation: ${sanitizeInput(fields.designation || 'N/A')}
    Attachment: ${sanitizeInput(fileName)}
  `

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: recipientEmail, name: 'Career141 Applications' }],
        subject: `Job Application: ${sanitizeInput(fields.jobTitle)} - ${sanitizeInput(fields.firstName)} ${sanitizeInput(fields.lastName)}`,
        htmlContent,
        textContent,
        attachment: [{ name: fileName, content: fileBase64 }],
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Brevo API Error:', response.status, errText)
      return false
    }

    return true
  } catch (error) {
    console.error('Error sending email via Brevo:', error)
    return false
  }
}

async function handleApplySubmission(request: NextRequest) {
  const formData = await request.formData()

  const firstName = sanitizeInput(formData.get('firstName'))
  const lastName = sanitizeInput(formData.get('lastName'))
  const email = sanitizeInput(formData.get('email'))
  const phone = sanitizeInput(formData.get('phone'))
  const age = sanitizeInput(formData.get('age'))
  const designation = sanitizeInput(formData.get('designation'))
  const jobTitle = sanitizeInput(formData.get('jobTitle'))
  const turnstileToken = sanitizeInput(formData.get('turnstileToken'))
  const file = formData.get('file')

  const errors: { path: string[]; message: string }[] = []
  if (firstName.length < 2) errors.push({ path: ['firstName'], message: 'First name must be at least 2 characters' })
  if (lastName.length < 2) errors.push({ path: ['lastName'], message: 'Last name must be at least 2 characters' })
  if (!email || !isValidEmail(email)) errors.push({ path: ['email'], message: 'Valid email is required' })
  if (!phone || phone.length < 5) errors.push({ path: ['phone'], message: 'Valid phone number is required' })
  if (!age || Number(age) < 18) errors.push({ path: ['age'], message: 'Age must be 18 or above' })
  if (!jobTitle) errors.push({ path: ['jobTitle'], message: 'Job title is required' })
  if (!turnstileToken) errors.push({ path: ['turnstileToken'], message: 'Captcha is required' })

  if (!(file instanceof File)) {
    errors.push({ path: ['file'], message: 'CV/resume file is required' })
  } else {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (!allowedTypes.includes(file.type)) errors.push({ path: ['file'], message: 'Only PDF, DOC, and DOCX files are allowed' })
    if (file.size > 5 * 1024 * 1024) errors.push({ path: ['file'], message: 'File size must be under 5MB' })
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 400 })
  }

  const verified = await verifyTurnstile(turnstileToken)
  if (!verified) {
    return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 })
  }

  const upload = file as File
  const fileBase64 = arrayBufferToBase64(await upload.arrayBuffer())
  const success = await sendApplicationEmail(
    { firstName, lastName, email, phone, age, designation, jobTitle },
    upload.name,
    fileBase64
  )

  if (!success) {
    return NextResponse.json({ error: 'Failed to send application. Please try again later.' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Application sent successfully' })
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
      const supabase = createServerClient()
      const { searchParams } = new URL(request.url)
      const industry = searchParams.get('industry')
      const search = searchParams.get('search')
      let query = supabase.from('premium_jobs').select('*')
      if (industry) query = query.ilike('industry', industry)
      if (search) query = query.or(`title.ilike.%${search}%,location.ilike.%${search}%,industry.ilike.%${search}%`)
      const { data } = await query.order('posted_date', { ascending: false })
      return NextResponse.json({ jobs: (data as any[]) || [] })
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
      const { title, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites, additional_benefits } = raw

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
        additional_benefits: additional_benefits || null,
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
      const { title, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites, additional_benefits } = raw

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
        additional_benefits: additional_benefits || null,
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

  if (path === 'apply') {
    return handleApplySubmission(request)
  }

  if (path === 'contact' || path === 'meeting') {
    return NextResponse.json({ message: 'Submission received' })
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 })
}
