'use client'

import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common'
import { MeetingSchedulerSubsection } from '@/components/home/sections/MeetingSchedulerSubsection'
import { withBasePath } from '@/lib/assetPath'

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Navbar bgColor="#0F221B" />
      <section className="w-full py-16 md:py-24 bg-white min-h-[60vh] flex items-center justify-center">
          <div className="max-w-[1200px] mx-auto px-4 text-center pt-16">
          <h1 style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '1.4em', fontWeight: 600, color: '#37A65E' }}>
            Case Studies
          </h1>
          <p className="[font-family:'Quicksand',Sans-serif] text-gray-600 text-lg">
            Sri Lankan, Global Recruitment Success Stories Across 25+ Countries | Case Studies by Career141
          </p>
          <div className="mx-auto mt-8 bg-white rounded-[50px] border border-gray-300 flex items-center justify-between max-w-4xl overflow-hidden">
            <div className="text-left p-6">
              <p className="[font-family:'Quicksand',Sans-serif] text-[#531590] text-sm font-bold mb-2">Hospitality | Clients</p>
              <p style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '2em', lineHeight: '1.3em', color: '#626262', fontWeight: 700 }}>Overcoming Recruitment Challenges<br />in the Climate Tech Sector</p>
            </div>
            <img
              src={withBasePath('/images/Case-Studies/csimg.png')}
              alt=""
              className="h-full object-cover"
              style={{ width: 'auto', maxWidth: '50%' }}
            />
          </div>

          <div className="mx-auto mt-8 bg-white rounded-[50px] border border-gray-300 flex items-center justify-between max-w-4xl overflow-hidden flex-row-reverse">
            <div className="text-left p-6">
              <p className="[font-family:'Quicksand',Sans-serif] text-[#01C5C4] text-sm font-bold mb-2">Finance | Clients</p>
              <p style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '2em', lineHeight: '1.3em', color: '#626262', fontWeight: 700 }}>Overcoming Recruitment Challenges in the Climate Tech Sector</p>
            </div>
            <img
              src={withBasePath('/images/Case-Studies/csimg2.png')}
              alt=""
              className="h-full object-cover"
              style={{ width: 'auto', maxWidth: '50%' }}
            />
          </div>

          <div className="mx-auto mt-8 bg-white rounded-[50px] border border-gray-300 flex items-center justify-between max-w-4xl overflow-hidden">
            <div className="text-left p-6">
              <p className="[font-family:'Quicksand',Sans-serif] text-[#531590] text-sm font-bold mb-2">Shipping & Freight | Clients</p>
              <p style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '2em', lineHeight: '1.3em', color: '#626262', fontWeight: 700 }}>Global Talent Acquisition<br />for Maritime Industry</p>
            </div>
            <img
              src={withBasePath('/images/Case-Studies/csimg.png')}
              alt=""
              className="h-full object-cover"
              style={{ width: 'auto', maxWidth: '50%' }}
            />
          </div>

        </div>
      </section>

      <MeetingSchedulerSubsection />

      <CompanyFooter />
    </main>
  )
}
