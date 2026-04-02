'use client'

import { useState, useEffect, useCallback } from 'react'
import { withBasePath } from '@/lib/assetPath'

const milestones = [
  {
    subtitle: 'FOUNDED',
    year: '2003',
    description:
      'In 2003, leveraging his extensive career as a professional marketer in leading companies across the telecom, broadband, home appliance, and advertising industries, Azeem founded Career Consultants (Pvt) Ltd, now known as Career141. Initially starting as a home-based venture, the company focused on providing elite resume design services for C-level executives for the first two years.',
    image: withBasePath('/images/journey/coworkers-meeting-hall-office-min-scaled.webp'),
  },
  {
    subtitle: 'SETTING UP CORPORATE OFFICE',
    year: '2004',
    description:
      'As business demand grew, Career141 opened its first corporate office, a 500 sq ft space in the heart of Colombo 02, with one employee.',
    image: withBasePath('/images/journey/full-shot-people-learning-office-min-scaled.webp'),
  },
  {
    subtitle: 'TRANSFORMS TO EXECUTIVE SEARCH',
    year: '2006',
    description:
      "After three years of one-on-one interactions as a resume designer with top corporate talent, Career141 honed its expertise in understanding diverse job roles, complex skills, and profile screening. This experience paved the way for the company's transformation into a specialized executive search firm.",
    image: withBasePath('/images/journey/young-business-people-working-office-min-scaled.webp'),
  },
  {
    subtitle: 'OVERSEAS CLIENT NETWORK',
    year: '2008',
    description:
      'Our heartfelt commitment and strong networking have led to rapid growth through word-of-mouth referrals. As our presence grew, reflected by increasing Google Analytics metrics, we began attracting overseas clientele. This expansion allowed us to flourish in regions such as the Middle East, India, Bangladesh, Singapore, and Vietnam. Today, we are proud to serve clients in 21 countries.',
    image: withBasePath('/images/journey/detailed-view-trade-negotiation-meeting-participants-discussing-globe-economic-charts-min-scaled.webp'),
  },
  {
    subtitle: 'MOVING TO PREMIUM LOCATIONS',
    year: '2010',
    description:
      'The increasing demand from top corporate conglomerates and candidates prompted us to expand to more accessible and spacious locations. We first opened an office in Colombo 03, next to the former HSBC Bank. In 2012, we moved to a larger office on Greenpath in Colombo 03, accommodating a team of 6-8 employees. We moved to another premium location in Stubbs place in Colombo - 04 with 18 plus employees in 2016.',
    image: withBasePath('/images/journey/location-symbol-street-city-min-scaled.webp'),
  },
  {
    subtitle: 'BECOMING KNOWLEDGE EXPERTS',
    year: '2015',
    description:
      'With over two decades of experience, we have transitioned into recognized knowledge experts across 20+ skill sets crucial for organizations. Continuously evolving, we consistently gain momentum in mastering diverse arrays of new skill sets demanded by the market and in response to global changes.',
    image: withBasePath('/images/journey/closeup-pins-world-map-journey-travel-min-scaled.webp'),
  },
  {
    subtitle: 'SRI LANKA NATIONAL HR CONFERENCE DEBATE',
    year: '2018 - 2019',
    description:
      "Our exceptional service standards and robust networking have made us a prominent name among professional bodies. We were honored to sponsor the National HR Conference's HR Debate event in Sri Lanka for two consecutive years (2018 and 2019). This prestigious event featured participation from leading conglomerates, marking it as an extraordinary milestone for our company.",
    image: withBasePath('/images/journey/7.webp'),
  },
  {
    subtitle: 'SETTING UP OFFICE IN SINGAPORE',
    year: '2021',
    description:
      'In our effort to expand our physical presence offshore, we established an office in Singapore. This office serves clients in Finance & Audit, Civil Engineering & Quantity Surveying, Digital Marketing, and Software Engineering & Infrastructure.',
      image: withBasePath('/images/journey/merlion-statue-cityscape-singapore-min-scaled.webp'),
    },
  {
    subtitle: 'CAREER141 IHR',
    year: '2022',
    description:
      'We started up International Health Recruitment in 2022. We cover a wider array of talent in the Healthcare Sector and source for overseas clients as well.',
    image: withBasePath('/images/journey/beautiful-young-woman-using-smart-phone-table-min-scaled.webp'),
  },
  {
    subtitle: 'CERTIFIED AS A GREAT PLACE TO WORK',
    year: '2024',
    description:
      'Career141 becomes the first executive search firm to become certified as a great place to work.',
    image: withBasePath('/images/journey/young-business-people-working-office-10.webp'),
  },
  {
    subtitle: 'NEW YEAR MEETUP',
    year: '2025',
    description:
      'Career141 becomes the first executive search firm to become certified as a great place to work.',
    image: withBasePath('/images/journey/DSC01325-1-1.webp'),
  },
]

