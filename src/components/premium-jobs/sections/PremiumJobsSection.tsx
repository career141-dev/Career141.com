'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { withBasePath } from '@/lib/assetPath'
import { BrowseAllJobsSection } from './BrowseAllJobsSection'
import { premiumJobCards } from '../premiumJobsData'

type WhatsAppChannel = {
  industry: string
  industryColor: string
  href: string
  imageSrc: string
}

/** 12 channels in 3×4 order (desktop shows 4 per slide). Replace placeholder hrefs when real channel IDs are available. */
const whatsappChannels: WhatsAppChannel[] = [
  {
    industry: 'Construction',
    industryColor: 'text-[#d35400]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
    imageSrc: '/figmaAssets/premium-jobs-mechanical-automation.webp',
  },
  {
    industry: 'Marketing',
    industryColor: 'text-[#c40852]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
    imageSrc: '/figmaAssets/premium-jobs-digital-marketing.webp',
  },
  {
    industry: 'Supply Chain',
    industryColor: 'text-[#8e24aa]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
    imageSrc: '/figmaAssets/premium-jobs-health-care.webp',
  },
  {
    industry: 'IT',
    industryColor: 'text-[#4c8cf0]',
    href: 'https://whatsapp.com/channel/0029VagWqOLCsU9KNI8MuC2J',
    imageSrc: '/figmaAssets/premium-jobs-it.webp',
  },
  {
    industry: 'Health Care',
    industryColor: 'text-[#08bbba]',
    href: 'https://whatsapp.com/channel/0029VabiHrI2UPBBNJMI9m1O',
    imageSrc: '/figmaAssets/premium-jobs-health-care.webp',
  },
  {
    industry: 'Mechanical & Automation',
    industryColor: 'text-[#f97522]',
    href: 'https://whatsapp.com/channel/0029VacszL7HFxPAVYIxlI0x',
    imageSrc: '/figmaAssets/premium-jobs-mechanical-automation.webp',
  },
  {
    industry: 'Digital Marketing',
    industryColor: 'text-[#26c6da]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
    imageSrc: '/figmaAssets/premium-jobs-digital-marketing.webp',
  },
  {
    industry: 'Finance',
    industryColor: 'text-[#1565c0]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
    imageSrc: '/figmaAssets/premium-jobs-it.webp',
  },
  {
    industry: 'Apparel',
    industryColor: 'text-[#6a1b9a]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
    imageSrc: '/figmaAssets/premium-jobs-health-care.webp',
  },
  {
    industry: 'Construction',
    industryColor: 'text-[#d35400]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
    imageSrc: '/figmaAssets/premium-jobs-mechanical-automation.webp',
  },
  {
    industry: 'Marketing',
    industryColor: 'text-[#c40852]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
    imageSrc: '/figmaAssets/premium-jobs-digital-marketing.webp',
  },
  {
    industry: 'Supply Chain',
    industryColor: 'text-[#8e24aa]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
    imageSrc: '/figmaAssets/premium-jobs-health-care.webp',
  },
]

const WHATSAPP_AUTO_MS = 20_000

function industryAllowsWrap(industry: string) {
  return industry === 'Mechanical & Automation' || industry === 'Digital Marketing'
}

const industryTagsRow1 = [
  { label: 'ALL', active: true, href: '#' },
  { label: 'Shipping & Freight', href: 'https://career141.com/shipping-and-freight-jobs/' },
  { label: 'Pharmaceutical', href: 'https://career141.com/pharmaceutical-jobs/' },
  { label: 'Hospitality', href: 'https://career141.com/hospitality-jobs/' },
  { label: 'Retail Market', href: 'https://career141.com/retail-market-jobs/' },
  { label: 'FMCG', href: 'https://career141.com/fmcg-jobs/' },
  { label: 'Power & Energy', href: 'https://career141.com/power-energy-jobs/' },
  { label: 'Healthcare', href: 'https://career141.com/healthcare-jobs/' },
  { label: 'E-Commerce', href: 'https://career141.com/e-commerce-jobs/' },
]

const industryTagsRow2 = [
  { label: 'Testing & Certification', href: 'https://career141.com/testing-certification-jobs/', active: false },
  { label: 'Construction', href: 'https://career141.com/construction-jobs/', active: false },
  { label: 'IT', href: 'https://career141.com/it-jobs/', active: false },
  { label: 'Apparel', href: 'https://career141.com/apparel-jobs/', active: false },
  { label: 'Automotive', href: 'https://career141.com/automotive-jobs/', active: false },
  { label: 'Education', href: 'https://career141.com/education-jobs/', active: false },
]

const allIndustryTags = [...industryTagsRow1, ...industryTagsRow2]

