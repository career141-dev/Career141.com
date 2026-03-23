import { HeroSection } from '@/components/executive-search/HeroSection'
import { CommitmentSection } from '@/components/executive-search/CommitmentSection'
import { FeaturesGrid } from '@/components/executive-search/FeaturesGrid'
import { StrategicSection } from '@/components/executive-search/StrategicSection'
import { ExecutiveFooter } from '@/components/executive-search/ExecutiveFooter'

export default function ExecutiveSearchPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      
      <div className="max-w-6xl mx-auto px-6">
        <CommitmentSection />
        <FeaturesGrid />
        <StrategicSection />
      </div>

      <ExecutiveFooter />
    </main>
  )
}
