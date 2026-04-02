import { PremiumJobApplyPage } from '@/components/premium-jobs/PremiumJobApplyPage'
import { premiumJobCards } from '@/components/premium-jobs/premiumJobsData'

export function generateStaticParams() {
  return premiumJobCards.map((job) => ({
    slug: job.slug,
  }))
}

export default async function PremiumJobApplyRoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  return <PremiumJobApplyPage slug={resolvedParams.slug} />
}
