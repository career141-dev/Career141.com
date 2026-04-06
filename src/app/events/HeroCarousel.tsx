'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { withBasePath } from '@/lib/assetPath'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroEvent {
  folder: string
  slug: string
  image: string
}

const heroEvents: HeroEvent[] = [
  {
    folder: "Women's Day and IFTAR",
    slug: 'womens-day-and-iftar',
    image: "/images/Events/Women's Day and IFTAR/IWD-2025-at-Career141-1-scaled.webp",
  },
  {
    folder: '2024 NEW YEAR MEET-UP',
    slug: '2024-new-year-meet-up',
    image: '/images/Events/2024 NEW YEAR MEET-UP/IMG_0999.png',
  },
  {
    folder: 'CareerDay SLIIT',
    slug: 'careerday-sliit',
    image: '/images/Events/CareerDay SLIIT/First-Image.webp',
  },
  {
    folder: 'PEOPLE SUMMIT 2025 - SLASSCOM',
    slug: 'people-summit-2025-slasscom',
    image: '/images/Events/PEOPLE SUMMIT 2025 - SLASSCOM/Group.png',
  },
]

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsPerView = isMobile ? 1 : 3
  const maxIndex = Math.max(0, heroEvents.length - itemsPerView)
  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex

  const scrollLeft = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => Math.max(0, prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const scrollRight = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => Math.min(maxIndex, prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const visibleEvents = heroEvents.slice(activeIndex, activeIndex + itemsPerView)

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative">
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={withBasePath(heroEvents[displayIndex].image)}
                alt={heroEvents[displayIndex].folder}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="absolute inset-0">
              <div className="flex h-full">
                {visibleEvents.map((event, index) => {
                  const globalIndex = activeIndex + index
                  const isHovered = hoveredIndex === globalIndex
                  return (
                    <div 
                      key={globalIndex}
                      className="relative flex-1 group transition-colors"
                      onMouseEnter={() => setHoveredIndex(globalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div 
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                        style={{ 
                          background: isHovered ? 'linear-gradient(180deg, #01C5C4 0%, rgba(242,41,91,0) 60%)' : 'transparent',
                          transition: 'background 0.3s ease-in-out'
                        }}
                      >
                        <p className="[font-family:'Quicksand',Sans-serif] text-white text-sm md:text-base font-bold text-center px-2">
                          {event.folder}
                        </p>
                        <Link 
                          href={`/events/${event.slug}`}
                          className="[font-family:'Quicksand',Sans-serif] text-white text-xs border border-white px-3 py-1 rounded-full hover:bg-white hover:text-[#006763] transition-colors inline-block"
                        >
                          View Event
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {heroEvents.length > itemsPerView && (
            <>
              <button 
                onClick={scrollLeft}
                disabled={activeIndex === 0}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 backdrop-blur-sm transition-all ${
                  activeIndex === 0 
                    ? 'bg-white/10 cursor-not-allowed opacity-50' 
                    : 'bg-white/20 hover:bg-white/40 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={scrollRight}
                disabled={activeIndex >= maxIndex}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 backdrop-blur-sm transition-all ${
                  activeIndex >= maxIndex 
                    ? 'bg-white/10 cursor-not-allowed opacity-50' 
                    : 'bg-white/20 hover:bg-white/40 cursor-pointer'
                }`}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          <div className="flex justify-center gap-2 mt-4">
            {heroEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index <= maxIndex) {
                    setActiveIndex(index)
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-[#01C5C4] w-6' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
