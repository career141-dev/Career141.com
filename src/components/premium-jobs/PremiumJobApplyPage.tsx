import Link from 'next/link'
import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common'
import { JobCard } from '@/components/common/JobCard'
import { withBasePath } from '@/lib/assetPath'
import { getPremiumJobBySlug, premiumJobCards, type PremiumJob } from './premiumJobsData'
import { jobDetailsBySlug, type JobDetailNode } from './jobDetailsData'

function HeroSection({ job }: { job: PremiumJob }) {
  const heroBackgroundSrc = withBasePath('/figmaAssets/premium-jobs-detail-hero-source.png')

  return (
    <section className="flex flex-col w-full items-start justify-end relative overflow-hidden bg-[#0A1D13] min-h-[500px] md:min-h-[600px]">
      <div className="absolute inset-0 bg-career141comblack-russian opacity-[0.28] z-10" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 md:hidden">
        <img alt="" className="absolute inset-0 h-full w-full object-cover object-center" src={heroBackgroundSrc} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden md:block">
        <img alt="" className="absolute inset-0 h-full w-full object-cover object-center" src={heroBackgroundSrc} />
      </div>

      <div className="relative z-20 w-full px-[23.413px] lg:px-[20.3125vw] pb-[90px] md:pb-[70px] pt-[150px] md:pt-[190px] lg:pt-[210px] flex flex-col gap-[10px] -translate-y-[80px] md:-translate-y-[110px] -translate-x-[10px] md:-translate-x-[16px]">
        <div className="flex flex-col justify-center items-start w-full">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-wrap items-start w-full">
              <div className="flex flex-col items-start" style={{ padding: '1px 0 0.8px' }}>
                <div className="flex items-start">
                  <Link href="/" className="text-white [font-family:'Inter',sans-serif] text-[12.9px] font-normal leading-[21.6px] inline-block hover:opacity-80 transition-opacity">
                    Career141
                  </Link>
                </div>
              </div>
              <div className="flex items-start" style={{ gap: '20.01px', padding: '1.4px 0 0.6px 20px' }}>
                <span className="text-[#999] [font-family:'Inter',sans-serif] text-[14.4px] font-normal leading-[21.6px] inline-block">/</span>
                <span className="text-white [font-family:'Inter',sans-serif] text-[13.1px] font-bold leading-[21.6px] inline-block">&nbsp;{job.title}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start w-full lg:w-[513px] lg:max-w-[1140px]">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start w-full">
              <span className="text-[32px] leading-[38.4px] lg:text-[48px] lg:leading-[57.6px] text-white [font-family:'Quicksand',sans-serif] font-bold whitespace-pre-line">
                {job.title}
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

function SidebarSummary({ job }: { job: PremiumJob }) {
  return (
    <div className="h-[302.18px] lg:h-[324.38px] min-h-[300px] relative w-full shrink-0 bg-[#e6f0f9]">
      <div className="absolute flex flex-col gap-5 py-[23px] lg:py-[30.188px]" style={{ left: '27.48px', right: '27.46px', top: 0, bottom: 0 }}>
        <div className="[font-family:'Quicksand',sans-serif] font-bold text-[#11593f] text-[19.2px] leading-[19.2px]">Summary</div>
        <div className="[font-family:'Quicksand',sans-serif] font-semibold text-[#555] text-[14.4px] leading-[14.4px]">{job.location}</div>
        <div className="[font-family:'Quicksand',sans-serif] font-semibold text-[#555] text-[14.4px] leading-[14.4px]">{job.workType}</div>
        <div className="flex gap-[5px] h-[15px] items-start">
          {[
            job.currency,
            job.salaryMin?.trim() ? job.salaryMin : '-',
            job.salaryMax?.trim() ? job.salaryMax : '-',
          ].map((part, index) => (
            <span key={index} className="[font-family:'Quicksand',sans-serif] font-semibold text-[#555] text-[14.4px] leading-[14.4px] whitespace-nowrap">
              {part}
            </span>
          ))}
        </div>
        <div className="[font-family:'Quicksand',sans-serif] font-semibold text-[#555] text-[14.4px] leading-[14.4px]">Full-time</div>
        <div className="w-full h-[5.6px] flex items-center py-[2px]"><div className="flex-1 border-t-[1.6px] border-[rgba(0,0,0,0.33)]" /></div>
        <div className="[font-family:'Quicksand',sans-serif] font-bold text-[#11593f] text-[19.2px] leading-[19.2px]">Category</div>
        <div className="[font-family:'Quicksand',sans-serif] font-semibold text-[#555] text-[14.4px] leading-[14.4px]">{job.type}</div>
      </div>
    </div>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="bg-[#e6f0f9] relative rounded-[100px] w-full shrink-0">
      <div className="flex flex-col items-start pl-[40px] pr-[20px] py-[20px] w-full">
        <div className="text-[20.8px] leading-[24.96px] lg:text-[24px] lg:leading-[28.8px] [font-family:'Quicksand',sans-serif] font-semibold text-[#11593f]">{title}</div>
      </div>
    </div>
  )
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="leading-[25.92px] text-[#252525]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13.5px' }}>
      {children}
    </li>
  )
}

function StructuredJobDetailContent({ nodes }: { nodes: JobDetailNode[] }) {
  return (
    <div className="w-full pl-[20px]" style={{ fontFamily: 'Inter, sans-serif', color: '#252525' }}>
      {nodes.map((node, index) => {
        if (node.type === 'heading') {
          return (
            <p key={index} className="text-[13.2px] leading-[25.92px] font-bold mt-2">
              {node.text}
            </p>
          )
        }

        if (node.type === 'bullets') {
          return (
            <ul key={index} className="list-disc pl-[40px]">
              {node.items.map((item, itemIndex) => (
                <BulletItem key={itemIndex}>{item}</BulletItem>
              ))}
            </ul>
          )
        }

        return (
          <p key={index} className="text-[13.5px] leading-[25.92px]">
            {node.text}
          </p>
        )
      })}
    </div>
  )
}

function DefaultRolesContent() {
  return (
    <div className="w-full pl-[20px]" style={{ fontFamily: 'Inter, sans-serif', color: '#252525' }}>
      <p className="text-[13.5px] leading-[25.92px] mb-0">
        The <strong>General Manager – Sales</strong> will be a strategic business leader responsible for accelerating market share, revenue growth, dealer performance, and brand positioning for a leading 4-wheeler automotive portfolio.
      </p>
      <p className="text-[13.6px] leading-[25.92px] mt-0">
        This role requires a proven senior-level sales strategist with exceptional team-building capability, commercial acumen, and the leadership strength to steer premium brands in a highly competitive, fast-paced automotive market.
      </p>
      <p className="text-[13.5px] leading-[25.92px]">
        The incumbent will play a critical role in shaping go-to-market strategy, strengthening dealer ecosystems, building high-performance sales teams, and delivering sustainable profitability.
      </p>

      <p className="text-[13.2px] leading-[25.92px] font-bold mt-4">Leadership Expectations</p>
      <p className="text-[13.6px] leading-[25.92px]">The ideal candidate will demonstrate:</p>
      <ul className="list-disc pl-[40px]">
        <BulletItem><strong>Brand &amp; Business Ownership P&amp;L Mindset:</strong> Ownership thinking with long-term brand stewardship.</BulletItem>
        <BulletItem><strong>Strategic Vision:</strong> Ability to scale and reposition brands in competitive markets.</BulletItem>
        <BulletItem><strong>Team Builder:</strong> Proven ability to build strong leadership pipelines.</BulletItem>
        <BulletItem><strong>Inspirational Communicator:</strong> Clear, persuasive communication with board, OEM, dealers, and teams.</BulletItem>
        <BulletItem><strong>Operational Discipline:</strong> Ability to deliver results through structured processes.</BulletItem>
        <BulletItem><strong>Customer-Centric Thinking:</strong> Passion for delivering exceptional ownership experience.</BulletItem>
      </ul>

      <p className="text-[12.9px] leading-[25.92px] font-bold mt-4">Key Responsibilities</p>
      <p className="text-[13.1px] leading-[25.92px] font-bold mt-2">1. Strategic Sales Leadership</p>
      <ul className="list-disc pl-[40px]">
        <BulletItem>Develop and execute national sales strategy aligned with corporate growth targets.</BulletItem>
        <BulletItem>Drive volume, revenue, and profitability across new vehicle sales, fleet sales, and strategic accounts.</BulletItem>
        <BulletItem>Lead market penetration strategies across key regions and segments.</BulletItem>
        <BulletItem>Identify new market opportunities, emerging customer segments, and strategic partnerships.</BulletItem>
        <BulletItem>Benchmark performance against global automotive best practices and competitors.</BulletItem>
      </ul>

      <p className="text-[13.3px] leading-[25.92px] font-bold mt-2">2. Dealer Network &amp; Channel Management</p>
      <ul className="list-disc pl-[40px]">
        <BulletItem>Strengthen and expand dealer networks with clear performance metrics and profitability frameworks.</BulletItem>
        <BulletItem>Drive dealer capability development, showroom experience excellence, and customer journey optimization.</BulletItem>
        <BulletItem>Implement structured dealer evaluation, incentive programs, and growth plans.</BulletItem>
        <BulletItem>Build strong long-term relationships with dealer principals and partners.</BulletItem>
      </ul>

      <p className="text-[13.1px] leading-[25.92px] font-bold mt-2">3. Team Building &amp; Leadership Excellence</p>
      <ul className="list-disc pl-[40px]">
        <BulletItem>Build, mentor, and lead a high-performance national sales organization.</BulletItem>
        <BulletItem>Identify talent gaps and develop succession pipelines for future leadership.</BulletItem>
        <BulletItem>Foster a culture of accountability, collaboration, innovation, and customer obsession.</BulletItem>
        <BulletItem>Coach regional managers and frontline teams to exceed targets consistently.</BulletItem>
        <BulletItem>Implement structured performance management, KPIs, and capability-building programs.</BulletItem>
      </ul>

      <p className="text-[13.2px] leading-[25.92px] font-bold mt-2">4. Brand Growth &amp; Market Positioning</p>
      <ul className="list-disc pl-[40px]">
        <BulletItem>Partner with Marketing to drive brand equity, product launches, and campaign strategies.</BulletItem>
        <BulletItem>Strengthen brand positioning in premium, mid-range, and emerging segments.</BulletItem>
        <BulletItem>Monitor customer insights and competitor intelligence to refine brand strategy.</BulletItem>
        <BulletItem>Ensure consistent brand experience across dealerships and digital channels.</BulletItem>
      </ul>

      <p className="text-[13.3px] leading-[25.92px] font-bold mt-2">5. Business &amp; Commercial Acumen</p>
      <ul className="list-disc pl-[40px]">
        <BulletItem>Own sales forecasting, budgeting, pricing strategy, and margin optimization.</BulletItem>
        <BulletItem>Deliver strong P&amp;L performance with disciplined cost and revenue management.</BulletItem>
        <BulletItem>Analyze market data, consumer trends, and product performance for strategic decisions.</BulletItem>
        <BulletItem>Lead fleet and corporate sales strategies to drive large-scale business opportunities.</BulletItem>
      </ul>

      <p className="text-[13.3px] leading-[25.92px] font-bold mt-2">6. Customer &amp; Stakeholder Engagement</p>
      <ul className="list-disc pl-[40px]">
        <BulletItem>Build strong relationships with key corporate clients, financiers, and partners.</BulletItem>
        <BulletItem>Enhance customer experience across the full lifecycle – inquiry to after-sales.</BulletItem>
        <BulletItem>Represent the company in industry forums, OEM partnerships, and key negotiations.</BulletItem>
      </ul>

      <p className="text-[13.2px] leading-[25.92px] font-bold mt-2">7. Operational Excellence</p>
      <ul className="list-disc pl-[40px]">
        <BulletItem>Drive CRM adoption, digital sales platforms, and analytics-driven decision making.</BulletItem>
        <BulletItem>Implement process improvements to increase conversion rates and productivity.</BulletItem>
        <BulletItem>Ensure compliance with regulatory, financial, and OEM standards.</BulletItem>
      </ul>
    </div>
  )
}

function DefaultPreRequisitesContent() {
  return (
    <div className="w-full pl-[20px]" style={{ fontFamily: 'Inter, sans-serif', color: '#252525' }}>
      <p className="text-[13.1px] leading-[25.92px] font-bold">Educational &amp; Professional Qualifications</p>
      <ul className="list-disc pl-[40px]">
        <li className="text-[13.3px] leading-[25.92px]">Bachelor&apos;s Degree / MBA in <strong>Business Administration, Marketing, Engineering, Automotive Management, or a related discipline</strong> from a recognized university.</li>
        <li className="text-[13.4px] leading-[25.92px]">12–18+ years of experience in automotive or related industries.</li>
        <li className="text-[13.6px] leading-[25.92px]">Minimum 5–8 years in senior leadership roles such as:</li>
        <li className="text-[13.7px] leading-[25.92px]">General Manager – Sales</li>
        <li className="text-[13.7px] leading-[25.92px]">National Sales Head</li>
        <li className="text-[13.7px] leading-[25.92px]">Head of Automotive Sales</li>
        <li className="text-[13.7px] leading-[25.92px]">Business Unit Head – Automotive</li>
        <li className="text-[13.5px] leading-[25.92px]">Proven track record of delivering high revenue growth and managing dealer networks in branded 4-wheeler vehicle segments.</li>
        <li className="text-[13.6px] leading-[25.92px]">Strong exposure to after-sales operations, spare parts strategy, and cross-functional automotive leadership preferred</li>
      </ul>
    </div>
  )
}

function FormInput({
  label,
  name,
  type = 'text',
  required = false,
  min,
}: {
  label: string
  name: string
  type?: 'text' | 'email' | 'number'
  required?: boolean
  min?: number
}) {
  return (
    <div className="flex flex-col gap-[15px] py-[15px] w-full">
      <div style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700, fontSize: '17.6px', lineHeight: '19px', color: '#303030' }}>
        {label} {required && <span style={{ color: '#d63637', fontWeight: 400 }}>*</span>}
      </div>
      <div className="relative w-full h-[42.2px] bg-[rgba(255,255,255,0.08)] focus-within:ring-1 focus-within:ring-[#2563eb] focus-within:ring-offset-0">
        <input
          name={name}
          type={type}
          min={min}
          required={required}
          className="w-full h-full bg-transparent px-[14px] py-[10.3px] outline-none text-[#111]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '15.1px', caretColor: '#2563eb' }}
        />
        <div className="absolute bottom-[-0.8px] left-0 right-0 border-b-[0.8px] border-[#37a65e] focus-within:border-[#2563eb]" />
      </div>
    </div>
  )
}