export function OurMilestoneSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const milestonesLength = milestones.length

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 700)
    },
    [isTransitioning]
  )

  const next = useCallback(() => {
    goTo((current + 1) % milestonesLength)
  }, [current, goTo, milestonesLength])

  const prev = useCallback(() => {
    goTo((current - 1 + milestonesLength) % milestonesLength)
  }, [current, goTo, milestonesLength])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % milestonesLength)
    }, 6000)
    return () => clearInterval(timer)
  }, [milestonesLength])

  return (
    <section className="relative w-full" data-testid="section-milestones">
      <div className="text-center py-2 pb-8 md:pb-12">
        <h2
          style={{
            fontFamily: "'Quicksand', Helvetica, sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 2.5vw, 38.4px)',
            lineHeight: '1.1',
            color: '#161618',
          }}
          data-testid="text-milestones-title"
        >
          Our Milestones
        </h2>
      </div>

      <div className="relative w-full overflow-hidden h-[70vh] md:h-screen max-h-[855px] min-h-[420px]">
        {milestones.map((milestone, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center scale-[1.02] transition-transform duration-1000 ease-out"
              style={{ 
                backgroundImage: `url(${milestone.image})`,
                transform: i === current ? 'scale(1.02)' : 'scale(1.08)'
              }} 
            />
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 105, 72, 0.73)' }} />
          </div>
        ))}

        <div key={current} className="absolute inset-0 z-10 flex items-center justify-center px-8 sm:px-12 md:px-20">
          <div className="flex flex-col items-center text-center w-full max-w-[900px] animate-fade-in">
            <p
              className="animate-slide-up"
              style={{
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.5vw, 21.5px)',
                lineHeight: '1.3',
                color: '#f5f5f5',
                animationDelay: '0.2s',
              }}
              data-testid="text-milestone-subtitle"
            >
              {milestones[current].subtitle}
            </p>
            <p
              className="animate-slide-up"
              style={{
                fontFamily: "'Quicksand', Helvetica, sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(48px, 6vw, 93px)',
                lineHeight: '1.2',
                color: '#ffffff',
                animationDelay: '0.4s',
              }}
              data-testid="text-milestone-year"
            >
              {milestones[current].year}
            </p>
            <p
              className="mt-1 animate-slide-up"
              style={{
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(13px, 1vw, 15px)',
                lineHeight: '1.5',
                color: '#f5f5f5',
                animationDelay: '0.6s',
              }}
              data-testid="text-milestone-description"
            >
              {milestones[current].description}
            </p>
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-3 md:left-5 z-20 flex items-center justify-center hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          data-testid="milestone-prev"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 48 49" fill="none" className="w-8 h-8 sm:w-12 sm:h-12">
            <path d="M44 22H10.82L22.42 10.4L20 8L4 24L20 40L22.42 37.6L10.82 26H44V22Z" fill="white" />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-3 md:right-5 z-20 flex items-center justify-center hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          data-testid="milestone-next"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 48 49" fill="none" className="w-8 h-8 sm:w-12 sm:h-12">
            <path d="M4 26H37.18L25.58 37.6L28 40L44 24L28 8L25.58 10.4L37.18 22H4V26Z" fill="white" />
          </svg>
        </button>
      </div>

      <div className="w-full" style={{ height: 20, backgroundColor: '#161618' }} />
    </section>
  )
}
