'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const heroSlides = [
  { line1: "Sri Lanka's Global Executive", line2: 'Search & Recruitment', line3: 'Partner' },
  { line1: 'Connecting Top-Tier Talent', line2: 'with Leading Global', line3: 'Companies' },
  { line1: '20+ Years of Executive', line2: 'Search Excellence', line3: 'Across Asia & Beyond' },
  { line1: 'Your Trusted Partner in', line2: 'Senior Executive', line3: 'Headhunting' },
  { line1: 'Specialized Recruitment', line2: 'Across Asia, Middle East', line3: '& Africa' },
  { line1: 'Delivering Exceptional', line2: 'Hiring Outcomes', line3: 'Since 2004' },
]

const statsData = [
  { numEnd: 30, numStart: 14, isRange: true, hasPercent: false, label: 'Days Turn Around Time', containerSrc: '/figmaAssets/container-4.svg' },
  { numEnd: 85, numStart: 0, isRange: false, hasPercent: true, label: 'Word of Mouth Growth', containerSrc: '/figmaAssets/container-1.svg' },
  { numEnd: 90, numStart: 0, isRange: false, hasPercent: true, label: 'Success in Placements', containerSrc: '/figmaAssets/container-2.svg' },
  { numEnd: 85, numStart: 0, isRange: false, hasPercent: true, label: 'Repeat Business', containerSrc: '/figmaAssets/container.svg' },
]

const SLIDE_DURATION = 6000

function CountUp({
  end,
  start = 0,
  isRange = false,
  hasPercent = false,
  duration = 1800,
}: {
  end: number
  start?: number
  isRange?: boolean
  hasPercent?: boolean
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={ref} className="flex items-end justify-center">
      <span className="[font-family:'Quicksand',Helvetica] font-bold text-[#4c4c4c] text-[36px] sm:text-[44px] lg:text-[51.2px] text-center tracking-[0] leading-[1] lg:leading-[51.2px] whitespace-nowrap">
        {isRange ? `${start} - ${count}` : count}
      </span>
      {hasPercent && (
        <span className="[font-family:'Quicksand',Helvetica] font-bold text-[#4c4c4c] text-[36px] sm:text-[44px] lg:text-[51.2px] tracking-[0] leading-[1] lg:leading-[51.2px] whitespace-nowrap">
          %
        </span>
      )}
    </div>
  )
}

