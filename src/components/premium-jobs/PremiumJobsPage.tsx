import { JobListingsSection, PremiumJobsSection } from './sections'
import { CompanyFooter } from '@/components/common'

export function PremiumJobsPage() {
  return (
    <main className="flex flex-col items-start relative bg-career-14-1comwhite w-full min-h-screen">
      <div className="flex flex-col w-full">
        <JobListingsSection />
        <PremiumJobsSection />
        <CompanyFooter />
      </div>
    </main>
  )
}