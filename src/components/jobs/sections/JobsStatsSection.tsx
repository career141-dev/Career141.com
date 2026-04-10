'use client'

import { withBasePath } from '@/lib/assetPath'

const statsData = [
  { numEnd: 30, numStart: 14, isRange: true, hasPercent: false, label: 'Days Turn Around Time', containerSrc: withBasePath('/figmaAssets/container-4.svg') },
  { numEnd: 85, numStart: 0, isRange: false, hasPercent: true, label: 'Word of Mouth Growth', containerSrc: withBasePath('/figmaAssets/container-1.svg') },
  { numEnd: 90, numStart: 0, isRange: false, hasPercent: true, label: 'Success in Placements', containerSrc: withBasePath('/figmaAssets/container-2.svg') },
  { numEnd: 85, numStart: 0, isRange: false, hasPercent: true, label: 'Repeat Business', containerSrc: withBasePath('/figmaAssets/container.svg') },
]

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
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(start + (end - start) * easeOut))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, start, duration])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center lg:flex-1">
      <span className="[font-family:'Quicksand',Helvetica] font-bold text-[#0c2340] text-[40px] lg:text-[51.2px] tracking-[0] leading-[1]">
        {isRange ? `${count}+` : hasPercent ? `${count}%` : count}
      </span>
      {/* <img className="w-[60px] lg:w-[82px] h-5 lg:h-6 mt-2" alt="Underline" src={statsData[0].containerSrc} /> */}
      <p className="mt-2 [font-family:'Inter',Helvetica] font-medium text-[#4c4c4c] text-[14px] lg:text-[15px] text-center tracking-[0] leading-[1.3] lg:leading-[19.2px]">
        {/* Placeholder - will be filled by statsData */}
      </p>
    </div>
  )
}

import { useEffect, useState, useRef } from 'react'

function JobsStatsSectionContent() {
  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ backgroundColor: 'white' }}>
      {/* <img className="absolute top-0 left-0 w-full h-full object-contain lg:object-cover pointer-events-none" alt="Decorative tubes" src={withBasePath('/figmaAssets/tubes-home-executive-svg-fill.svg')} /> */}

      <div className="relative z-10 grid grid-cols-2 lg:flex lg:flex-row w-full items-start justify-center gap-x-10 gap-y-10 lg:gap-5 pt-8 lg:pt-[66px] pb-8 lg:pb-[107px] px-6 sm:px-12 lg:px-[91px]">
        {statsData.map((stat, index) => (
          <CountUpWithLabel key={index} {...stat} />
        ))}
      </div>
    </div>
  )
}

function CountUpWithLabel({
  numEnd,
  numStart,
  isRange,
  hasPercent,
  label,
  containerSrc,
}: {
  numEnd: number
  numStart: number
  isRange: boolean
  hasPercent: boolean
  label: string
  containerSrc: string
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
            const progress = Math.min(elapsed / 1800, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(numStart + (numEnd - numStart) * easeOut))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [numEnd, numStart])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center lg:flex-1">
      <span className="[font-family:'Quicksand',Helvetica] font-bold text-[#0c2340] text-[40px] lg:text-[51.2px] tracking-[0] leading-[1]">
        {isRange ? `${count}+` : hasPercent ? `${count}%` : count}
      </span>
      <img className="w-[60px] lg:w-[82px] h-5 lg:h-6 mt-2" alt="Underline" src={containerSrc} />
      <p className="mt-2 [font-family:'Inter',Helvetica] font-medium text-[#4c4c4c] text-[14px] lg:text-[15px] text-center tracking-[0] leading-[1.3] lg:leading-[19.2px]">
        {label}
      </p>
    </div>
  )
}

export function JobsStatsSection() {
  return (
    <div className="w-full bg-white">
      <JobsStatsSectionContent />
    </div>
  )
}