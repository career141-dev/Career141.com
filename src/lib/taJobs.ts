// Jobs listed from the TA System (Nov 2026). In the TA System every job has a
// "Website" switch; the jobs switched on come from its feed and are shown here
// beside the jobs added through /admin. Docs: ta-system docs/WEBSITE-JOBS-API.md.
//
// Server only: the key (TA_WEBSITE_TOKEN) must never reach a browser. With no
// key, or if the TA System does not answer, the site shows its own jobs only.
import { parseMarkdownToNodes } from './parseJobDetails'
import type { PremiumJob } from '@/components/premium-jobs/premiumJobsData'
import type { JobDetailContent } from '@/components/premium-jobs/jobDetailsData'

type TaJob = {
  id: string
  title: string
  locations: string[]
  description: string
  skills: string[]
  experienceMinYears: number | null
  experienceMaxYears: number | null
  postedAt: number
}

const FEED_URL =
  process.env.TA_JOBS_FEED_URL || 'https://api.career141.com/http/integrations/v1/website/jobs'
const KEEP_MS = 5 * 60 * 1000

// Kept for five minutes, so a page view does not reach the TA System.
let held: { at: number; jobs: TaJob[] } | null = null

async function readFeed(): Promise<TaJob[]> {
  const token = process.env.TA_WEBSITE_TOKEN
  if (!token) return []
  if (held && Date.now() - held.at < KEEP_MS) return held.jobs
  try {
    const res = await fetch(FEED_URL, {
      headers: { authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 300 },
    })
    if (!res.ok) throw new Error(`TA jobs feed answered ${res.status}`)
    const body = (await res.json()) as { jobs?: TaJob[] }
    held = { at: Date.now(), jobs: Array.isArray(body.jobs) ? body.jobs : [] }
  } catch (e) {
    console.warn('TA jobs feed failed', e)
    // The last list we had is better than none.
    if (!held) return []
  }
  return held.jobs
}

function slugOf(job: TaJob): string {
  const words = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return `${words || 'job'}-${job.id.slice(-8).toLowerCase()}`
}

function toPremiumJob(job: TaJob): PremiumJob {
  return {
    slug: slugOf(job),
    title: job.title,
    industry: 'Other',
    currency: 'LKR',
    salaryMin: '',
    salaryMax: '',
    location: job.locations.join(', '),
    type: 'Other',
    workType: 'On-Site',
    date: new Date(job.postedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  }
}

function toDetails(job: TaJob): JobDetailContent {
  const years =
    job.experienceMinYears != null && job.experienceMaxYears != null
      ? `${job.experienceMinYears} to ${job.experienceMaxYears} years of experience`
      : job.experienceMinYears != null
        ? `${job.experienceMinYears}+ years of experience`
        : null
  const needs = [...(years ? [years] : []), ...job.skills]
  return {
    roles: parseMarkdownToNodes(job.description),
    preRequisites: needs.length ? [{ type: 'bullets', items: needs }] : [],
  }
}

export async function getTaJobs(): Promise<PremiumJob[]> {
  return (await readFeed()).map(toPremiumJob)
}

async function find(slug: string): Promise<TaJob | null> {
  return (await readFeed()).find((j) => slugOf(j) === slug) ?? null
}

export async function getTaJobBySlug(slug: string): Promise<PremiumJob | null> {
  const job = await find(slug)
  return job ? toPremiumJob(job) : null
}

export async function getTaJobDetailsBySlug(slug: string): Promise<JobDetailContent | null> {
  const job = await find(slug)
  return job ? toDetails(job) : null
}