function ApplyForm() {
  return (
    <form className="w-full">
      <div className="flex flex-col md:flex-row w-full gap-0">
        <div className="w-full md:flex-1 px-0 md:px-[10px]"><FormInput label="First Name" name="firstName" required /></div>
        <div className="w-full md:flex-1 px-0 md:px-[10px]"><FormInput label="Last Name" name="lastName" required /></div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-0">
        <div className="w-full md:flex-1 px-0 md:px-[10px]"><FormInput label="Email" name="email" type="email" required /></div>
        <div className="w-full md:flex-1 px-0 md:px-[10px]"><FormInput label="Age" name="age" type="number" min={18} required /></div>
      </div>

      <div className="flex flex-col gap-[15px] pb-[15px] w-full">
        <div style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700, fontSize: '17.6px', lineHeight: '19px', color: '#303030' }}>Current Designation</div>
        <div className="relative w-full h-[42.2px] bg-[rgba(255,255,255,0.08)] focus-within:ring-1 focus-within:ring-[#2563eb] focus-within:ring-offset-0">
          <input
            name="designation"
            type="text"
            className="w-full h-full bg-transparent px-[14px] py-[10.3px] outline-none text-[#111]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '15.1px', caretColor: '#2563eb' }}
          />
          <div className="absolute bottom-[-0.8px] left-0 right-0 border-b-[0.8px] border-[#37a65e]" />
        </div>
      </div>

      <div className="flex flex-col gap-[15.8px] pb-[15px] items-center w-full">
        <div className="w-full"><div style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700, fontSize: '17.6px', lineHeight: '19px', color: '#303030' }}>File Upload</div></div>
        <label className="bg-white flex flex-col items-center justify-center gap-2 p-[20px] rounded-[3px] w-full min-h-[82px] cursor-pointer relative transition-colors focus-within:ring-2 focus-within:ring-[#2563eb]" style={{ border: '1px solid rgba(0,0,0,0.25)' }}>
          <img
            alt="Upload"
            className="w-[30px] h-[30px] object-contain"
            src={withBasePath('/figmaAssets/Component 2.png')}
          />
          <span className="text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14.9px', lineHeight: '24px', color: 'rgba(0,0,0,0.7)' }}>Click or drag a file to this area to upload.</span>
          <input
            name="resume"
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept=".pdf,.doc,.docx"
            aria-label="Upload resume"
          />
        </label>
      </div>

      <div className="pb-[74.4px]">
        <div className="bg-[#f9f9f9] flex h-[75.6px] items-start p-[0.8px] rounded-[3px] w-[301.6px] relative" style={{ border: '1px solid #d3d3d3', boxShadow: '0px 0px 4px 1px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-center px-3 h-full">
            <div className="relative size-[28px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[3000%] left-0 max-w-none top-0 w-[300%]" src={withBasePath('/figmaAssets/card-back-check.png')} />
              </div>
              <div className="absolute h-[30px] left-[-5px] top-0 w-[38px] overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[4200%] left-0 max-w-none top-0 w-full" src={withBasePath('/figmaAssets/card-front-check.png')} />
              </div>
              <div className="absolute left-0 rounded-[2px] size-[27.2px] top-0 bg-white" style={{ border: '1px solid #444746' }} />
            </div>
          </div>
          <div className="flex flex-col items-start min-w-[152px] h-full justify-center">
            <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: 'black' }}>I&apos;m not a robo</p>
          </div>
          <div className="absolute right-0 top-0 h-full flex flex-col items-center justify-center pr-3">
            <div className="flex flex-col gap-[4.4px] items-center w-[58px]">
              <div className="relative size-[32px] overflow-hidden">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={withBasePath('/figmaAssets/div-rc-anchor-logo-img.png')} />
              </div>
              <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '10px', lineHeight: '10px', color: '#555' }}>reCAPTCHA</p>
              <div className="flex gap-1">
                <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#555]" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '8px', lineHeight: 'normal' }}>Privacy</a>
                <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: '8px' }}> - </span>
                <a href="https://www.google.com/intl/en/policies/terms/" target="_blank" rel="noopener noreferrer" className="text-[#555]" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '8px', lineHeight: 'normal' }}>Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="bg-white flex h-[41px] items-center justify-center px-[15.8px] py-px rounded-[100px] w-full relative cursor-pointer" style={{ border: '1px solid #11593f' }}>
        <span style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700, fontSize: '17.6px', lineHeight: '17.6px', color: '#11593f' }}>Submit</span>
      </button>
    </form>
  )
}

