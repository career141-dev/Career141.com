import { createServerClient } from './supabase'
import { parseMarkdownToNodes } from './parseJobDetails'
import {
  premiumJobCards,
  getPremiumJobBySlug as getStaticJobBySlug,
  type PremiumJob,
} from '@/components/premium-jobs/premiumJobsData'
import {
  jobDetailsBySlug,
  type JobDetailContent,
} from '@/components/premium-jobs/jobDetailsData'

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
}

function dbRowToPremiumJob(row: DbJobRow): PremiumJob {
  return {
    slug: row.slug,
    title: row.title,
    industry: row.industry,
    currency: row.currency,
    salaryMin: row.salary_min != null ? String(row.salary_min) : '',
    salaryMax: row.salary_max != null ? String(row.salary_max) : '',
    location: row.location,
    type: row.job_type,
    workType: row.work_type,
    date: formatDate(row.posted_date),
  }
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function getAllPremiumJobs(): Promise<PremiumJob[]> {
  try {
    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('premium_jobs')
      .select('*')
      .order('posted_date', { ascending: false })

    if (error) throw error

    if (data && data.length > 0) {
      return (data as DbJobRow[]).map(dbRowToPremiumJob)
    }
  } catch {
    console.warn('Supabase fetch failed, falling back to static data')
  }

  return premiumJobCards
}

export async function getPremiumJobBySlug(
  slug: string
): Promise<PremiumJob | null> {
  try {
    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('premium_jobs')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw error

    if (data) {
      return dbRowToPremiumJob(data as DbJobRow)
    }
  } catch {
    console.warn(
      `Supabase fetch for slug "${slug}" failed, falling back to static data`
    )
  }

  return getStaticJobBySlug(slug) ?? null
}

export async function getJobDetailsBySlug(
  slug: string
): Promise<JobDetailContent | null> {
  try {
    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('premium_jobs')
      .select('roles, pre_requisites')
      .eq('slug', slug)
      .single()

    if (error) throw error

    if (data && (data.roles || data.pre_requisites)) {
      return {
        roles: data.roles
          ? parseMarkdownToNodes(data.roles)
          : [],
        preRequisites: data.pre_requisites
          ? parseMarkdownToNodes(data.pre_requisites)
          : [],
      }
    }
  } catch {
    console.warn(
      `Supabase details fetch for slug "${slug}" failed, falling back to static data`
    )
  }

  return jobDetailsBySlug[slug] ?? null
}
