export const runtime = 'edge'
import Link from 'next/link'
import { PremiumJobApplyPage } from '@/components/premium-jobs/PremiumJobApplyPage'
import {
  getAllPremiumJobs,
  getPremiumJobBySlug,
  getJobDetailsBySlug,
} from '@/lib/jobs'

export async function generateStaticParams() {
  const jobs = await getAllPremiumJobs()
  return jobs.map((job) => ({
    slug: job.slug,
  }))
}

export default async function PremiumJobApplyRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const [job, details, allJobs] = await Promise.all([
    getPremiumJobBySlug(resolvedParams.slug),
    getJobDetailsBySlug(resolvedParams.slug),
    getAllPremiumJobs(),
  ])

  if (!job) {
    return (
      <div>
        <h1>Job not found</h1>
        <Link href="/premium-jobs">Back to Premium Jobs</Link>
      </div>
    )
  }

  return (
    <PremiumJobApplyPage
      job={job}
      details={details}
      allJobs={allJobs}
    />
  )
}
