import { JobListingsSection, PremiumJobsSection } from './sections'
import { withBasePath } from '@/lib/assetPath'
import { CompanyFooter } from '@/components/common'

export function PremiumJobsPage() {
  return (
    <main className="flex flex-col items-start relative bg-career-14-1comwhite w-full min-h-screen">
      <div className="flex flex-col w-full">
        <JobListingsSection />
        <PremiumJobsSection />
        <CompanyFooter />
      </div>

      <img
        className="fixed right-10 bottom-10 w-[68px] h-[68px] z-50"
        alt="Div ht ctc chat"
        src={withBasePath('/figmaAssets/div-ht-ctc-chat.svg')}
      />
    </main>
  )
}
