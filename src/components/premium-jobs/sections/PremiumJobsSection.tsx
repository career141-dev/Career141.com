'use client'

import { useState, type ReactNode } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from 'lucide-react'
import { withBasePath } from '@/lib/assetPath'
import { BrowseAllJobsSection } from './BrowseAllJobsSection'

const whatsappChannels = [
  {
    industry: 'Supply Chain',
    industryColor: 'text-[#c40852]',
    href: 'https://whatsapp.com/channel/0029VagPUuDLY6d43BN4Ja26',
  },
  {
    industry: 'IT',
    industryColor: 'text-[#4c8cf0]',
    href: 'https://whatsapp.com/channel/0029VagWqOLCsU9KNI8MuC2J',
  },
  {
    industry: 'Health Care',
    industryColor: 'text-[#08bbba]',
    href: 'https://whatsapp.com/channel/0029VabiHrI2UPBBNJMI9m1O',
  },
  {
    industry: 'Mechanical & Automation',
    industryColor: 'text-[#f97522]',
    href: 'https://whatsapp.com/channel/0029VacszL7HFxPAVYIxlI0x',
  },
]

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

const sidebarIndustries = [
  { label: 'Hospitality', count: '(23)', href: 'https://career141.com/premium-jobs/industry-hospitality/' },
  { label: 'Other', count: '(94)', href: 'https://career141.com/premium-jobs/industry-other/' },
  { label: 'Apparel', count: '(51)', href: 'https://career141.com/premium-jobs/industry-apparel/' },
  { label: 'FMCG', count: '(14)', href: 'https://career141.com/premium-jobs/industry-fmcg/' },
  { label: 'Automative', count: '(10)', href: 'https://career141.com/premium-jobs/industry-automative/' },
  { label: 'Education', count: '(6)', href: 'https://career141.com/premium-jobs/industry-education/' },
  { label: 'Information Technology', count: '(20)', href: 'https://career141.com/premium-jobs/industry-information-technology/' },
  { label: 'Power & Energy', count: '(7)', href: 'https://career141.com/premium-jobs/industry-power-energy/' },
  { label: 'Shipping & Freight', count: '(1)', href: 'https://career141.com/premium-jobs/industry-shipping-freight/' },
]

const sidebarLocations = [
  { label: 'Sri Lanka', count: '(180)', href: 'https://career141.com/premium-jobs/location-sri-lanka/' },
  { label: 'Bangladesh', count: '(15)', href: 'https://career141.com/premium-jobs/location-bangladesh/' },
  { label: 'India', count: '(10)', href: 'https://career141.com/premium-jobs/location-india/' },
  { label: 'Singapore', count: '(1)', href: 'https://career141.com/premium-jobs/location-singapore/' },
  { label: 'Dubai', count: '(3)', href: 'https://career141.com/premium-jobs/location-dubai/' },
  { label: 'Oman', count: '(3)', href: 'https://career141.com/premium-jobs/location-oman/' },
  { label: 'Saudi Arabia', count: '(4)', href: 'https://career141.com/premium-jobs/location-saudi-arabia/' },
  { label: 'Egypt', count: '(3)', href: 'https://career141.com/premium-jobs/location-egypt/' },
  { label: 'Vietnam', count: '(4)', href: 'https://career141.com/premium-jobs/location-vietnam/' },
  { label: 'Cambodia', count: '(2)', href: 'https://career141.com/premium-jobs/location-cambodia/' },
  { label: 'UK', count: '(1)', href: 'https://career141.com/premium-jobs/location-uk/' },
]

const sidebarCurrencies = [
  { label: 'LKR', count: '(186)', href: 'https://career141.com/premium-jobs/currency-lkr/' },
  { label: 'USD', count: '(40)', href: 'https://career141.com/premium-jobs/currency-usd/' },
]

