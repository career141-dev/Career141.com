'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common/Footer/CompanyFooter'
import FrameDesktop from './Frame'
import FrameMobile from './390WDefault/390WDefault'
import { ApparelHero } from './sections/ApparelHero'

type SectionKey = 'specializations' | 'brands' | 'globalReach'

interface ApparelMerchandisingMarketingPageProps {
  sectionsToShow?: SectionKey[]
}

/**
 * ApparelMerchandisingMarketingPage Component
 * 
 * Step 1: Modular Hero Section
 * This page now uses a modular <ApparelHero /> for the top section.
 * The rest of the content (Specializations, Brands, Contact) is still 
 * served from the original high-fidelity frames but is "cropped" to 
 * show only the lower sections.
 */
export function ApparelMerchandisingMarketingPage({ sectionsToShow }: ApparelMerchandisingMarketingPageProps) {
  const [mounted, setMounted] = useState(false)
  const [scaleFactor, setScaleFactor] = useState(1)

  useEffect(() => {
    setMounted(true)
    
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 768 && width < 1520) {
        setScaleFactor(width / 1520)
      } else if (width < 390) {
        setScaleFactor(width / 390)
      } else {
        setScaleFactor(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  // Hero heights for cropping
  const desktopHeroH = 584.31;
  const mobileHeroH = 780;

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#cbfc06] selection:text-[#0c448b]">
      {/* Global Navigation */}
      <Navbar />

      <main className="flex-grow w-full bg-white">
        
        {/* MODULAR SECTION 1: HERO */}
        <ApparelHero />

        {/* 
          REST OF THE PAGE (Desktop):
          We hide the top 584px (Original Hero) and show the remaining 4840px.
        */}
        <div className="hidden md:flex flex-col items-center justify-start w-full overflow-hidden" 
             style={{ height: `${(4725 - desktopHeroH) * scaleFactor}px` }}>
          <div 
            className="origin-top"
            style={{ 
              width: '1520px', 
              transform: `scale(${scaleFactor})`,
              marginTop: `-${desktopHeroH}px`,
              marginBottom: 0,
              transition: 'transform 0.1s linear'
            }}
          >
            <FrameDesktop sectionsToShow={sectionsToShow} />
          </div>
        </div>

        {/* 
          REST OF THE PAGE (Mobile):
          We hide the top 780px (Original Hero) and show the remaining 5432px.
        */}
        <div className="block md:hidden w-full overflow-hidden" 
             style={{ height: `${(6212 - mobileHeroH) * (window.innerWidth < 390 ? window.innerWidth / 390 : 1)}px` }}>
          <div 
            className="origin-top"
            style={{ 
              width: '390px', 
              transform: `scale(${window.innerWidth < 390 ? window.innerWidth / 390 : 1})`,
              marginTop: `-${mobileHeroH}px`,
              margin: '0 auto'
            }}
          >
            <FrameMobile />
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <div className="mt-[-12px]">
        <CompanyFooter />
      </div>
    </div>
  )
}