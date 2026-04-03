'use client'

import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common'
import { HeroSection } from '@/components/executive-search/HeroSection'
import { CommitmentSection } from '@/components/executive-search/CommitmentSection'
import { ImageSlideshow } from '@/components/executive-search/ImageSlideshow'
import { ProcessFlowSection } from '@/components/executive-search/ProcessFlowSection'
import { ExecutiveFooter } from '@/components/executive-search/ExecutiveFooter'
import { MeetingSchedulerSubsection } from '@/components/home/sections/MeetingSchedulerSubsection'
import { ContainerSubsection } from '@/components/home/sections/ContainerSubsection'
import { withBasePath } from '@/lib/assetPath'
import { useEffect, useRef, useState } from 'react'

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

const statsData = [
  { numEnd: 30, numStart: 14, isRange: true, hasPercent: false, label: 'Days Turn Around Time', containerSrc: withBasePath('/figmaAssets/container-4.svg') },
  { numEnd: 85, numStart: 0, isRange: false, hasPercent: true, label: 'Word of Mouth Growth', containerSrc: withBasePath('/figmaAssets/container-1.svg') },
  { numEnd: 90, numStart: 0, isRange: false, hasPercent: true, label: 'Success in Placements', containerSrc: withBasePath('/figmaAssets/container-2.svg') },
  { numEnd: 85, numStart: 0, isRange: false, hasPercent: true, label: 'Repeat Business', containerSrc: withBasePath('/figmaAssets/container.svg') },
]

