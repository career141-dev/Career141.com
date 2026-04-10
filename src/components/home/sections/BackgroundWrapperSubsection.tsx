import { BookmarkIcon } from 'lucide-react'
import { withBasePath } from '@/lib/assetPath'
import { JobCard, type Job } from '@/components/common/JobCard'
import Link from 'next/link'

const homeJobCards: Job[] = [
  {
    type: 'Other',
    title: 'Head of Operations – Modern Trade (Supermarket Chain)',
    currency: 'LKR',
    salaryMin: null,
    salaryMax: null,
    location: 'Sri Lanka',
    industry: 'Other',
    workType: 'On-Site',
    date: 'February 27, 2026',
  },
  {
    type: 'Other',
    title: 'Senior Sales Manager',
    currency: 'LKR',
    salaryMin: '1,000,000',
    salaryMax: '1,200,000',
    location: 'Saudi Arabia',
    industry: 'Other',
    workType: 'On-Site',
    date: 'February 27, 2026',
  },
  {
    type: 'Other',
    title: 'EXECUTIVE – RESEARCH & BUSINESS DEVELOPMENT',
    currency: 'LKR',
    salaryMin: '55,000',
    salaryMax: '65,000',
    location: 'Sri Lanka',
    industry: 'Other',
    workType: 'On-Site',
    date: 'February 27, 2026',
  },
  {
    type: 'Power & Energy',
    title: 'Accountant',
    currency: 'LKR',
    salaryMin: '200,000',
    salaryMax: '250,000',
    location: 'Sri Lanka',
    industry: 'Power & Energy',
    workType: 'On-Site',
    date: 'February 27, 2026',
  },
]



export function BackgroundWrapperSubsection() {
  return (
    <section
      className="relative self-stretch w-full bg-[100%_100%] overflow-hidden bg-white"
      style={{ backgroundImage: `url(${withBasePath('/figmaAssets/blue-horizontal-tube-1-svg-fill.svg')})`, backgroundColor: 'white' }}
    >
      <div className="lg:hidden flex flex-col items-start px-[23px] pt-[47px] pb-5 gap-5">
        <h2
          className="[font-family:'Quicksand',Helvetica] font-normal text-black tracking-[0] text-[29px] leading-[35px]"
          data-testid="heading-get-hired"
        >
          <span>Looking to </span>
          <span>get hired?</span>
        </h2>
        <Link href="/premium-jobs">
          <button
            className="h-auto rounded-[100px] border border-solid border-[#006763] bg-transparent hover:bg-transparent hover:border-[#006763] px-4 py-[15px]"
            data-testid="button-view-all-jobs"
            type="button"
          >
            <span
              className="[font-family:'Quicksand',Helvetica] font-semibold text-[#006763] text-[11px] text-center tracking-[0.50px] leading-[13px] whitespace-nowrap"
              style={{ textShadow: '0px 0px 10px #0000004c' }}
            >
              VIEW ALL JOBS
            </span>
          </button>
        </Link>
      </div>

      <div className="hidden lg:flex w-full items-center justify-between px-5 pt-8 pb-5 md:px-12 md:pt-10 md:pb-8 lg:pl-[106px] lg:pr-[137px] lg:pt-[60px] lg:pb-[46px] flex-wrap gap-4">
        <div className="flex flex-col items-start justify-center py-1 lg:py-3">
          <h2
            className="[font-family:'Quicksand',Helvetica] font-normal text-black tracking-[0] leading-[1.2] text-[24px] md:text-[30px] lg:text-[38.4px] lg:leading-[46px]"
            data-testid="heading-get-hired-desktop"
          >
            <span>Looking to </span>
            <span className="font-bold">get hired?</span>
          </h2>
        </div>
        <Link href="/premium-jobs">
          <button
            className="h-auto rounded-[100px] border border-solid border-[#006763] bg-transparent hover:bg-transparent hover:border-[#006763] px-4 py-2.5 lg:pt-[15.2px] lg:pb-[15.8px] lg:px-[15.8px]"
            data-testid="button-view-all-jobs-desktop"
            type="button"
          >
            <span
              className="[font-family:'Quicksand',Helvetica] font-semibold text-[#006763] text-[11.2px] text-center tracking-[0.50px] leading-[13.4px] whitespace-nowrap"
              style={{ textShadow: '0px 0px 10px #0000004c' }}
            >
              VIEW ALL JOBS
            </span>
          </button>
        </Link>
      </div>

      <div className="w-full pb-10 px-[23px] pt-[50px] md:px-8 md:pt-8 lg:pl-[91px] lg:pr-[30px] lg:pt-[50px] lg:pb-[50px]">
        <div className="flex flex-wrap items-center justify-center gap-[30px] md:gap-4 lg:gap-4">
          {homeJobCards.map((job, index) => (
            <JobCard key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