const FilterTag = ({ label, href, active }: { label: string; href: string; active?: boolean }) => (
  <a 
    href={href} 
    rel="noopener noreferrer" 
    target={href !== '#' ? '_blank' : undefined}
    onClick={(e) => {
      if (href === '#') e.preventDefault();
    }}
  >
    <div className={`px-5 py-2.5 rounded-[3px] inline-flex items-center cursor-pointer ${active ? 'bg-career-14-1comeden' : 'bg-[#f2f2f2]'}`}>
      <span className={`[font-family:'Inter',Helvetica] font-normal text-[13.5px] md:text-[14.5px] text-center leading-[15px] whitespace-nowrap [text-shadow:0px_0px_10px_#0000004c] ${active ? 'text-career141comelectric-lime' : 'text-career-14-1comblack'}`}>
        {label}
      </span>
    </div>
  </a>
)

export function PremiumJobsSection() {
  const channelCount = whatsappChannels.length
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const scrollRaf = useRef<number | null>(null)
  const skipScrollIndexSync = useRef(false)
  const [, setActiveIndex] = useState(0)
  const [pauseAuto, setPauseAuto] = useState(false)

  const scrollCardIntoView = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const el = cardRefs.current[index]
    el?.scrollIntoView({ behavior, inline: 'center', block: 'nearest' })
  }, [])

  const runProgrammaticScroll = useCallback((index: number) => {
    skipScrollIndexSync.current = true
    scrollCardIntoView(index, 'smooth')
    window.setTimeout(() => {
      skipScrollIndexSync.current = false
    }, 500)
  }, [scrollCardIntoView])

  const goPrev = useCallback(() => {
    setActiveIndex((i) => {
      const ni = (i - 1 + channelCount) % channelCount
      queueMicrotask(() => runProgrammaticScroll(ni))
      return ni
    })
  }, [channelCount, runProgrammaticScroll])

  const goNext = useCallback(() => {
    setActiveIndex((i) => {
      const ni = (i + 1) % channelCount
      queueMicrotask(() => runProgrammaticScroll(ni))
      return ni
    })
  }, [channelCount, runProgrammaticScroll])

  useEffect(() => {
    if (pauseAuto) return
    const id = window.setInterval(() => {
      setActiveIndex((i) => {
        const ni = (i + 1) % channelCount
        queueMicrotask(() => runProgrammaticScroll(ni))
        return ni
      })
    }, WHATSAPP_AUTO_MS)
    return () => window.clearInterval(id)
  }, [pauseAuto, channelCount, runProgrammaticScroll])

  const onScrollStrip = useCallback(() => {
    if (skipScrollIndexSync.current) return
    if (scrollRaf.current != null) cancelAnimationFrame(scrollRaf.current)
    scrollRaf.current = requestAnimationFrame(() => {
      scrollRaf.current = null
      const root = scrollRef.current
      if (!root) return
      const mid = root.scrollLeft + root.clientWidth / 2
      let best = 0
      let bestDist = Infinity
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.offsetLeft + el.offsetWidth / 2
        const d = Math.abs(mid - r)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      setActiveIndex((cur) => (cur === best ? cur : best))
    })
  }, [])

  return (
    <div className="flex flex-col w-full items-start">
      <section className="flex flex-col w-full items-start justify-end relative overflow-hidden bg-[#0A1D13] min-h-[606px] md:min-h-[720px]">
        <div className="absolute inset-0 bg-career141comblack-russian opacity-[0.28] z-10" />
        {/* Mobile Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-[center_12%] md:hidden"
          style={{ backgroundImage: `url(${withBasePath('/figmaAssets/Mobile-hero-pj.png')})` }}
        />
        {/* Desktop Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-[center_12%] hidden md:block"
          style={{ backgroundImage: `url(${withBasePath('/figmaAssets/new-premium-jobs-hero.png')})` }}
        />

        <svg
          className="absolute w-full left-0 -bottom-px text-white z-20 h-[40px] md:h-[50px]"
          viewBox="0 0 3042 136"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_201_10164)">
            <g clipPath="url(#clip1_201_10164)">
              <path d="M-335.876 130.152V136H3377.48V130.152C3374.14 104.584 2907 1.088 1520.8 0C134.607 -1.088 -335.876 105.128 -335.876 130.152Z" fill="currentColor"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_201_10164">
              <rect width="1520.8" height="68" transform="matrix(-2 0 0 -2 3041.6 136)"/>
            </clipPath>
            <clipPath id="clip1_201_10164">
              <rect width="1856.68" height="68" transform="matrix(-2 0 0 -2 3377.48 136)"/>
            </clipPath>
          </defs>
        </svg>
        <div className="relative z-20 flex flex-col items-start justify-end gap-3 md:gap-[19.17px] px-6 md:pl-[174.57px] md:pr-[76.04px] pb-16 md:pb-[250px] pt-16 md:pt-[152.56px] w-full h-full my-auto">
          <div className="inline-flex flex-col items-start">
            <div className="inline-flex flex-wrap items-start gap-0">
              <div className="inline-flex flex-col items-start">
                <div className="inline-flex items-start">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#bcbcbc] text-[11.4px] md:text-[14.3px] tracking-[0] leading-6 whitespace-nowrap">
                    Career141
                  </span>
                </div>
              </div>
              <div className="inline-flex gap-5 pl-5 py-0 items-start">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap">&gt;</span>
                <span className="[font-family:'Inter',Helvetica] font-semibold text-career-14-1comwhite text-[12.2px] md:text-[15.3px] tracking-[0] leading-6 whitespace-nowrap">Premium Jobs</span>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start max-w-[340px] md:max-w-[886px]">
            <span className="[font-family:'Quicksand',Helvetica] font-bold text-white text-[22px] md:text-[38.4px] leading-[32px] md:leading-[53.8px] tracking-[0]">
              Premium Jobs &amp; Executive Search for Leadership Roles Across 25+ Countries in Apparel, Finance, IT, Construction <span className="text-[#cbfc06]">and More</span>
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start gap-5 pt-[14.4px] pb-8 md:pb-[60.02px] px-4 md:px-[91.24px] relative self-stretch w-full">
        <div className="flex flex-col items-center w-full">
          <h2 className="[font-family:'Quicksand',Helvetica] font-bold text-career-14-1comwoodsmoke text-[22px] md:text-[35.2px] text-center tracking-[0] leading-[1.2] whitespace-nowrap">
            Join our WhatsApp channels
          </h2>
        </div>

        <div
          className="flex flex-col w-full relative px-4 md:px-10 pb-2"
          onMouseEnter={() => setPauseAuto(true)}
          onMouseLeave={() => setPauseAuto(false)}
        >
          {/* Viewport: show at most 4 cards at once on md+; mobile uses full width (~1 card). */}
          <div className="w-full max-w-full md:max-w-[calc(4*312px+3*1.25rem)] mx-auto">
            <div
              ref={scrollRef}
              onScroll={onScrollStrip}
              className="flex w-full gap-5 py-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x cursor-grab active:cursor-grabbing"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
            {whatsappChannels.map((channel, index) => (
              <a
                key={`wa-${index}-${channel.industry}`}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                href={channel.href}
                rel="noopener noreferrer"
                target="_blank"
                className="snap-center shrink-0 w-[280px] min-w-[280px] md:w-[312px] md:min-w-[312px] flex flex-col items-start p-2.5 rounded-lg outline-none ring-career-14-1comeden focus-visible:ring-2 focus-visible:ring-offset-2"
                aria-label={`${channel.industry} WhatsApp channel — open in new tab`}
              >
                <div className="relative w-[260px] md:w-[292px] h-[310px] md:h-[345px]">
                  <div className="absolute top-0 w-full flex justify-center z-10 pointer-events-none">
                    <img
                      src={withBasePath(channel.imageSrc)}
                      alt=""
                      width={93}
                      height={93}
                      className="w-[80px] h-[80px] md:w-[93px] md:h-[93px] rounded-[50%] object-cover border-[6px] border-white shadow-[4px_4px_8px_rgba(0,0,0,0.24)]"
                    />
                  </div>
                  <div className="absolute top-[40px] left-0 w-full h-[250px] md:h-[283px] flex flex-col items-center justify-center pt-10 px-4 rounded-[42px] bg-[linear-gradient(180deg,rgba(222,237,230,1)_0%,rgba(204,255,222,1)_100%)] pointer-events-none">
                    <div className="flex flex-col items-center gap-1 mt-2">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[15.6px] md:text-[18.8px] leading-[1.1] whitespace-nowrap text-career-14-1comwoodsmoke tracking-[0]">Get Instant</span>
                      <span
                        className={`[font-family:'Quicksand',Helvetica] font-bold text-[19.2px] md:text-[22.4px] text-center tracking-[0] leading-snug max-w-[260px] ${industryAllowsWrap(channel.industry) ? 'whitespace-normal' : 'whitespace-nowrap'} ${channel.industryColor}`}
                      >
                        {channel.industry}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-career-14-1comwoodsmoke text-[15.1px] md:text-[18.3px] tracking-[0] leading-[1.2] whitespace-nowrap">Notifications via</span>
                      <span className="[font-family:'Quicksand',Helvetica] font-bold text-[#4cc65a] text-[19.2px] md:text-[22.4px] tracking-[0] leading-tight whitespace-nowrap">WhatsApp</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full flex justify-center pointer-events-none">
                    <span className="inline-flex items-center justify-center px-[22px] py-1 h-[40px] md:h-[48px] rounded-[100px] bg-[linear-gradient(180deg,rgba(72,196,85,1)_0%,rgba(124,220,140,1)_100%)] [font-family:'Quicksand',Helvetica] font-semibold text-career-14-1comwhite text-base leading-4 [text-shadow:0px_0px_10px_#0000004c] text-center tracking-[0] whitespace-nowrap">
                      JOIN NOW
                    </span>
                  </div>
                </div>
              </a>
            ))}
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              goPrev()
            }}
            className="absolute top-[152px] left-0 md:left-2 w-[30px] h-[30px] p-0 border-0 bg-transparent cursor-pointer z-10"
            aria-label="Previous channel"
          >
            <img className="w-full h-full pointer-events-none" alt="" src={withBasePath('/figmaAssets/previous-slide.svg')} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              goNext()
            }}
            className="absolute top-[152px] right-0 md:right-2 w-[30px] h-[30px] p-0 border-0 bg-transparent cursor-pointer z-10"
            aria-label="Next channel"
          >
            <img className="w-full h-full pointer-events-none" alt="" src={withBasePath('/figmaAssets/next-slide.svg')} />
          </button>
        </div>
      </section>

      <section className="flex flex-col items-start justify-center px-4 md:px-[190.4px] py-0 self-stretch w-full">
        <div className="flex flex-col items-start gap-4 md:gap-5 w-full">
          <div className="flex flex-col items-center w-full pt-4 md:pt-0">
            <h2 className="[font-family:'Quicksand',Helvetica] font-bold text-career-14-1comwoodsmoke text-[22px] md:text-[35.2px] text-center tracking-[0] leading-[1.2]">
              Browse by Industry
            </h2>
          </div>

          <div className="flex flex-col items-center w-full pb-2">
            <p className="[font-family:'Inter',Helvetica] font-medium text-[#000] text-[13.8px] text-center tracking-[0] leading-[21.6px]">
              At Career141 Sri Lanka, we specialize in premium job placements for senior professionals, executives, and leaders across industries such as Apparel Merchandising Marketing, Finance &amp; Auditing, Construction &amp; Civil Engineering, IT Software &amp; Infrastructure, Data Analytics &amp; Research, EHS, Maintenance Engineering, Mechanical Engineering &amp; Production, Supply Chain Management, Human Resources, L&amp;D, Compensation &amp; Benefits, Digital Transformation Fashion Designing &amp; Development, Marketing, Consumer Insight &amp; Customer Experience, and more. We provide confidential executive hiring and headhunting services for C-level, Director, and Senior Management positions in Sri Lanka, Singapore, Dubai, Qatar, Kuwait, Bahrain, Egypt, Oman, India, Bangladesh, Indonesia, Malaysia, Vietnam, Cambodia, Thailand, Hong Kong, Kenya, Ghana, Ethiopia, Tanzania, Botswana, Zambia, Uganda, Rwanda, Fiji, USA, UK, Australia, Fiji, PNG. Additionally, we support offshore companies with startup operations in Sri Lanka by sourcing top-tier talent for teams expanding across Asia, the Middle East, and Africa. Whether you&apos;re seeking to elevate your career or explore exclusive global job opportunities, Career141 connects you with the best of corporate talent worldwide.
            </p>
          </div>

          <div className="hidden md:flex flex-wrap justify-center items-start gap-2.5 w-full pb-4">
            {allIndustryTags.map((tag) => (
              <FilterTag key={tag.label} label={tag.label} href={tag.href} active={tag.active} />
            ))}
          </div>

          <div className="flex md:hidden flex-col items-center gap-2 w-full pb-4">
            {allIndustryTags.map((tag) => (
              <a
                key={tag.label}
                href={tag.href}
                rel="noopener noreferrer"
                target={tag.href !== '#' ? '_blank' : undefined}
                onClick={(e) => {
                  if (tag.href === '#') e.preventDefault();
                }}
                className="w-full"
              >
                <div className={`w-full px-6 py-3 rounded-[3px] flex items-center cursor-pointer ${tag.active ? 'bg-career-14-1comeden' : 'bg-[#f2f2f2]'}`}>
                  <span className={`[font-family:'Inter',Helvetica] font-normal text-[13.8px] leading-[14.4px] [text-shadow:0px_0px_10px_#0000004c] ${tag.active ? 'text-career141comelectric-lime' : 'text-career-14-1comblack'}`}>
                    {tag.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <BrowseAllJobsSection 
        jobCards={premiumJobCards}
        sidebarIndustries={[]} // Handled dynamically inside component now
        sidebarLocations={[]} 
        sidebarCurrencies={[]} 
      />
    </div>
  )
}
