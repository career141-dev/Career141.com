'use client'

import { useState, useEffect, useCallback } from 'react'
import { withBasePath } from '@/lib/assetPath'

const milestones = [
  {
    subtitle: 'SETTING UP OFFICE IN SINGAPORE',
    year: '2021',
    description:
      'In our effort to expand our physical presence offshore, we established an office in Singapore. This office serves clients in Finance & Audit, Civil Engineering & Quantity Surveying, Digital Marketing, and Software Engineering Infrastructure.',
    image: withBasePath('/figmaAssets/milestone-slide-1.jpg'),
  },
  {
    subtitle: 'SRI LANKA NATIONAL HR CONFERENCE DEBATE',
    year: '2018 - 2019',
    description:
      "Our exceptional service standards and robust networking have made us a prominent name among professional bodies. We were honored to sponsor the National HR Conference's HR Debate event in Sri Lanka for two consecutive years (2018 and 2019). This prestigious event featured participation from leading conglomerates marking it as an extraordinary milestone for our company.",
    image: withBasePath('/figmaAssets/milestone-slide-2.jpg'),
  },
]

export function OurMilestoneSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
    goTo((current + 1) % milestones.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + milestones.length) % milestones.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % milestones.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full" data-testid="section-milestones">
      <div className="text-center py-2">
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
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${milestone.image})` }} />
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(17, 89, 63, 0.65)' }} />
          </div>
        ))}

        <div className="absolute inset-0 z-10 flex items-center justify-center px-8 sm:px-12 md:px-20">
          <div className="flex flex-col items-center text-center w-full max-w-[900px]">
            <p
              style={{
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.5vw, 21.5px)',
                lineHeight: '1.3',
                color: '#f5f5f5',
              }}
              data-testid="text-milestone-subtitle"
            >
              {milestones[current].subtitle}
            </p>
            <p
              style={{
                fontFamily: "'Quicksand', Helvetica, sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(48px, 6vw, 93px)',
                lineHeight: '1.2',
                color: '#ffffff',
              }}
              data-testid="text-milestone-year"
            >
              {milestones[current].year}
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(13px, 1vw, 15px)',
                lineHeight: '1.5',
                color: '#f5f5f5',
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
