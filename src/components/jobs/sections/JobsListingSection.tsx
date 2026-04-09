'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface JobCategory {
  heading: string
  jobs: string[]
}

interface SectionData {
  id: string
  title: string
  description?: string
  shortTitle?: string
  theme?: string
  heroTitle?: string
  heroDescription?: string
  heroImage?: string
  image: string
  jobCategories: JobCategory[]
}

interface JobsListingSectionProps {
  sectionData?: SectionData
}

export function JobsListingSection({ sectionData }: JobsListingSectionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-full bg-white" style={{ height: '600px' }} />
  }

  const section = sectionData

  if (!section) {
    return <div className="w-full bg-white" style={{ height: '600px' }} />
  }
  const themeColor = section.theme || '#0c448b'
  const textStyle = { color: themeColor }
  const blackStyle = { color: '#000000' }

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="hidden md:flex w-full">
        <div className="relative w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] flex-shrink-0">
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1 py-10 lg:py-[60px] pr-5 md:pr-10 lg:pr-[91px]">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <h2 className="font-bold text-[28px] md:text-[32px] lg:text-[38.4px] leading-[1.2]" style={blackStyle}>
                {section.title}
              </h2>
            </div>

<div className="flex flex-col gap-8 lg:gap-14 w-full">
              {section.jobCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col">
                  <h3 className="font-bold text-[16px] md:text-[18px] mb-3" style={blackStyle}>
                    {category.heading}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {category.jobs.map((job, jobIndex) => (
                      <li key={jobIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: themeColor }} />
                        <Link 
                          href="#" 
                          className="text-[#000000] text-[14px] md:text-[15px] hover:opacity-80 transition-colors"
                          style={{ color: '#000000' }}
                        >
                          {job}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full max-w-[1440px] mx-auto px-5 py-10">
        <div className="relative w-full h-[400px]">
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-start mt-6 pl-10">
          <div className="mb-4">
            <h2 className="font-bold text-[28px] md:text-[32px] leading-[1.2]" style={blackStyle}>
              {section.title}
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:gap-14 w-full">
            {section.jobCategories.map((category, catIndex) => (
              <div key={catIndex} className="flex flex-col">
                <h3 className="font-bold text-[16px] md:text-[18px] mb-3" style={blackStyle}>
                  {category.heading}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {category.jobs.map((job, jobIndex) => (
                    <li key={jobIndex} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: themeColor }} />
                      <Link 
                        href="#" 
                        className="text-[#000000] text-[14px] md:text-[15px] hover:opacity-80 transition-colors"
                        style={{ color: '#000000' }}
                      >
                        {job}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}