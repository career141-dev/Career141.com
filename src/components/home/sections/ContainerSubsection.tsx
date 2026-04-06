'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { withBasePath } from '@/lib/assetPath'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'One of my career objective was to join a MNC at some point of my career. However i never expected that it could be achieved in a time where all of us were trying to secure our current job s due to the economic downturn caused by COVID19 outbreak.',
    name: 'Ushan De Silva',
    company: 'Brandix',
    title: 'Group Head of Logistics',
    avatar: withBasePath('/figmaAssets/testimonial/c950370038110512e5778a8917c41c855fefff8e.png'),
  },
  {
    id: 2,
    quote: 'Azeem has been a constant go to in our efforts to spot top technical talents in apparel. His deep understanding of the industry, job roles and the strong network has been very helpful to us.',
    name: 'Asanka Wimalaratna',
    company: 'Brandix',
    title: 'Director / Chief Executive Officer',
    avatar: withBasePath('/figmaAssets/testimonial/c950370038110512e5778a8917c41c855fefff8e.png'),
  },
  {
    id: 3,
    quote: 'It has been a tremendous pleasure working with Azeem during the past few years. I had my very first connect with him in 2012 when he reached out to offer me a position in a MNC which I was able to succeed with his guidance. Ever since then he has remained as my go to person.',
    name: 'Nayani Peiris',
    company: 'Unilever',
    title: 'Head of Employee Relations and Senior HR Business Partner',
    avatar: withBasePath('/figmaAssets/testimonial/4070bd9e51852d03cfa7140318625c0573388c17.png'),
  },
  {
    id: 4,
    quote: 'Working with Azeem and the Team in finding the right talent had been a pleasant and a smooth experience. Azeem had been very professional and have promptly adhered to given timelines. Kept us informed the progress time to time enabling us to be updated.',
    name: 'Achala Silva',
    company: 'George Steuart',
    title: 'Director Group Human Resources & Administration',
    avatar: withBasePath('/figmaAssets/testimonial/b1167b44a1cc44d87ba4da5a08f621d20e08df9a.png'),
  },
  {
    id: 5,
    quote: 'It has been an absolute pleasure to work with Azeem and his team. We were impressed by their professionalism, commitment, and interest they took to source a suitable candidate for us. We recently used their services to hire a Manager, they performed exceptionally.',
    name: 'Nishantha Navurunnage',
    company: 'Avery Dennison',
    title: 'Director Human Resources Asia Pacific',
    avatar: withBasePath('/figmaAssets/testimonial/382255309c396fda7ea0065e6b5032bdb2dea13e.png'),
  },
  {
    id: 6,
    quote: 'It is hard to put into words what Azeem Ansar (Career141) has done for me and the organisations for which I have served. Not only was I a candidate, but as an employer, I received exceptional service from Azeem, particularly in senior-level placements.',
    name: 'Kaushal Mendis',
    company: 'Daraz',
    title: 'Chief Human Resources Officer',
    avatar: withBasePath('/figmaAssets/testimonial/79fa2bcfdbd09f91322a514e29542098f2a8d836.png'),
  },
  {
    id: 7,
    quote: 'As a visionary leader, I drive global holistic wellness by blending innovation with excellence, elevating Sri Lanka\'s Ayurvedic heritage to the world stage. As a visionary leader, I drive global holistic wellness by blending innovation with excellence.',
    name: 'Ashan Ransilige',
    company: 'Link Natural',
    title: 'Chief Executive Officer',
    avatar: withBasePath('/figmaAssets/testimonial/fa39a059ab2c168ecee0e2002acd8ef8192c1732.png'),
  },
  {
    id: 8,
    quote: 'Azeem has been working with me throughout my professional journey in many projects with partnering to attract apparel industry top talent. His dedication and commitment, selecting the right resources within the timelines is excellent. I wish him and the team the best.',
    name: 'Prasad Kavindra',
    company: 'Timex',
    title: 'CEO',
    avatar: withBasePath('/figmaAssets/testimonial/c1fd7aa368850e590565f2a79763c912bd4bb1c7.png'),
  },
  
]

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
}

