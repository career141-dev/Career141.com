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

interface JobsTestimonialsSectionProps {
  sectionData?: {
    theme?: string
    quotationColor?: string
  }
}

function JobsTestimonialsSectionContent({ sectionData }: JobsTestimonialsSectionProps) {
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
      <div className="md:hidden w-full py-4 px-4 mb-4" style={{ backgroundColor: sectionData?.theme || '#0c448b', marginTop: '-20px' }}>
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
      <div className="hidden md:block w-10/12 ml-auto mr-0 py-2 px-0" style={{ 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        marginTop: '-60px',
        position: 'relative',
        backgroundColor: sectionData?.theme || '#0c448b'
      }}>
        {/* <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/jobs/1.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
        /> */}

        <div 
          className="w-full py-4 md:py-6 px-4 md:px-18 relative" style={{ backgroundColor: sectionData?.theme || '#0c448b' }}
        >
          <div className="absolute left-0 top-0 flex pointer-events-none -translate-x-8">
            <svg className="w-35 h-35 -translate-x-3 -translate-y-2" style={{ color: sectionData?.quotationColor || '#ffffff' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z"/>
            </svg>
            <svg className="w-35 h-35 -translate-x-15 -translate-y-2" style={{ color: sectionData?.quotationColor || '#ffffff', transform: 'rotate(0deg)' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z"/>
            </svg>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-2/3 mx-auto relative z-10">

            <div className="relative overflow-hidden flex justify-center" style={{ marginTop: '20px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="w-full md:max-w-175"
                >
                  <div 
                    className="rounded-[20px] p-6 md:p-7 flex flex-col gap-4 md:gap-4"
                    style={{ backgroundColor: sectionData?.theme || '#0c448b' }}
                  >
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[15px] md:text-[15px] leading-6 md:leading-6">
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

                    <div className="flex flex-row items-center mt-auto pt-4 border-t border-white border-opacity-30 gap-4">
                      <div className="ml-auto text-right">
                        <span className="font-['Quicksand:Bold',sans-serif] font-bold text-white text-[16px] block">
                          {testimonial.name}
                        </span>
                        <span className="font-['Inter:Regular',sans-serif] font-normal text-white text-opacity-80 text-[13px] block">
                          {testimonial.title}
                        </span>
                        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#CBFC06] text-[13px] block mt-1">
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

export function JobsTestimonialsSection({ sectionData }: JobsTestimonialsSectionProps) {
  return (
    <div className="w-full">
      <JobsTestimonialsSectionContent sectionData={sectionData} />
    </div>
  )
}