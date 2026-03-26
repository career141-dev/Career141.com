'use client'

import { useRef, useState, useCallback, useEffect, useMemo } from 'react'
import { withBasePath } from '@/lib/assetPath'
import { motion, AnimatePresence } from 'framer-motion'

const ALL_BRANDS = [
  { id: 1, name: 'Microsoft', src: withBasePath('/figmaAssets/logo-ms.webp') },
  { id: 2, name: 'Decathlon Sri Lanka', src: withBasePath('/figmaAssets/logo-decathlon.webp') },
  { id: 3, name: 'Unilever', src: withBasePath('/figmaAssets/logo-unilever.webp') },
  { id: 4, name: 'MAS Holdings', src: withBasePath('/figmaAssets/logo-mas.webp') },
  { id: 5, name: 'Brandix', src: withBasePath('/figmaAssets/logo-brandix.webp') },
  { id: 6, name: 'Microsoft 2', src: withBasePath('/figmaAssets/logo-ms.webp') },
  { id: 7, name: 'Unilever 2', src: withBasePath('/figmaAssets/logo-unilever.webp') },
  { id: 8, name: 'Brandix 2', src: withBasePath('/figmaAssets/logo-brandix.webp') },
]

const VISIBLE_COUNT = 5

function BrandCard({ name, src }: { name: string; src: string }) {
  return (
    <div
      className="group flex items-center justify-center bg-white border border-[#E2E2E2] rounded-[9.5px] overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:border-[#fe8d2b] hover:shadow-[0_8px_30px_rgba(254,141,43,0.18)] hover:-translate-y-1 w-full h-[168px] lg:w-[238.52px] lg:h-[263.25px] lg:flex-shrink-0"
      data-testid={`card-brand-${name.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <img
        src={src}
        alt={name}
        className="w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] object-contain grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
      />
    </div>
  )
}

function AnimatedBrandCard({ name, src, index }: { name: string; src: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -20px 0px' }
    )

    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="snap-start flex-none" style={{ width: 151 }}>
      <div
        style={{
          transitionProperty: 'opacity, transform',
          transitionDuration: '480ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transitionDelay: `${index * 130}ms`,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(22px)',
        }}
      >
        <BrandCard name={name} src={src} />
      </div>
    </div>
  )
}

function MobileLogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const visibleCountMobile = 2
  const totalCount = ALL_BRANDS.length

  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0
    setScrollProgress(progress)
  }, [])

  const segmentWidth = `${(visibleCountMobile / totalCount) * 100}%`
  const segmentLeft = `${scrollProgress * ((totalCount - visibleCountMobile) / totalCount) * 100}%`

  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-[10px] overflow-x-auto snap-x snap-mandatory pl-[23px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ALL_BRANDS.map((brand, i) => (
          <AnimatedBrandCard key={`${brand.name}-${i}`} name={brand.name} src={brand.src} index={i} />
        ))}
        <div className="flex-none w-[13px]" />
      </div>

      <div className="mx-[23px] h-[2.4px] bg-[#E2E2E2] rounded-full relative overflow-hidden">
        <div
          className="absolute top-0 h-full bg-[#fe8d2b] rounded-full transition-all duration-150 ease-out"
          style={{ width: segmentWidth, left: segmentLeft }}
        />
      </div>
    </div>
  )
}

export function BackgroundSubsection() {
  const [startIndex, setStartIndex] = useState(0)
  
  // Create a rotating window of brands
  const displayedBrands = useMemo(() => {
    const res = []
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      res.push(ALL_BRANDS[(startIndex + i) % ALL_BRANDS.length])
    }
    return res
  }, [startIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % ALL_BRANDS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative self-stretch w-full bg-[100%_100%] min-h-[510px] lg:h-[783.29px]"
      style={{ backgroundImage: `url(${withBasePath('/figmaAssets/blue-horizontal-tube-1-svg-fill-1.svg')})` }}
    >
      <div className="lg:hidden flex flex-col pt-[55px] pb-8 gap-6">
        <div className="mx-[23px] border-l-[1.6px] border-solid border-[#fe8d2b] pl-5">
          <p className="[font-family:'Quicksand',Helvetica] font-normal text-black text-[30px] leading-[36px]">Worked with the</p>
          <p className="[font-family:'Quicksand',Helvetica] font-bold text-[#fe8d2b] text-[30px] leading-[36px] ml-[40px]">best brands</p>

          <div className="flex items-start gap-4 mt-[6px]">
            <div className="w-7 shrink-0 mt-[10px] border-t-[2.4px] border-solid border-[#fe8d2b]" />
            <p className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-[14px] leading-[22px]">
              Our strength and growth are a testament to our enduring partnerships and collaborations with leading global and
              local brands built on trust, integrity, and results.
            </p>
          </div>
        </div>

        <MobileLogoCarousel />
      </div>

      <div className="hidden lg:block absolute w-[calc(100%_-_183px)] top-[137px] left-[91px] h-[161px] border-l-[1.6px] border-solid border-[#fe8d2b]">
        <div className="absolute w-0 top-0 left-0 h-0.5 bg-[#ffa500] border-l-[1.6px] border-solid border-[#fe8d2b]" />
        <div className="absolute w-[calc(100%_-_42px)] h-[calc(100%_-_5px)] top-[-15px] left-[22px] flex flex-col">
          <div className="flex flex-1 max-h-[46px] relative mt-[-1.1px] flex-col items-start justify-center">
            <div className="flex flex-col items-start pl-5 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-normal text-black text-[38.4px] tracking-[0] leading-[46px]">
                Worked with the
              </p>
            </div>
          </div>
          <div className="flex flex-1 max-h-[46px] relative mt-[0.1px] flex-col items-start pl-[259.34px] pr-0 py-0">
            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start pl-5 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#fe8d2b] text-[38.4px] tracking-[0] leading-[46px]">
                  best brands
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 max-h-[64.33px] relative mt-[1.2px] min-h-[64.33px] items-start gap-[30px] pt-[25.92px] pb-0 px-0">
            <div className="flex flex-col w-[36.89px] items-start justify-center relative self-stretch">
              <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
                <div className="flex items-start justify-center px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex-1 grow border-t-[2.4px] border-solid border-[#fe8d2b] relative self-stretch" />
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 items-start relative self-stretch">
              <p className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#444444] text-[14.8px] tracking-[0] leading-6">
                Our strength and growth are a testament to our enduring partnerships and collaborations with leading global and
                local brands built on trust, integrity, and results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute top-[338px] left-[91px] right-[92px] items-center justify-between gap-[21px] overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {displayedBrands.map((brand) => (
            <motion.div
              key={brand.id}
              layout
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ 
                type: 'spring', 
                stiffness: 260, 
                damping: 20, 
                opacity: { duration: 0.3 } 
              }}
              style={{ flexShrink: 0 }}
            >
              <BrandCard name={brand.name} src={brand.src} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
