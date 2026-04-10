'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { withBasePath } from '@/lib/assetPath'

const slides = [
  { 
    src: withBasePath('/images/slide/Results-Driven-Legacy-scaled.webp'), 
    title: 'Results Driven Legacy', 
    description: "The firm's long-standing legacy is defined by a results-driven approach. Clients have come to expect not just placements, but a track record of successful, impactful placements that have contributed to the success of organizations over the years." 
  },
  { 
    src: withBasePath('/images/slide/Client-Centric-Excellence-scaled.webp'), 
    title: 'Client-Centric Excellence', 
    description: 'We are dedicated to delivering exceptional service that goes beyond expectations, ensuring our clients\' success is at the forefront of everything we do.' 
  },
  { 
    src: withBasePath('/images/slide/Global-Visionary-scaled.webp'), 
    title: 'Global Visionary', 
    description: 'Having successfully placed executives in both local and overseas positions, the brand projects a global perspective. It is seen as a visionary in identifying and connecting top-tier talent across international boundaries.' 
  },
  { 
    src: withBasePath('/images/slide/Industry-Stewardship-scaled.webp'), 
    title: 'Trusted Steward', 
    description: 'The firm is perceived as a trusted steward of both client and candidate interests. Its long history underscores a commitment to ethical practices, confidentiality, and the responsible handling of sensitive information.' 
  },
  { 
    src: withBasePath('/images/slide/Strategic-Leadership-scaled.webp'), 
    title: 'Strategic Partnership', 
    description: 'We strive to be more than just a service provider; we aim to be a trusted strategic partner, deeply invested in the success and growth of our clients.' 
  },
  { 
    src: withBasePath('/images/slide/Strategic-Partnership-scaled.webp'), 
    title: 'Strategic Navigator', 
    description: "With a deep understanding of the business landscape, the brand is seen as a strategic navigator, helping clients and candidates alike chart successful courses in their professional journeys. The emphasis is on long-term success and strategic alignment." 
  },
  { 
    src: withBasePath('/images/slide/Strategic-Navigator-scaled.webp'), 
    title: 'Strategic Navigator', 
    description: "With a deep understanding of the business landscape, the brand is seen as a strategic navigator, helping clients and candidates alike chart successful courses in their professional journeys. The emphasis is on long-term success and strategic alignment." 
  },
]

const SLIDE_DURATION = 5000

export function ImageSlideshow({ currentSlide: externalSlide, onSlideChange }: { currentSlide?: number; onSlideChange?: (index: number) => void }) {
  const [internalSlide, setInternalSlide] = useState(0)
  const currentSlide = externalSlide !== undefined ? externalSlide : internalSlide

  useEffect(() => {
    if (externalSlide !== undefined && externalSlide !== internalSlide) {
      setInternalSlide(externalSlide)
    }
  }, [externalSlide, internalSlide])
  
  const setSlide = useCallback((newSlide: number) => {
    if (externalSlide !== undefined) {
      onSlideChange?.(newSlide)
    } else {
      setInternalSlide(newSlide)
    }
  }, [externalSlide, onSlideChange])

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length
    setSlide(next)
  }, [currentSlide, setSlide])

  const prevSlide = useCallback(() => {
    const next = (currentSlide - 1 + slides.length) % slides.length
    setSlide(next)
  }, [currentSlide, setSlide])

  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_DURATION)
    return () => clearInterval(interval)
  }, [nextSlide])

  const safeSlide = slides[currentSlide] || slides[0]

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Invisible spacer to maintain proportional height based on image aspect ratio */}
      <img 
        src={safeSlide.src} 
        alt="" 
        className="w-full h-auto invisible pointer-events-none" 
        aria-hidden="true"
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center font-['General_Sans',Helvetica]"
        >
          <img
            src={safeSlide.src}
            alt={safeSlide.title}
            className="w-full h-full object-contain"
          />
          
          <div 
            className="absolute z-20 flex flex-col items-start px-6 hidden md:flex"
            style={{
              top: '42%',
              left: '42%',
              marginLeft: '50px',
              width: '100%',
              maxWidth: '480px',
              textAlign: 'left'
            }}
          >
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="[font-family:'Quicksand',Helvetica] font-extrabold text-[#11593F] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2"
            >
              {safeSlide.title}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="[font-family:'General Sans',Helvetica] text-sm sm:text-base md:text-lg text-[#2C3E4E] leading-relaxed font-medium"
            >
              {safeSlide.description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-30 transition-all hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#11593F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-30 transition-all hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#11593F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