const jobCards = [
  { industry: 'Other', title: 'Head of Operations - Modern Trade (Supermarket Chain)', currency: 'LKR', salaryMin: '', salaryMax: '-', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Other', title: 'Senior Sales Manager', currency: 'LKR', salaryMin: '1,000,000', salaryMax: '1,200,000', location: 'Saudi Arabia', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Other', title: 'EXECUTIVE - RESEARCH & BUSINESS DEVELOPMENT', currency: 'LKR', salaryMin: '55,000', salaryMax: '65,000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Power & Energy', title: 'Accountant', currency: 'LKR', salaryMin: '200,000', salaryMax: '250,000', location: 'Sri Lanka', type: 'Power & Energy', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Automative', title: 'General Manager - Sales (4 Wheeler Cars & SUV)', currency: 'LKR', salaryMin: '1,200,000', salaryMax: '', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Automative', title: 'General Manager - Sales', currency: 'LKR', salaryMin: '1,200,000', salaryMax: '', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Apparel', title: 'Chief Operating Officer', currency: 'USD', salaryMin: '10,000', salaryMax: '', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Other', title: 'Procurement Manager', currency: 'LKR', salaryMin: '400,000', salaryMax: '550,000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Information Technology', title: 'Manager / Senior Manager Digital Marketing', currency: 'LKR', salaryMin: '450,000', salaryMax: '550,000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Apparel', title: 'Manager - Quality Assurance', currency: 'LKR', salaryMin: '320,000', salaryMax: '420,000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Apparel', title: 'Cutting Manager', currency: 'LKR', salaryMin: '320,000', salaryMax: '420,000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
  { industry: 'Apparel', title: 'Cluster Manager - Human Resources', currency: 'LKR', salaryMin: '650,000', salaryMax: '800,000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
]

const FilterTag = ({ label, href, active }: { label: string; href: string; active?: boolean }) => (
  <a href={href} rel="noopener noreferrer" target={href !== '#' ? '_blank' : undefined}>
    <div className={`px-5 py-2.5 rounded-[3px] inline-flex items-center cursor-pointer ${active ? 'bg-career-14-1comeden' : 'bg-[#f2f2f2]'}`}>
      <span className={`[font-family:'Inter',Helvetica] font-normal text-[13.5px] md:text-[14.5px] text-center leading-[15px] whitespace-nowrap [text-shadow:0px_0px_10px_#0000004c] ${active ? 'text-career141comelectric-lime' : 'text-career-14-1comblack'}`}>
        {label}
      </span>
    </div>
  </a>
)

const SidebarFilterLink = ({ label, count, href }: { label: string; count: string; href: string }) => (
  <div className="inline-flex items-start rounded-[5px] border border-solid border-[#0000001a]">
    <div className="inline-flex items-start gap-[3.35px] px-[9.8px] py-[1.8px] rounded-[3px] border border-solid border-transparent">
      <div className="inline-flex flex-col self-stretch items-start">
        <a className="[font-family:'Inter',Helvetica] text-career-14-1comhibiscus text-[15px] leading-[20.8px] whitespace-nowrap flex items-center font-normal tracking-[0]" href={href} rel="noopener noreferrer" target="_blank">
          {label}
        </a>
      </div>
      <div className="justify-center px-[5px] py-0 self-stretch inline-flex flex-col items-start">
        <div className="flex-1 grow opacity-60 inline-flex flex-col items-start">
          <div className="flex items-center [font-family:'Inter',Helvetica] font-normal text-[#252525] text-[13.5px] tracking-[0] leading-[20.8px] whitespace-nowrap">
            {count}
          </div>
        </div>
      </div>
    </div>
  </div>
)


export function PremiumJobsSection() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const prevSlide = () => setCarouselIndex((i) => Math.max(0, i - 1))
  const nextSlide = () => setCarouselIndex((i) => Math.min(whatsappChannels.length - 1, i + 1))

  return (
    <div className="flex flex-col w-full items-start">
      <section className="flex flex-col w-full items-start justify-end relative overflow-hidden" style={{ minHeight: 'clamp(340px, 50vw, 593px)' }}>
        <div className="absolute inset-0 bg-career141comblack-russian opacity-[0.28] z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${withBasePath('/figmaAssets/div-elementor-element.png')})` }}
        />

        <img
          className="absolute w-full left-0 -bottom-px h-[50px] md:h-[68px] z-20"
          alt="Div elementor shape"
          src={withBasePath('/figmaAssets/div-elementor-shape.svg')}
        />

        <div className="relative z-20 flex flex-col items-start justify-end gap-3 md:gap-[19.17px] px-6 md:pl-[174.57px] md:pr-[76.04px] pb-10 md:pb-[182.98px] pt-10 md:pt-[152.56px] w-full">
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
            <span className="[font-family:'Quicksand',Helvetica] font-bold text-[#cbfc06] text-[22px] md:text-[38.4px] leading-[32px] md:leading-[53.8px] tracking-[0]">
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

        <div className="hidden md:flex flex-col items-start w-full relative">
          <div className="relative self-stretch w-full overflow-hidden">
            <div className="flex w-full justify-center gap-5 py-4">
              {whatsappChannels.map((channel, index) => (
                <div key={index} className="flex flex-col w-[312px] items-start flex-shrink-0">
                  <div className="flex flex-col items-start p-2.5 w-full">
                    <div className="relative w-full" style={{ height: '344px' }}>
                      <div className="flex flex-col w-full items-start justify-center pl-12 pr-0 py-0 absolute top-0 left-0">
                        <div className="relative w-full h-[92px]">
                          <div className="w-[38%] h-[92px] rounded-[100px] border-[6px] border-solid border-white shadow-[4px_4px_8px_#0000003d]" />
                        </div>
                      </div>
                      <div className="absolute w-full top-[92px] left-0 h-[229px] flex">
                        <div className="flex mt-[-54px] h-[283px] flex-1 flex-col w-full items-start justify-center px-2.5 py-[84.9px] rounded-[42px] bg-[linear-gradient(180deg,rgba(222,237,230,1)_0%,rgba(204,255,222,1)_100%)]">
                          <div className="relative w-full flex flex-col items-center gap-1">
                            <span className="[font-family:'Inter',Helvetica] font-normal text-[18.8px] leading-[19.2px] whitespace-nowrap text-career-14-1comwoodsmoke tracking-[0]">Get Instant</span>
                            <span className={`[font-family:'Quicksand',Helvetica] font-bold text-[22.4px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap ${channel.industryColor}`}>{channel.industry}</span>
                            <span className="[font-family:'Inter',Helvetica] font-normal text-career-14-1comwoodsmoke text-[18.3px] tracking-[0] leading-[19.2px] whitespace-nowrap">Notifications via</span>
                            <span className="[font-family:'Quicksand',Helvetica] font-bold text-[#4cc65a] text-[22.4px] tracking-[0] leading-[22.4px] whitespace-nowrap">WhatsApp</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full items-start justify-center pl-12 pr-0 py-0 absolute top-[297px] left-0">
                        <div className="inline-flex items-start px-[18px] py-4 rounded-[100px] bg-[linear-gradient(180deg,rgba(72,196,85,1)_0%,rgba(124,220,140,1)_100%)]">
                          <a className="[font-family:'Quicksand',Helvetica] font-semibold text-career-14-1comwhite text-base leading-4 flex items-center justify-center [text-shadow:0px_0px_10px_#0000004c] text-center tracking-[0] whitespace-nowrap" href={channel.href} rel="noopener noreferrer" target="_blank">
                            JOIN NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img className="absolute top-[152px] left-0 w-[30px] h-[30px] cursor-pointer" alt="Previous slide" src={withBasePath('/figmaAssets/previous-slide.svg')} />
          <img className="absolute top-[152px] right-0 w-[30px] h-[30px] cursor-pointer" alt="Next slide" src={withBasePath('/figmaAssets/next-slide.svg')} />
        </div>

        <div className="flex md:hidden flex-col items-center w-full relative">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {whatsappChannels.map((channel, index) => (
                <div key={index} className="flex-shrink-0 w-full flex justify-center px-8">
                  <div className="relative w-[280px]" style={{ height: '330px' }}>
                    <div className="flex flex-col w-full items-start justify-center pl-10 pr-0 py-0 absolute top-0 left-0">
                      <div className="relative w-full h-[80px]">
                        <div className="w-[80px] h-[80px] rounded-full border-4 border-white shadow-[4px_4px_8px_#0000003d] bg-gray-200" />
                      </div>
                    </div>
                    <div className="absolute w-full top-[80px] left-0 h-[215px] flex">
                      <div className="flex mt-[-40px] h-[255px] flex-1 flex-col w-full items-center justify-center px-2.5 py-16 rounded-[42px] bg-[linear-gradient(180deg,rgba(222,237,230,1)_0%,rgba(204,255,222,1)_100%)]">
                        <div className="relative w-full flex flex-col items-center gap-1">
                          <span className="[font-family:'Inter',Helvetica] font-normal text-[15.6px] leading-[16px] whitespace-nowrap text-career-14-1comwoodsmoke tracking-[0]">Get Instant</span>
                          <span className={`[font-family:'Quicksand',Helvetica] font-bold text-[19.2px] text-center tracking-[0] leading-[19.2px] whitespace-nowrap ${channel.industryColor}`}>{channel.industry}</span>
                          <span className="[font-family:'Inter',Helvetica] font-normal text-career-14-1comwoodsmoke text-[15.1px] tracking-[0] leading-[16px] whitespace-nowrap">Notifications via</span>
                          <span className="[font-family:'Quicksand',Helvetica] font-bold text-[#4cc65a] text-[19.2px] tracking-[0] leading-[19.2px] whitespace-nowrap">WhatsApp</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full items-start justify-center pl-10 pr-0 py-0 absolute top-[275px] left-0">
                      <div className="inline-flex items-start px-[18px] py-4 rounded-[100px] bg-[linear-gradient(180deg,rgba(72,196,85,1)_0%,rgba(124,220,140,1)_100%)]">
                        <a className="[font-family:'Quicksand',Helvetica] font-semibold text-white text-base leading-4 flex items-center justify-center [text-shadow:0px_0px_10px_#0000004c] text-center tracking-[0] whitespace-nowrap" href={channel.href} rel="noopener noreferrer" target="_blank">
                          JOIN NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevSlide} disabled={carouselIndex === 0} className="absolute top-[140px] left-0 w-[30px] h-[30px] flex items-center justify-center disabled:opacity-30">
            <ChevronLeftIcon size={24} className="text-[#11593F]" strokeWidth={2.5} />
          </button>
          <button onClick={nextSlide} disabled={carouselIndex === whatsappChannels.length - 1} className="absolute top-[140px] right-0 w-[30px] h-[30px] flex items-center justify-center disabled:opacity-30">
            <ChevronRightIcon size={24} className="text-[#11593F]" strokeWidth={2.5} />
          </button>

          <div className="flex gap-2 mt-4">
            {whatsappChannels.map((_, i) => (
              <button key={i} onClick={() => setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-colors ${i === carouselIndex ? 'bg-[#11593F]' : 'bg-[#11593F40]'}`} />
            ))}
          </div>
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
              At Career141 Sri Lanka, we specialize in premium job placements for senior professionals, executives, and leaders across industries such as Apparel Merchandising Marketing, Finance &amp; Auditing, Construction &amp; Civil Engineering, IT Software Infrastructure, Data Analytics &amp; Research, EHS, Maintenance Engineering, Mechanical Engineering &amp; Production, Supply Chain Management, Human Resources, L&amp;D, Compensation &amp; Benefits, Digital Transformation, Fashion Designing &amp; Development, Marketing, Consumer Insight &amp; Customer Experience and more. We provide confidential executive hiring and headhunting services for C-level, Director, and Senior Management positions in Sri Lanka, Singapore, Dubai, Qatar, Kuwait, Bahrain, Egypt, Oman, India, Bangladesh, Indonesia, Malaysia, Vietnam, Cambodia, Thailand, Hong Kong, Kenya, Ghana, Ethiopia, Tanzania, Botswana, Zambia, Uganda, Rwanda, Fiji, USA, UK, Australia, Fiji, PNG. Additionally, we support offshore companies with startup operations in Sri Lanka by sourcing top-tier talent for teams expanding across Asia, the Middle East, and Africa. Whether you&apos;re seeking to elevate your career or explore exclusive global job opportunities, Career141 connects you with the best of corporate talent worldwide.
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
        jobCards={jobCards}
        sidebarIndustries={sidebarIndustries}
        sidebarLocations={sidebarLocations}
        sidebarCurrencies={sidebarCurrencies}
      />
    </div>
  )
}
