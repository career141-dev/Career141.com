'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const clientsTestimonials = [
  { company: "Ananta Intimate Division", name: "Nawaff Mubarak", title: "Chief Executive Officer", content: "Azeem has been a mentor and career advisor and was able to guide me on numerous occasions, giving me the confidence to take on challenging c-suite positions within the industry. I highly recommend his services to anyone looking for executive search solutions." },
  { company: "FCI", name: "Devinda Peries", title: "Director Marketing", content: "It gives me great pleasure to write this note of recommendation! After working at MAS Intimates for nearly 16 years I was quite apprehensive to talk to anyone outside of my comfort zone. Career141 made the transition seamless." },
  { company: "MAS Intimates", name: "Shane Gunaratne", title: "Senior HR Manager", content: "Career141 has been instrumental in helping us find top talent across the region. Their professionalism and dedication are unmatched. They truly understand the apparel industry and deliver exceptional results every time." },
  { company: "John Keells Holdings", name: "Kavinda Silva", title: "Head of Operations", content: "The team at Career141 understood our requirements perfectly and delivered exceptional candidates. Highly recommended! Their global network and local expertise make them the best recruitment partner in Sri Lanka." },
  { company: "Brandix", name: "Rashmi Fernando", title: "VP Human Resources", content: "We have been working with Career141 for over 5 years and they consistently deliver excellent results. Their commitment to quality and customer satisfaction is truly commendable." },
  { company: "Hemas Holdings", name: "Sanjeewa Perera", title: "CEO", content: "Career141 has been our trusted recruitment partner. Their expertise in executive search is outstanding. They have helped us build a strong leadership team across multiple divisions." },
]

function JobsTestimonialsSectionContent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientsTestimonials.length)
      setExpanded(false)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const testimonial = clientsTestimonials[currentIndex]
  const shouldShowReadMore = testimonial.content.length > 150

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden w-full py-4 px-4 mb-4" style={{ backgroundColor: '#0c448b', marginTop: '-20px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 w-full"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[14px] leading-6">
              {expanded 
                ? clientsTestimonials[currentIndex].content 
                : clientsTestimonials[currentIndex].content.slice(0, 120) + (clientsTestimonials[currentIndex].content.length > 120 ? '...' : '')}
            </p>
            
            {clientsTestimonials[currentIndex].content.length > 120 && (
              <button 
                onClick={() => setExpanded(!expanded)}
                className="font-['Inter:Regular',sans-serif] font-medium text-[#CBFC06] text-[12px] text-left hover:underline"
              >
                {expanded ? 'Read less' : 'Read more'}
              </button>
            )}
            
            <div className="flex flex-row items-center border-t border-white border-opacity-30 pt-4">
              <div>
                <span className="font-['Quicksand:Bold',sans-serif] font-bold text-white text-[16px] block">
                  {clientsTestimonials[currentIndex].name}
                </span>
                <span className="font-['Inter:Regular',sans-serif] font-normal text-white text-opacity-80 text-[12px] block">
                  {clientsTestimonials[currentIndex].title}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block w-full py-[40px] px-0" style={{ 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
        marginTop: '-60px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff'
      }}>
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/jobs/tube.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center -230px',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/jobs/1.png)',
            backgroundSize: '85%',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div 
          className="w-full py-8 md:py-[40px] px-4 md:px-[91.238px]"
        >
          <div className="flex flex-col gap-6 md:gap-[40px] w-full max-w-[1204.5px] mx-auto relative z-10">

            <div className="relative overflow-hidden flex justify-end md:justify-end" style={{ marginTop: '-40px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="w-full md:max-w-[800px] ml-auto"
                >
                  <div 
                    className="rounded-[20px] p-8 md:p-[40px] flex flex-col gap-6 md:gap-[20px]"
                  >
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[16px] md:text-[16px] leading-6 md:leading-[24px]">
                      {expanded 
                        ? testimonial.content 
                        : testimonial.content.slice(0, 150) + (shouldShowReadMore ? '...' : '')}
                    </p>

                    {shouldShowReadMore && (
                      <button 
                        onClick={() => setExpanded(!expanded)}
                        className="font-['Inter:Regular',sans-serif] font-medium text-[#CBFC06] text-[14px] text-left hover:underline"
                      >
                        {expanded ? 'Read less' : 'Read more'}
                      </button>
                    )}

                    <div className="flex flex-row items-center mt-auto pt-[20px] border-t border-white border-opacity-30 gap-[20px]">
                      <div className="ml-auto text-right">
                        <span className="font-['Quicksand:Bold',sans-serif] font-bold text-white text-[18px] block">
                          {testimonial.name}
                        </span>
                        <span className="font-['Inter:Regular',sans-serif] font-normal text-white text-opacity-80 text-[14px] block">
                          {testimonial.title}
                        </span>
                        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#CBFC06] text-[14px] block mt-1">
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function JobsTestimonialsSection() {
  return (
    <div className="w-full">
      <JobsTestimonialsSectionContent />
    </div>
  )
}