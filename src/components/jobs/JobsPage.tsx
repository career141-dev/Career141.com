'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common'
import { MeetingSchedulerSubsection } from '@/components/home/sections/MeetingSchedulerSubsection'
import { JobsHero } from './sections/JobsHero'
import { JobsWhyChooseUs } from './sections/JobsWhyChooseUs'
import { JobsUnequalledProficiency } from './sections/JobsUnequalledProficiency'
import { JobsStatsSection } from './sections/JobsStatsSection'
import { JobsEmptySection } from './sections/JobsEmptySection'
import { JobsListingSection } from './sections/JobsListingSection'
import { JobsBrandsSection } from './sections/JobsBrandsSection'
import { JobsTestimonialsSection } from './sections/JobsTestimonialsSection'
import { JobsSpecializations } from './sections/JobsSpecializations'
import { JobsBrands } from './sections/JobsBrands'
import { JobsGlobalReach } from './sections/JobsGlobalReach'

export interface JobSection {
  id: string
  title: string
  description: string
  theme?: string
  heroTitle?: string
  heroDescription?: string
  heroImage?: string
  image: string
  jobCategories: { heading: string; jobs: string[] }[]
}

interface JobsPageProps {
  heroData?: JobSection
  showSections?: {
    hero?: boolean
    whyChooseUs?: boolean
    unequalledProficiency?: boolean
    statsSection?: boolean
    emptySection?: boolean
    jobsListingSection?: boolean
    brandsSection?: boolean
    testimonialsSection?: boolean
    specializations?: boolean
    brands?: boolean
    globalReach?: boolean
  }
}

export function JobsPage({ heroData, showSections }: JobsPageProps) {
  const [mounted, setMounted] = useState(false)
  const [scaleFactor, setScaleFactor] = useState(1)

  const defaults = {
    hero: false,
    whyChooseUs: false,
    unequalledProficiency: false,
    statsSection: false,
    emptySection: false,
    jobsListingSection: false,
    brandsSection: false,
    testimonialsSection: false,
    specializations: false,
    brands: false,
    globalReach: false
  }

  const sections = { ...defaults, ...showSections }

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

  const desktopHeroH = 584.31

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#cbfc06] selection:text-[#0c448b]">
      <Navbar />

      <main className="flex-grow w-full bg-white">
        {sections.hero && <JobsHero heroData={heroData} />}
        
        {sections.whyChooseUs && <JobsWhyChooseUs />}
        
        {sections.unequalledProficiency && <JobsUnequalledProficiency />}
        
        {sections.statsSection && <JobsStatsSection />}
        
        {sections.emptySection && <JobsEmptySection />}
        
        {sections.jobsListingSection && <JobsListingSection section={heroData} />}
        
        {sections.brandsSection && <JobsBrandsSection />}
        
        {sections.testimonialsSection && <JobsTestimonialsSection />}
        
        {sections.specializations && <JobsSpecializations />}
        
        {sections.brands && <JobsBrands />}

        {sections.globalReach && <JobsGlobalReach />}
      </main>

      <MeetingSchedulerSubsection />
      <CompanyFooter />
    </div>
  )
}