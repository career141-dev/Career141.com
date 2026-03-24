import { Navbar } from '@/components/common/Navbar'
import { HeroSection } from '@/components/executive-search/HeroSection'
import { CommitmentSection } from '@/components/executive-search/CommitmentSection'
import { ImageSlideshow } from '@/components/executive-search/ImageSlideshow'
import { ProcessFlowSection } from '@/components/executive-search/ProcessFlowSection'
import { ExecutiveFooter } from '@/components/executive-search/ExecutiveFooter'

export default function ExecutiveSearchPage() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Navbar />
      <HeroSection />
      
      <div className="w-full pl-0">
        <CommitmentSection />
      </div>
      <h2 className="[font-family:'Quicksand',Helvetica] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black py-8 sm:py-12">
        Our Characterization
      </h2>
      <ImageSlideshow />
      <ProcessFlowSection />
      <h2 className="[font-family:'Quicksand',Helvetica] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black py-8 sm:py-12">
        Specialized Industry
      </h2>

      <ExecutiveFooter />
    </main>
  )
}
