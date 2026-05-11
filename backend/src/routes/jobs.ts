import { Router, Request, Response } from 'express'
import { supabase } from '../supabase'

const router = Router()

type DbJobRow = {
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

async function getIndustries(): Promise<string[]> {
  const { data } = await supabase
    .from('premium_jobs')
    .select('industry')
    .order('industry')

  if (!data) return []
  const unique = [...new Set(data.map((r) => r.industry as string))]
  return unique.sort()
}

// Admin: Job listing page
router.get('/', async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1
  const limit = 20
  const offset = (page - 1) * limit
  const search = (req.query.search as string) || ''
  const industry = (req.query.industry as string) || ''

  let query = supabase
    .from('premium_jobs')
    .select('*', { count: 'exact' })

  if (search) {
    query = query.or(
      `title.ilike.%${search}%,location.ilike.%${search}%,slug.ilike.%${search}%`
    )
  }

  if (industry) {
    query = query.eq('industry', industry)
  }

  const { data, count, error } = await query
    .order('posted_date', { ascending: false })
    .range(offset, offset + limit - 1)

  const industries = await getIndustries()

  res.render('jobs/index', {
    jobs: (data as DbJobRow[]) || [],
    total: count || 0,
    page,
    limit,
    search,
    industry,
    industries,
    error: error ? error.message : null,
  })
})

// Admin: New job form
router.get('/new', async (_req: Request, res: Response) => {
  const industries = await getIndustries()
  res.render('jobs/new', {
    industries,
    job: null,
    errors: {},
  })
})

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

async function generateUniqueSlug(title: string, excludeId?: string | string[]): Promise<string> {
  let slug = slugify(title) || 'untitled'

  let query = supabase.from('premium_jobs').select('id').eq('slug', slug)
  if (excludeId) query = query.neq('id', excludeId)
  const { data } = await query

  if (!data || data.length === 0) return slug

  const now = new Date()
  const ts = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`
  return `${slugify(title)}-${ts}`
}

// Admin: Create job
router.post('/new', async (req: Request, res: Response) => {
  const { title, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites } = req.body || {}

  const errors: Record<string, string> = {}
  if (!title) errors.title = 'Title is required'
  if (!industry) errors.industry = 'Industry is required'
  if (!location) errors.location = 'Location is required'
  if (!posted_date) errors.posted_date = 'Posted date is required'

  if (Object.keys(errors).length > 0) {
    const industries = await getIndustries()
    return res.render('jobs/new', {
      industries,
      job: req.body,
      errors,
    })
  }

  const slug = await generateUniqueSlug(title)

  const { error } = await supabase.from('premium_jobs').insert({
    title,
    slug,
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
  })

  if (error) {
    const industries = await getIndustries()
    return res.render('jobs/new', {
      industries,
      job: req.body,
      errors: { general: error.message },
    })
  }

  res.redirect('/admin/jobs')
})

// Admin: Edit job form
router.get('/:id/edit', async (req: Request, res: Response) => {
  const { id } = req.params

  const { data, error } = await supabase
    .from('premium_jobs')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) {
    return res.redirect('/admin/jobs')
  }

  const industries = await getIndustries()
  res.render('jobs/edit', {
    job: data as DbJobRow,
    industries,
    errors: {},
  })
})

// Admin: Update job
router.post('/:id/edit', async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, slug: rawSlug, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites } = req.body || {}

  const errors: Record<string, string> = {}
  if (!title) errors.title = 'Title is required'

  // Auto-generate slug if empty, ensure uniqueness
  let slug = rawSlug || ''
  if (!slug) {
    slug = await generateUniqueSlug(title, id)
  } else {
    slug = slugify(slug)
    // Check uniqueness if slug changed
    const existing = await supabase.from('premium_jobs').select('id').eq('slug', slug).neq('id', id)
    if (existing.data && existing.data.length > 0) {
      slug = await generateUniqueSlug(title, id)
    }
  }

  if (!slug) errors.slug = 'Slug is required'

  if (Object.keys(errors).length > 0) {
    const industries = await getIndustries()
    return res.render('jobs/edit', {
      job: { id, title, slug, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites },
      industries,
      errors,
    })
  }

  const { error } = await supabase
    .from('premium_jobs')
    .update({
      title,
      slug,
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
    })
    .eq('id', id)

  if (error) {
    const industries = await getIndustries()
    return res.render('jobs/edit', {
      job: { id, title, slug, industry, currency, salary_min, salary_max, location, job_type, work_type, posted_date, roles, pre_requisites },
      industries,
      errors: { general: error.message },
    })
  }

  res.redirect('/admin/jobs')
})

// Admin: Delete job
router.post('/:id/delete', async (req: Request, res: Response) => {
  const { id } = req.params

  const { error } = await supabase
    .from('premium_jobs')
    .delete()
    .eq('id', id)

  if (error) {
    return res.redirect('/admin/jobs?error=' + encodeURIComponent(error.message))
  }

  res.redirect('/admin/jobs')
})

// API: List jobs (JSON)
router.get('/api', async (_req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('premium_jobs')
    .select('*')
    .order('posted_date', { ascending: false })

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.json({ jobs: data })
})

// API: Single job (JSON)
router.get('/api/:slug', async (req: Request, res: Response) => {
  const { slug } = req.params

  const { data, error } = await supabase
    .from('premium_jobs')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    return res.status(404).json({ error: 'Job not found' })
  }

  res.json({ job: data })
})

export default router
