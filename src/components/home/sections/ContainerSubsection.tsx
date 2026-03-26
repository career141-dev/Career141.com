'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { withBasePath } from '@/lib/assetPath'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Azeem has been a constant go to in our efforts to spot top technical talents in apparel. His deep understanding of the industry, job roles and the strong network has been very helpful to us.',
    name: 'Asanka Wimalaratna',
    company: 'Brandix',
    title: 'Director / Chief Executive Officer',
    avatar: withBasePath('/figmaAssets/testimonial-avatar-1.png'), // Placeholder or real asset
  },
  {
    id: 2,
    quote: 'The team at Career141 understands the nuances of global executive search. Their ability to source high-caliber leaders for our international operations has been exceptional and consistently reliable.',
    name: 'Ahmed Al-Farsi',
    company: 'Global Logistics Corp',
    title: 'Chief Operations Officer',
    avatar: withBasePath('/figmaAssets/testimonial-avatar-1.png'),
  },
  {
    id: 3,
    quote: 'Career141 stands out for their commitment to finding the right fit, not just the right resume. Their network in the FMCG sector is second to none across the entire Asian region.',
    name: 'Sarah de Silva',
    company: 'Leading FMCG Brand',
    title: 'Head of Human Resources',
    avatar: withBasePath('/figmaAssets/testimonial-avatar-1.png'),
  }
]

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95
  })
}

export function ContainerSubsection() {
  const [[page, direction], setPage] = useState([0, 0])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }, [page])

  const index = (page % TESTIMONIALS.length + TESTIMONIALS.length) % TESTIMONIALS.length
  const testimonial = TESTIMONIALS[index]

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      paginate(1)
    }, 5000)
  }, [paginate])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startTimer])

  const onManualNav = (dir: number) => {
    paginate(dir)
    startTimer() // Reset timer on manual click
  }

  return (
    <section className="flex flex-col w-full items-start justify-center">
      <div className="flex flex-col items-start w-full">
        <div
          className="flex flex-col items-start gap-5 w-full bg-cover bg-[50%_50%] px-[23px] py-[39px] md:px-16 md:py-14 lg:px-[136.86px] lg:pt-[60.83px] lg:pb-[91.24px] overflow-hidden"
          style={{ backgroundImage: `url(${withBasePath('/figmaAssets/background1.png')})` }}
        >
          {/* Section Header Mobile */}
          <div
            className="lg:hidden w-full flex items-center mb-[14px]"
            style={{
              height: 85,
              backgroundImage: `url(${withBasePath('/figmaAssets/testimonials-blue-line.png')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
            }}
          >
            <h2
              className="[font-family:'Quicksand',Helvetica] font-normal text-white leading-[38px] text-[32px]"
              style={{ paddingLeft: 102 }}
            >
              Hear from our
              <br />
              clients
            </h2>
          </div>

          {/* Section Header Desktop */}
          <div className="hidden lg:flex flex-col items-start w-full md:items-end">
            <div className="flex flex-col items-start md:items-end pb-6 lg:pb-[49.88px]">
              <div className="flex items-center py-2 lg:py-[12.38px]">
                <div className="flex flex-col items-start justify-center md:pl-[30px]">
                  <h2 className="[font-family:'Quicksand',Helvetica] font-normal text-transparent text-[38.4px] leading-[46px] md:text-right tracking-[0] whitespace-nowrap">
                    <span className="text-white">Hear from our </span>
                    <span className="font-bold text-[#fe8d2b]">clients</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full lg:items-end">
            <a
              className="inline-flex items-center justify-center rounded-[100px] border border-solid border-white [text-shadow:0px_0px_10px_#0000004c] [font-family:'Quicksand',Helvetica] font-semibold text-white text-center tracking-[0.50px] whitespace-nowrap hover:opacity-80 transition-opacity px-6 py-[11px] text-[11px] leading-[13px] lg:pt-[11.2px] lg:pb-[11.79px] lg:px-[23.8px] lg:text-[11.2px] lg:leading-[13.4px]"
              href="https://career141.com/testimonials/"
              rel="noopener noreferrer"
              target="_blank"
              data-testid="link-more-testimonials"
            >
              MORE TESTIMONIALS
            </a>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-4 lg:gap-4 mt-[7px] lg:mt-0 relative min-h-[300px]">
            <div className="flex flex-col flex-1 items-start justify-center w-full min-w-0">
              <div className="flex flex-col items-start w-full relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={sliderVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.3 }
                    }}
                    className="w-full"
                  >
                    <div className="flex flex-col items-start gap-8 lg:gap-10 pr-0 lg:pr-[52.38px] py-4 lg:py-[17.45px] w-full">
                      <div className="flex flex-col items-start gap-[2.8px] w-full">
                        <p className="[font-family:'Inter',Helvetica] font-medium text-white tracking-[0] leading-6 w-full text-[13px] lg:text-[14.9px] min-h-[72px]">
                          {testimonial.quote}
                        </p>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[11.8px] tracking-[0] leading-[19.2px] cursor-pointer hover:underline">
                          Read More
                        </span>
                      </div>

                      <div className="flex items-center gap-5 lg:gap-[29.34px] w-full">
                        <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 bg-cover bg-center" />
                        <div className="flex flex-col gap-[8px] lg:gap-[10px]">
                          <span className="[font-family:'Quicksand',Helvetica] font-bold text-[#fe8d2b] tracking-[0] leading-6 text-lg lg:text-2xl">
                            {testimonial.name}
                          </span>
                          <span className="[font-family:'Quicksand',Helvetica] font-normal text-white text-sm lg:text-base tracking-[0] leading-4">
                            {testimonial.company}
                          </span>
                          <span className="[font-family:'Quicksand',Helvetica] font-normal text-white text-sm lg:text-base tracking-[0] leading-4">
                            {testimonial.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <img
              className="hidden lg:block self-stretch flex-shrink-0"
              alt="Container align"
              src={withBasePath('/figmaAssets/container-align-center.svg')}
            />
          </div>

          <div className="flex justify-center w-full lg:justify-start mt-4">
            <div className="flex items-center gap-[10px]">
              <button
                className="w-[49px] h-[49px] rounded-full border border-solid border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
                data-testid="button-testimonial-prev"
                onClick={() => onManualNav(-1)}
                type="button"
              >
                <ChevronLeft className="text-white w-[18px] h-[18px]" />
              </button>
              <button
                className="w-[49px] h-[49px] rounded-full border border-solid border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
                data-testid="button-testimonial-next"
                onClick={() => onManualNav(1)}
                type="button"
              >
                <ChevronRight className="text-white w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
