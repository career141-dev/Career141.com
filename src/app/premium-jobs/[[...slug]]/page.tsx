export const runtime = 'edge'
import Link from 'next/link'
import { PremiumJobsPage } from '@/components/premium-jobs'
import { PremiumJobApplyPage } from '@/components/premium-jobs/PremiumJobApplyPage'
import { getAllPremiumJobs, getPremiumJobBySlug, getJobDetailsBySlug } from '@/lib/jobs'

export default async function PremiumJobsCatchAll({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug || []

  if (slug.length === 0) {
    const jobs = await getAllPremiumJobs()
    return <PremiumJobsPage jobs={jobs} />
  }

  const [job, details, allJobs] = await Promise.all([
    getPremiumJobBySlug(slug[0]),
    getJobDetailsBySlug(slug[0]),
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

  return <PremiumJobApplyPage job={job} details={details} allJobs={allJobs} />
}
