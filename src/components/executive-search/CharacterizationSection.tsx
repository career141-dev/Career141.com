'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slidesData = [
  {
    id: 1,
    title: 'Results Driven Legacy',
    description: "The firm's long-standing legacy is defined by a results-driven approach. Clients have come to expect not just placements, but a track record of successful, impactful placements that have contributed to the success of organizations over the years.",
    desktopImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1067&fit=crop'
  },
  {
    id: 2,
    title: 'Client-Centric Excellence',
    description: "We are dedicated to delivering exceptional service that goes beyond expectations, ensuring our clients' success is at the forefront of everything we do.",
    desktopImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=675&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=1067&fit=crop'
  },
  {
    id: 3,
    title: 'Global Visionary',
    description: 'Having successfully placed executives in both local and overseas positions, the brand projects a global perspective. It is seen as a visionary in identifying and connecting top-tier talent across international boundaries.',
    desktopImage: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&h=675&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=1067&fit=crop'
  },
  {
    id: 4,
    title: 'Industry Stewardship',
    description: 'Committed to the betterment of the executive search industry, we actively engage in initiatives that uplift standards, promote professionalism, and contribute to positive industry growth.',
    desktopImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1067&fit=crop'
  },
  {
    id: 5,
    title: 'Trusted Steward',
    description: 'The firm is perceived as a trusted steward of both client and candidate interests. Its long history underscores a commitment to ethical practices, confidentiality, and the responsible handling of sensitive information.',
    desktopImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=675&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=1067&fit=crop'
  },
  {
    id: 6,
    title: 'Strategic Partnership',
    description: 'We strive to be more than just a service provider; we aim to be a trusted strategic partner, deeply invested in the success and growth of our clients.',
    desktopImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=675&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1067&fit=crop'
  },
  {
    id: 7,
    title: 'Strategic Navigator',
    description: 'With a deep understanding of the business landscape, the brand is seen as a strategic navigator, helping clients and candidates alike chart successful courses in their professional journeys. The emphasis is on long-term success and strategic alignment.',
    desktopImage: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&h=675&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=1067&fit=crop'
  }
]

export function CharacterizationSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slidesData.length)
  }

  return (
    <section className="max-w-[1440px] mx-auto px-5 py-16 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] tracking-tight">
          Our <b className="text-[#12b886] font-extrabold">Characterization</b>
        </h2>
      </div>

      {/* Desktop Slideshow */}
      <div 
        className="hidden lg:block relative aspect-video rounded-[24px] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={slidesData[currentIndex].desktopImage}
              alt={slidesData[currentIndex].title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            
            {/* Content Overlay - Right aligned */}
            <div className="absolute bottom-[60px] right-[60px] max-w-[45%] p-10 bg-gradient-to-br from-[#0f172a]/85 to-[#0f172a]/70 backdrop-blur-[8px] rounded-[20px] border-l-4 border-[#12b886]">
              <motion.h3
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-white mb-4 leading-tight"
              >
                {slidesData[currentIndex].title}
              </motion.h3>
              <motion.p
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-base text-[#e2e8f0] leading-relaxed"
              >
                {slidesData[currentIndex].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-5 z-10">
          <button
            onClick={goToPrev}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-[4px] border border-white/30 text-white hover:bg-[#12b886] hover:border-[#12b886] transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-[4px] border border-white/30 text-white hover:bg-[#12b886] hover:border-[#12b886] transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-10">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-7 bg-[#12b886]' 
                  : 'w-2.5 bg-white/50 hover:bg-[#12b886]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Slideshow */}
      <div 
        className="lg:hidden relative aspect-[3/4] min-h-[680px] rounded-[24px] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={slidesData[currentIndex].mobileImage}
              alt={slidesData[currentIndex].title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            
            {/* Content Overlay - Centered */}
            <div className="absolute bottom-20 left-5 right-5 max-w-[calc(100%-40px)] p-5 bg-gradient-to-br from-[#0f172a]/85 to-[#0f172a]/70 backdrop-blur-[8px] rounded-[20px] border-l-4 border-[#12b886]">
              <motion.h3
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-bold text-white mb-3"
              >
                {slidesData[currentIndex].title}
              </motion.h3>
              <motion.p
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-[#e2e8f0] leading-relaxed"
              >
                {slidesData[currentIndex].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Bottom */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-between px-5 z-10">
          <button
            onClick={goToPrev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-[4px] border border-white/30 text-white hover:bg-[#12b886] hover:border-[#12b886] transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-[4px] border border-white/30 text-white hover:bg-[#12b886] hover:border-[#12b886] transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-3 z-10">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-7 bg-[#12b886]' 
                  : 'w-2.5 bg-white/50 hover:bg-[#12b886]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
