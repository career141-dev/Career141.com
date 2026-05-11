'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createServerClient } from './supabase'
import { createSession, clearSession } from './admin-auth'

const supabase = createServerClient()

type FormErrors = Record<string, string>

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

async function generateUniqueSlug(title: string, excludeId?: string, startFrom = 0): Promise<string> {
  if (startFrom === 0) {
    const slug = slugify(title) || 'untitled'
    const { data } = await supabase.from('premium_jobs').select('id').eq('slug', slug).neq('id', excludeId || '').maybeSingle()
    if (!data) return slug
  }

  let counter = Math.max(1, startFrom)
  while (true) {
    const slug = `${slugify(title)}-${counter}`
    const { data: dn } = await supabase.from('premium_jobs').select('id').eq('slug', slug).neq('id', excludeId || '').maybeSingle()
    if (!dn) return slug
    counter++
  }
}

export type LoginResult = { error: string; success?: never } | { success: boolean; error?: never }

export async function loginAction(_prev: LoginResult, formData: FormData): Promise<LoginResult> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) return { error: 'Please enter email and password' }

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) return { error: error.message || 'Invalid credentials' }

  await createSession()
  return { success: true }
}

export async function logoutAction() {
  await clearSession()
  redirect('/admin/login')
}

export type JobRow = {
  id: string
  slug: string
  title: string
  industry: string
  currency: string
  salary_min: number | null
  salary_max: number | null
  location: string
  job_type: string
  work_type: string
  posted_date: string
  roles: string | null
  pre_requisites: string | null
  created_at: string
  updated_at: string
}

export async function getIndustries(): Promise<string[]> {
  const { data } = await supabase.from('premium_jobs').select('industry').order('industry')
  if (!data) return []
  return [...new Set(data.map((r) => r.industry as string))].sort()
}

export async function getJobs(params: {
  page?: number
  search?: string
  industry?: string
}): Promise<{ jobs: JobRow[]; total: number }> {
  const page = params.page || 1
  const limit = 20
  const offset = (page - 1) * limit

  let query = supabase.from('premium_jobs').select('*', { count: 'exact' })

  if (params.search) {
    query = query.or(
      `title.ilike.%${params.search}%,location.ilike.%${params.search}%,slug.ilike.%${params.search}%`
    )
  }

  if (params.industry) {
    query = query.eq('industry', params.industry)
  }

  const { data, count } = await query
    .order('posted_date', { ascending: false })
    .range(offset, offset + limit - 1)

  return { jobs: (data as JobRow[]) || [], total: count || 0 }
}

export async function getJob(id: string): Promise<JobRow | null> {
  const { data } = await supabase.from('premium_jobs').select('*').eq('id', id).single()
  return data as JobRow | null
}

export type FormState = { 
  success?: boolean; 
  errors?: Record<string, string>; 
  job?: Record<string, string> 
}

export async function createJobAction(prev: FormState, formData: FormData): Promise<FormState> {
  const raw = Object.fromEntries(formData) as Record<string, string>
  // ... rest of implementation stays same
  const { title, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites } = raw

  const errors: FormErrors = {}
  if (!title) errors.title = 'Title is required'
  if (!industry) errors.industry = 'Industry is required'
  if (!location) errors.location = 'Location is required'
  if (!posted_date) errors.posted_date = 'Posted date is required'

  if (Object.keys(errors).length > 0) return { errors, job: raw }

  const record = {
    title,
    slug: '',
    industry,
    currency: currency || 'LKR',
    salary_min: salary_min ? parseFloat(salary_min) : null,
    salary_max: salary_max ? parseFloat(salary_max) : null,
    location,
    job_type: job_type || industry,
    work_type: work_type || 'On-Site',
    posted_date,
    roles: roles || null,
    pre_requisites: pre_requisites || null,
  }

  let slug = raw.slug || ''
  let attempt = 0
  const isCustomSlug = slug && slug !== slugify(title)

  while (true) {
    if (attempt === 0 && isCustomSlug) {
      slug = slugify(slug)
      const { data: existing } = await supabase.from('premium_jobs').select('id').eq('slug', slug).maybeSingle()
      if (!existing) {
        record.slug = slug
      } else {
        attempt = 1
        slug = await generateUniqueSlug(title, undefined, 1)
        record.slug = slug
      }
    } else {
      slug = await generateUniqueSlug(title, undefined, attempt)
      record.slug = slug
    }

    const { error } = await supabase.from('premium_jobs').insert(record)

    if (!error) {
      revalidatePath('/admin/jobs')
      return { success: true }
    }

    if (error.code === '23505') {
      attempt++
      continue
    }

    return { errors: { general: error.message }, job: raw }
  }
}

export async function updateJobAction(id: string, prev: FormState, formData: FormData): Promise<FormState> {
  const raw = Object.fromEntries(formData) as Record<string, string>
  const { title, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites } = raw

  const errors: FormErrors = {}
  if (!title) errors.title = 'Title is required'

  if (Object.keys(errors).length > 0) return { errors, job: raw }

  const record = {
    title,
    slug: '',
    industry,
    currency: currency || 'LKR',
    salary_min: salary_min ? parseFloat(salary_min) : null,
    salary_max: salary_max ? parseFloat(salary_max) : null,
    location,
    job_type: job_type || industry,
    work_type: work_type || 'On-Site',
    posted_date,
    roles: roles || null,
    pre_requisites: pre_requisites || null,
    updated_at: new Date().toISOString(),
  }

  let slug = raw.slug || ''
  let attempt = 0
  const isCustomSlug = slug && slug !== slugify(title)

  while (true) {
    if (attempt === 0 && !slug) {
      slug = await generateUniqueSlug(title, id)
      record.slug = slug
    } else if (attempt === 0 && isCustomSlug) {
      slug = slugify(slug)
      const { data: existing } = await supabase.from('premium_jobs').select('id').eq('slug', slug).neq('id', id).maybeSingle()
      if (!existing) {
        record.slug = slug
      } else {
        attempt = 1
        slug = await generateUniqueSlug(title, id, 1)
        record.slug = slug
      }
    } else {
      slug = await generateUniqueSlug(title, id, attempt)
      record.slug = slug
    }

    if (!record.slug) {
      errors.slug = 'Slug is required'
      return { errors, job: raw }
    }

    const { error } = await supabase.from('premium_jobs').update(record).eq('id', id)

    if (!error) {
      revalidatePath('/admin/jobs')
      return { success: true }
    }

    if (error.code === '23505') {
      attempt++
      continue
    }

    return { errors: { general: error.message }, job: raw }
  }
}

export async function deleteJobAction(id: string) {
  const { error } = await supabase.from('premium_jobs').delete().eq('id', id)

  if (error) return { error: error.message }

  revalidatePath('/admin/jobs')
  return { success: true }
}