export default function ExecutiveSearchPage() {
  const [showAllLogos, setShowAllLogos] = useState(false)

  const logoRows = [
    ['10-Brandix.png', '11-Hirdaramani.png', '12-MAS.png', '13-AE.png', '14-Aeturnum.png'],
    ['15-MS.png', '16-HM.png', '28-Dialog.png', '31-Inivos.png', '32-Inbay.png'],
    ['5-Fonterra.png', '6-Hayleys.png', '7-Hemas.png', '8-Finlays.png', '9-Trelleborg.png'],
    ['Aqua-Dynamics-Official-Logo-1.webp', 'Artboard 10@2x 1.png', 'Artboard 17@2x 1.png', 'Artboard 33@2x 1.png', 'Artboard 41@2x 1.png'],
  ]

  const initialRows = logoRows.slice(0, 2)
  const displayedRows = showAllLogos ? logoRows : initialRows

  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Navbar />
      <HeroSection />
      
      <div className="w-full pl-0">
        <CommitmentSection />
      </div>
      <h2 className="[font-family:'Quicksand',Helvetica] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black py-8 sm:py-12">
        Our Characterization 
      </h2>
      <ImageSlideshow />
      <ProcessFlowSection />
      <h2 className="[font-family:'Quicksand',Helvetica] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black py-8 sm:py-12">
        Specialized Industry
      </h2>

      <div className="w-full overflow-hidden">
        <div className="flex w-full h-[250px] md:h-[400px] lg:h-[500px]">
          {[
            { img: '/images/specialized/Apparel & Accessories.webp', title: 'Apparel & Accessories' },
            { img: '/images/specialized/FMCG.webp', title: 'FMCG' },
            { img: '/images/specialized/Information Technology.webp', title: 'Information Technology' },
            { img: '/images/specialized/Healthcare.webp', title: 'Healthcare' },
            { img: '/images/specialized/Pharmaceutical.webp', title: 'Pharmaceutical' },
            { img: '/images/specialized/E-commerce.webp', title: 'E-commerce' },
            { img: '/images/specialized/Retail Market.webp', title: 'Retail Market' },
            { img: '/images/specialized/Automotive.webp', title: 'Automotive' },
            { img: '/images/specialized/Construction.webp', title: 'Construction' },
            { img: '/images/specialized/Power & Energy.webp', title: 'Power & Energy' },
            { img: '/images/specialized/Education.webp', title: 'Education' },
            { img: '/images/specialized/Hospitality.webp', title: 'Hospitality' },
            { img: '/images/specialized/Shipping & Freight.webp', title: 'Shipping & Freight' },
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative h-full min-w-[80px] md:min-w-[120px] flex-1 transition-all duration-300 ease-in-out hover:flex-[2] cursor-pointer overflow-hidden"
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="[font-family:'Quicksand',Helvetica] text-white text-lg md:text-xl lg:text-2xl font-bold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      <h2 className="[font-family:'Quicksand',Helvetica] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black py-8 sm:py-12">
        Skill Specializations
      </h2>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-0">
          {[
            { title: 'Consumer Insight & Experience', img: '/images/Skills/Consumer Insight & Experience.png' },
            { title: 'Fashion Design', img: '/images/Skills/fashion design.png' },
            { title: 'HR, L&D, Compensation & Benefit', img: '/images/Skills/HR, L&D, Compensation & Benefit.png' },
            { title: 'IT Software & Infrastructure Solutions', img: '/images/Skills/IT Software & Infrastructure Solutions.png' },
            { title: 'Digital Marketing & Mar-tech', img: '/images/Skills/Digital Marketing & Mar-tech.png' },
            { title: 'Fabric Technology & Quality', img: '/images/Skills/Fabric Technology & Quality.png' },
            { title: 'Merchandising & Marketing', img: '/images/Skills/Merchandising & Marketing.png' },
            { title: 'Supply chain & Logistics', img: '/images/Skills/Supply chain & Logistics.png' },
            { title: 'Artificial Intelligence', img: '/images/Skills/Artificial Intelligence.png' },
            { title: 'Continuous Improvement', img: '/images/Skills/Continuous Improvement.png' },
            { title: 'Legal & Secretarial', img: '/images/Skills/Legal & Secretarial.png' },
            { title: 'Mechanical & Automation', img: '/images/Skills/Mechanical & Automation.png' },
          ].map((item, index) => {
            const isDeskGreen = (Math.floor(index / 4) + (index % 4)) % 2 === 0;
            const isMobGreen = (Math.floor(index / 2) + (index % 2)) % 2 === 0;

            return (
            <div 
              key={`skill-${index}`} 
              className="group relative w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[280px] xl:h-[360px] cursor-pointer"
              onMouseEnter={(e) => {
                const card = e.currentTarget.querySelector('.card-inner') as HTMLElement
                if (card) card.style.transform = 'rotateY(180deg)'
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.card-inner') as HTMLElement
                if (card) card.style.transform = 'rotateY(0deg)'
              }}
            >
              <div 
                className="card-inner relative w-full h-full transition-transform duration-500"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Mobile View */}
                  <img 
                    src={isMobGreen ? '/images/greenrec.svg' : '/images/wightrec.svg'} 
                    alt="" 
                    className="w-full h-full block object-cover md:hidden" 
                  />
                  <span className={`absolute [font-family:'Quicksand',Helvetica] text-center text-sm font-semibold px-2 w-full md:hidden ${isMobGreen ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </span>

                  {/* Desktop View */}
                  <img 
                    src={isDeskGreen ? '/images/greenrec.svg' : '/images/wightrec.svg'} 
                    alt="" 
                    className="w-full h-full hidden md:block object-cover" 
                  />
                  <span className={`absolute [font-family:'Quicksand',Helvetica] text-center md:text-lg lg:text-xl font-semibold px-2 w-full hidden md:block ${isDeskGreen ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </span>
                </div>
                <div 
                  className="absolute inset-0 flex items-center justify-center p-2 sm:p-4"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>

      <ContainerSubsection />

      <h2 className="[font-family:'Quicksand',Helvetica] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black py-8 sm:py-12 mt-20 lg:mt-32">
        Who we work with
      </h2>

      {/* Desktop: grid with show more, Mobile: horizontal scroll 2 rows */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Mobile horizontal scroll view */}
        <div className="md:hidden overflow-x-auto pb-4 snap-x snap-mandatory">
          {logoRows.map((row, rowIndex) => (
            <div 
              key={`mobile-row-${rowIndex}`} 
              className="flex justify-center items-center gap-3 min-w-[100%] snap-center mb-4"
            >
              {row.map((logo, logoIndex) => (
                <div 
                  key={`mobile-logo-${logoIndex}`} 
                  className="flex-shrink-0"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center p-2 shadow-md">
                    <img 
                      src={`/images/logos/${logo}`} 
                      alt="" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-5 gap-6 lg:gap-8">
          {displayedRows.flat().map((logo, index) => (
            <div 
              key={`desktop-logo-${index}`} 
              className="flex items-center justify-center"
            >
              <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-white flex items-center justify-center p-4 lg:p-5 shadow-md">
                <img 
                  src={`/images/logos/${logo}`} 
                  alt="" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Show more button - desktop only */}
        <div className="hidden md:flex justify-center mt-8">
          {showAllLogos ? (
            <button 
              onClick={() => setShowAllLogos(false)}
              className="[font-family:'Quicksand',Helvetica] px-6 py-3 bg-[#11593F] text-white rounded-full font-semibold hover:bg-[#0d4a32] transition-colors"
            >
              Show less
            </button>
          ) : (
            <button 
              onClick={() => setShowAllLogos(true)}
              className="[font-family:'Quicksand',Helvetica] px-6 py-3 bg-[#11593F] text-white rounded-full font-semibold hover:bg-[#0d4a32] transition-colors"
            >
              Show more
            </button>
          )}
        </div>
      </div>

      <div className="pt-10 lg:pt-20">
        <MeetingSchedulerSubsection />
      </div>

      
      <CompanyFooter />
    </main>
  )
}