export function ContainerSubsection() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isExpanded, setIsExpanded] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const paginate = useCallback((newDirection: number) => {
    setIsExpanded(false)
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
    startTimer()
  }

  return (
    <section
      id="home-testimonial-section"
      aria-label="Home Testimonial Section"
      className="flex flex-col w-full items-start justify-center"
    >
      <div className="flex flex-col items-start w-full">
        <div
          className="relative flex flex-col items-start gap-5 w-full px-[23px] py-[39px] md:px-16 md:py-14 lg:px-[100px] lg:pt-[60.83px] lg:pb-[91.24px] overflow-hidden min-h-[850px]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden lg:block bg-no-repeat"
            style={{
              backgroundImage: `url('${withBasePath('/figmaAssets/background1.png')}')`,
              backgroundSize: '100% auto',
              backgroundPosition: 'center top',
            }}
          />
          <div aria-hidden="true" className="absolute inset-0 lg:hidden">
            <img
              src={withBasePath('/figmaAssets/Container (4).png')}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center center' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="relative z-10 flex flex-col items-start w-full">
          <div
            className="lg:hidden w-full flex items-center mb-[14px]"
            style={{
              height: 85,
              borderRadius: 2,
            }}
          >
            <h2
              className="[font-family:'Quicksand',Helvetica] font-normal text-white leading-[38px] text-[32px]"
              style={{ paddingLeft: 102 }}
            >
              <span className="text-white">Hear from our</span>
              <br />
              <span className="font-bold text-[#fe8d2b]">clients</span>
            </h2>
          </div>

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
              className="inline-flex items-center justify-center rounded-[100px] border border-solid border-white [text-shadow:0px_0px_10px_#0000004c] [font-family:'Quicksand',Helvetica] font-semibold text-white text-center tracking-[0.50px] whitespace-nowrap hover:opacity-80 transition-opacity px-6 py-[11px] text-[11px] leading-[13px] lg:pt-[11.2px] lg:pb-[11.79px] lg:px-[23.8px] lg:text-[11.2px] lg:leading-[13.44px]"
              href="/testimonials"
              data-testid="link-more-testimonials"
            >
              MORE TESTIMONIALS
            </a>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-4 mt-[7px] lg:mt-0">
            <div className="flex flex-col flex-1 justify-center w-full min-w-0 lg:ml-8">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`testimonial-text-${page}`}
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex flex-col items-start gap-10 w-full pr-0 lg:pr-[52.38px] py-4 lg:py-[17.45px]"
                  style={{ minHeight: '280px' }}
                >
                  <div className="flex flex-col items-start gap-[2.8px] w-full" style={{ alignItems: 'flex-start' }}>
                    <p
                      className="[font-family:'Inter',Helvetica] font-medium text-white tracking-[0] w-full text-[13px] lg:text-[14.9px]"
                      style={{ lineHeight: '24px' }}
                    >
                      {isExpanded ? testimonial.quote : testimonial.quote.length > 150 ? testimonial.quote.substring(0, 150) + '...' : testimonial.quote}
                    </p>
                    {testimonial.quote.length > 150 && (
                      <span
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="[font-family:'Inter',Helvetica] text-[#fe8d2b] text-[11.8px] tracking-[0] cursor-pointer hover:underline"
                        style={{ lineHeight: '19.2px', fontStyle: 'italic', fontWeight: 900 }}
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-[29.34px] w-full">
                    <div
                      className="flex-shrink-0 rounded-full bg-white/20 bg-cover bg-center overflow-hidden"
                      style={{ width: 80, height: 80, maxWidth: 80 }}
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex flex-col gap-[8.4px] lg:gap-[10px]">
                      <span
                        className="[font-family:'Quicksand',Helvetica] tracking-[0]"
                        style={{ fontSize: 24, fontWeight: 700, lineHeight: '24px', color: '#fe8d2b' }}
                      >
                        {testimonial.name}
                      </span>
                      <span
                        className="[font-family:'Quicksand',Helvetica] font-normal text-white tracking-[0]"
                        style={{ fontSize: 16, lineHeight: '16px' }}
                      >
                        {testimonial.company}
                      </span>
                      <span
                        className="[font-family:'Quicksand',Helvetica] font-normal text-white tracking-[0]"
                        style={{ fontSize: 16, lineHeight: '16px' }}
                      >
                        {testimonial.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-start justify-end gap-[10px] w-full lg:max-w-[calc(100%-52.38px)] lg:ml-[52.38px] mt-4">
            <button
              className="w-[49px] h-[49px] rounded-full border border-solid border-white flex items-center justify-center hover:bg-[#fe8d2b] hover:border-[#fe8d2b] transition-colors group"
              aria-label="Previous testimonial"
              data-testid="button-testimonial-prev"
              onClick={() => onManualNav(-1)}
              type="button"
            >
              <ChevronLeft className="text-[#fe8d2b] group-hover:text-white w-[18px] h-[18.4px] transition-colors" />
            </button>
            <button
              className="w-[49px] h-[49px] rounded-full border border-solid border-white flex items-center justify-center hover:bg-[#fe8d2b] hover:border-[#fe8d2b] transition-colors group"
              aria-label="Next testimonial"
              data-testid="button-testimonial-next"
              onClick={() => onManualNav(1)}
              type="button"
            >
              <ChevronRight className="text-[#fe8d2b] group-hover:text-white w-[18px] h-[18.4px] transition-colors" />
            </button>
          </div>

          <div className="lg:hidden flex justify-center w-full mt-4">
            <div className="flex items-center gap-[10px]">
              <button
                className="w-[49px] h-[49px] rounded-full border border-solid border-white flex items-center justify-center hover:bg-[#fe8d2b] hover:border-[#fe8d2b] transition-colors group"
                aria-label="Previous testimonial"
                data-testid="button-testimonial-prev"
                onClick={() => onManualNav(-1)}
                type="button"
              >
                <ChevronLeft className="text-[#fe8d2b] group-hover:text-white w-[18px] h-[18.4px] transition-colors" />
              </button>
              <button
                className="w-[49px] h-[49px] rounded-full border border-solid border-white flex items-center justify-center hover:bg-[#fe8d2b] hover:border-[#fe8d2b] transition-colors group"
                aria-label="Next testimonial"
                data-testid="button-testimonial-next"
                onClick={() => onManualNav(1)}
                type="button"
              >
                <ChevronRight className="text-[#fe8d2b] group-hover:text-white w-[18px] h-[18.4px] transition-colors" />
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
