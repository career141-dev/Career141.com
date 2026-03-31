'use client'

import { useState } from 'react'
import Link from 'next/link'
import { withBasePath } from '@/lib/assetPath'

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 transition-all duration-700 ease-in-out" style={{ opacity: 1 }}>
            <img
              src={withBasePath(heroEvents[hoveredIndex ?? 0].image)}
              alt={heroEvents[hoveredIndex ?? 0].folder}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 animate-fade-in"></div>
          
          <div className="absolute inset-0">
            <div className="flex h-full">
              {heroEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`relative flex-1 cursor-pointer group transition-colors ${index < heroEvents.length - 1 ? 'border-r border-white/50' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                    style={{ 
                      background: hoveredIndex === index ? 'linear-gradient(180deg, #01C5C4 0%, rgba(242,41,91,0) 60%)' : 'transparent',
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