export function ExecutiveSearchStatsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideKey, setSlideKey] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragStartX = useRef<number | null>(null)
  const isDragging = useRef(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % heroSlides.length
      setSlideKey((k) => k + 1)
      return next
    })
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + heroSlides.length) % heroSlides.length
      setSlideKey((k) => k + 1)
      return next
    })
  }, [])

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(nextSlide, SLIDE_DURATION)
  }, [nextSlide])

  useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [resetInterval])

  const handleDragStart = (x: number) => {
    dragStartX.current = x
    isDragging.current = true
  }

  const handleDragEnd = (x: number) => {
    if (!isDragging.current || dragStartX.current === null) return
    isDragging.current = false
    const delta = dragStartX.current - x
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      resetInterval()
    }
    dragStartX.current = null
  }

  const slide = heroSlides[currentSlide]

  return (
    <section className="flex flex-col w-full items-start">
      <div className="relative flex flex-col min-h-[500px] lg:min-h-[738px] items-start justify-center py-[140px] px-6 sm:px-12 lg:py-[251px] lg:px-[76px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#000313] opacity-[0.50] z-10" />

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/QjwjbLaajgU?autoplay=1&mute=1&loop=1&playlist=QjwjbLaajgU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&start=0&end=65"
            allow="autoplay; fullscreen"
            frameBorder="0"
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'max(100%, calc(100vh * 16 / 9))',
              height: 'max(100%, calc(100vw * 9 / 16))',
              minWidth: '100%',
              minHeight: '100%',
            }}
          />
          <img className="absolute inset-0 w-full h-full object-cover" alt="Hero background" src="/figmaAssets/container-3.svg" style={{ zIndex: -1 }} />
        </div>

        <div
          className="relative z-20 w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseUp={(e) => handleDragEnd(e.clientX)}
          onMouseLeave={() => {
            isDragging.current = false
            dragStartX.current = null
          }}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
        >
          <h1
            key={slideKey}
            className="animate-slide-in-right [font-family:'Quicksand',Helvetica] font-bold text-white text-[32px] sm:text-[40px] lg:text-5xl tracking-[0] leading-[1.2] lg:leading-[57.6px]"
          >
            {slide.line1}
            <br />
            {slide.line2}
            <br />
            {slide.line3}
          </h1>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <img className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="Decorative tubes" src="/figmaAssets/tubes-home-executive-svg-fill.svg" />

        <div className="relative z-10 grid grid-cols-2 lg:flex lg:flex-row w-full items-start justify-center gap-6 lg:gap-5 pt-10 lg:pt-[66px] pb-10 lg:pb-[107px] px-6 sm:px-12 lg:px-[91px]">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center lg:flex-1">
              <CountUp end={stat.numEnd} start={stat.numStart} isRange={stat.isRange} hasPercent={stat.hasPercent} />
              <img className="w-[60px] lg:w-[82px] h-5 lg:h-6 mt-2" alt="Underline" src={stat.containerSrc} />
              <p className="mt-2 [font-family:'Inter',Helvetica] font-medium text-[#4c4c4c] text-[12px] lg:text-[15px] text-center tracking-[0] leading-[1.3] lg:leading-[19.2px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row w-full items-start gap-8 px-6 sm:px-12 lg:px-[91px] pb-10 lg:pb-[90px]">
          <div className="flex flex-col items-start gap-6 lg:gap-[30px] w-full lg:w-[51%]">
            <h2 className="[font-family:'Quicksand',Helvetica] font-normal text-transparent text-[28px] sm:text-[32px] lg:text-[38.4px] tracking-[0] leading-[1.2] lg:leading-[46px]">
              <span className="text-black">
                Elevating Success &amp;<br />Unleashing Excellence with<br />
              </span>
              <span className="font-bold text-[#006763]">20 Years+ in Executive Search</span>
            </h2>

            <div className="flex flex-col items-start w-full gap-4">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#2f2f2f] text-[14px] lg:text-[15.1px] tracking-[0] leading-6">
                With over two decades of global executive search experience, Career141 has established itself as Sri Lanka&apos;s premier
                recruitment consultancy and manpower solutions provider. We specialize in headhunting senior executives and delivering tailored
                recruitment solutions across Sri Lanka, Asia, the Middle East and Africa. Our industry expertise spans sectors like apparel,
                FMCG and IT, enabling us to connect top-tier talent with leading global and local companies. As a trusted recruitment partner,
                we combine deep industry knowledge with a client-centric approach to ensure exceptional hiring outcomes.
              </p>

              <div className="flex flex-wrap items-center gap-4 lg:gap-5 w-full">
                <div
                  className="w-[120px] h-[67px] lg:w-[146px] lg:h-[81.54px] bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: 'url(/figmaAssets/signature-of-the-current-managing-director.png)' }}
                />
                <a
                  href="https://career141.com/our-journey/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center py-[11px] px-[22px] rounded-[100px] border border-solid border-[#37a65e] [font-family:'Quicksand',Helvetica] font-semibold text-[#37a65e] text-[11.2px] text-center tracking-[0.50px] leading-[13.4px] whitespace-nowrap hover:bg-[#37a65e] hover:text-white transition-colors duration-200"
                >
                  OUR JOURNEY
                </a>
                <button className="inline-flex items-center justify-center py-[11px] px-[22px] rounded-[100px] border border-solid border-[#006763] [font-family:'Quicksand',Helvetica] font-semibold text-[#006763] text-[11.2px] text-center tracking-[0.50px] leading-[13.4px] whitespace-nowrap hover:bg-[#006763] hover:text-white transition-colors duration-200 cursor-pointer">
                  EXECUTIVE SEARCH
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full lg:flex-1 mt-4 lg:mt-0">
            <div
              className="w-full max-w-full lg:max-w-[593px] h-[280px] sm:h-[380px] lg:h-[537px] bg-cover bg-center"
              style={{ backgroundImage: 'url(/figmaAssets/image-for-executive-search.png)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