function RelatedJobs({ currentSlug }: { currentSlug: string }) {
  const jobs = premiumJobCards.filter((job) => job.slug !== currentSlug).slice(0, 4)

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[91px] py-12 md:py-16">
        <div className="flex flex-col items-start gap-6 w-full">
          <SectionHeader title="Related Jobs" />
          <div className="flex flex-wrap items-center justify-center gap-[30px] md:gap-4 lg:gap-4 w-full">
            {jobs.map((job, index) => (
              <JobCard
                key={job.slug}
                job={job}
                index={index}
                applyHref={`/premium-jobs/${job.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function JobRolesContentBySlug({ slug }: { slug: string }) {
  const details = jobDetailsBySlug[slug]

  if (details?.roles?.length) {
    return <StructuredJobDetailContent nodes={details.roles} />
  }

  return <DefaultRolesContent />
}

function JobPreRequisitesContentBySlug({ slug }: { slug: string }) {
  const details = jobDetailsBySlug[slug]

  if (details?.preRequisites?.length) {
    return <StructuredJobDetailContent nodes={details.preRequisites} />
  }

  return <DefaultPreRequisitesContent />
}

export function PremiumJobApplyPage({ slug }: { slug: string }) {
  const job = getPremiumJobBySlug(slug)

  if (!job) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar bgColor="#0F221B" />
        <div className="pt-32 px-6 text-center">
          <h1 className="[font-family:'Quicksand',sans-serif] text-2xl">Job not found</h1>
          <Link href="/premium-jobs" className="text-[#006763] underline mt-4 inline-block">
            Back to Premium Jobs
          </Link>
        </div>
        <CompanyFooter />
      </main>
    )
  }

  return (
    <main className="relative w-full bg-white min-h-screen">
      <Navbar bgColor="transparent" sticky={false} />

      <HeroSection job={job} />

      <section className="relative w-full z-10 -mt-[50px] md:-mt-[72px]">
        <div className="relative w-full max-w-[1440px] mx-auto px-[23.413px] lg:px-[153.6px] py-8">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-[40px] items-start w-full">
            <div className="flex flex-col gap-5 w-full lg:w-[280px] lg:shrink-0">
              <SidebarSummary job={job} />
              <div>
                <div style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700, fontSize: '19.2px', lineHeight: '19.2px', color: '#11593f' }}>Share job</div>
                <div className="flex gap-4 mt-3 items-center">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://career141.com')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1f7145] hover:bg-[#165a34] flex items-center justify-center transition-colors"
                    title="Share on Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://career141.com')}&text=${encodeURIComponent(`Check out this job: ${job.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1f7145] hover:bg-[#165a34] flex items-center justify-center transition-colors"
                    title="Share on Twitter"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 002.856-3.515 10 10 0 01-2.859 1.97 5 5 0 00-8.622 4.42c0 .39.045.765.14 1.123a14.05 14.05 0 01-10.177-5.148 5 5 0 001.55 6.573 5 5 0 01-2.257-.616c-.054 2.281 1.581 4.415 3.949 4.89a5 5 0 01-2.25.085 5.004 5.004 0 004.659 3.468 10.025 10.025 0 01-6.177 2.13c-.39 0-.779-.023-1.17-.067a14.052 14.052 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A10.025 10.025 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://career141.com')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1f7145] hover:bg-[#165a34] flex items-center justify-center transition-colors"
                    title="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.252-.129.604-.129.957v5.41h-3.553v-9.001h3.413v1.231h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v4.165zM5.337 8.855c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.924 2.065-2.064 2.065zm1.782 11.597H3.555v-9.001h3.564v9.001zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 flex-1 min-w-0">
              <SectionHeader title="Roles &amp; Responsibilities" />
              <JobRolesContentBySlug slug={job.slug} />

              <SectionHeader title="Pre Requisites" />
              <JobPreRequisitesContentBySlug slug={job.slug} />

              <SectionHeader title="Apply now" />
              <div className="pt-[24px] pb-[48px]">
                <ApplyForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedJobs currentSlug={job.slug} />
      <CompanyFooter />
    </main>
  )
}
