'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'

interface Event {
  slug: string
  name: string
}

function extractYear(name: string): string {
  const yearMatch = name.match(/\d{4}/)
  return yearMatch ? yearMatch[0] : '2025'
}

export function EventCarousel({ events, currentSlug }: { events: Event[]; currentSlug: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 100)
    }
  }

  return (
    <section className="w-full py-8 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="relative flex items-center">
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 z-10 w-10 h-10 bg-[#006763] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#005550]"
            >
              ‹
            </button>
          )}
          
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={checkScroll}
          >
            {events.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className={`flex-shrink-0 w-[280px] md:w-[320px] p-4 rounded-lg transition-colors ${
                  event.slug === currentSlug 
                    ? 'bg-[#006763] text-white' 
                    : 'bg-white hover:bg-[#006763] hover:text-white'
                }`}
              >
                <div className="text-center">
                  <h3 className="[font-family:'Quicksand',Sans-serif] font-bold text-sm md:text-base leading-tight text-black">
                    {event.name}
                  </h3>
                  <p className="[font-family:'Quicksand',Sans-serif] text-xs mt-2 opacity-80">
                    {extractYear(event.name)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {canScrollRight && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 z-10 w-10 h-10 bg-[#006763] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#005550]"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
