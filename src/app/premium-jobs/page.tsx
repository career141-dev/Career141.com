import { PremiumJobsPage } from '@/components/premium-jobs'
import { getAllPremiumJobs } from '@/lib/jobs'

export default async function PremiumJobsRoutePage() {
  const jobs = await getAllPremiumJobs()
  return <PremiumJobsPage jobs={jobs} />
}
