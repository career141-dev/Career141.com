'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { id: 1, text: 'Gathering in-depth understanding & insight' },
  { id: 2, text: 'Discussion of the role with the team' },
  { id: 3, text: 'Candidate identification & market research' },
  { id: 4, text: 'Set the search & networking strategy' },
  { id: 5, text: 'Screen, evaluate & qualify candidates' },
  { id: 6, text: 'Pitching the role, scope & the company' },
  { id: 7, text: 'Introduction of the candidate to the client' },
  { id: 8, text: 'Organizing & following up on interview sessions' },
  { id: 9, text: 'Negotiating selection of candidate' },
  { id: 10, text: 'Offering, closing, transition & onboarding' }
]

export function ProcessFlowSection() {
  const row1 = steps.slice(0, 5)
  const row2 = steps.slice(5, 10)

  return (
    <section className="bg-white py-24 px-4 md:px-12 lg:px-16 overflow-hidden">
      {/* Mobile Title */}
      <div className="md:hidden text-center mb-8">
        <h2 className="[font-family:'Quicksand',Helvetica] text-2xl sm:text-3xl font-bold uppercase tracking-wide">
          <span className="text-black">How it </span>
          <span className="text-[#11593F]">Work</span>
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto">
        {/* Mobile: Bullet point list */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#11593F] flex items-center justify-center text-white font-bold text-sm shrink-0">
                {step.id}
              </div>
              <p className="[font-family:'Quicksand',Helvetica] text-xs sm:text-[13px] font-semibold text-[#11593F] leading-snug pt-0.5">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden md:flex flex-col gap-48">
          {/* Row 1: 1 -> 5 */}
          <div className="flex flex-col md:flex-row items-center justify-between relative gap-12 md:gap-4">
            {row1.map((step, index) => (
              <div key={step.id} className="flex-1 flex flex-col items-center md:items-start group relative w-full md:w-auto">
                {/* Description atop the number */}
                <div className="h-[65px] flex items-end justify-start mb-6 px-2 w-full md:max-w-[180px]">
                  <p className="[font-family:'Quicksand',Helvetica] text-xs sm:text-[13px] font-semibold text-[#11593F] text-left leading-snug">
                    {step.text}
                  </p>
                </div>

                {/* Circle with Number */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="ml-2 sm:ml-4 w-11 h-11 rounded-full bg-[#11593F] flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10 hover:scale-110 transition-transform"
                >
                  {step.id}
                </motion.div>

                {/* Connector to Right */}
                {index < row1.length - 1 && (
                  <div className="hidden md:block absolute top-[111px] left-[80px] right-[-40%] z-0">
                    <img src="/images/line.svg" alt="" className="w-[200px] h-auto" />
                  </div>
                )}

                {/* Connector to Next Row (5 -> 6) */}
                {step.id === 5 && (
                  <div className="hidden md:block absolute top-[180px] left-[38px] rotate-90 origin-top-left z-0">
                    <img src="/images/line.svg" alt="" className="w-[1000px] h-auto" style={{ width: '600px' }} />
                  </div>
                )}

                {/* Mobile Connector Down */}
                <div className="md:hidden mt-4">
                   <svg className="h-8 w-4 text-[#11593F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Title between the rows */}
          <div className="flex justify-start items-center h-8 my-[-40px] pl-4 sm:pl-6 md:pl-8 lg:pl-4">
            <h2 className="[font-family:'Quicksand',Helvetica] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
              <span className="text-black">How it </span>
              <span className="text-[#11593F]">Work</span>
            </h2>
          </div>

          {/* Row 2: 6 -> 10 (Right to Left) */}
          <div className="flex flex-col md:flex-row-reverse items-start justify-between relative gap-12 md:gap-4 mt-4 md:-mt-8">
            {row2.map((step, index) => (
              <div key={step.id} className="flex-1 flex flex-col items-center md:items-start group relative w-full md:w-auto">
                {/* Circle with Number */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (4 - index) * 0.1 }}
                  className="ml-2 sm:ml-4 w-11 h-11 rounded-full bg-[#11593F] flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10 hover:scale-110 transition-transform"
                >
                  {step.id}
                </motion.div>

                {/* Description below the number */}
                <div className="h-[65px] flex items-start justify-start mt-6 px-2 w-full md:max-w-[180px]">
                  <p className="[font-family:'Quicksand',Helvetica] text-xs sm:text-[13px] font-semibold text-[#11593F] text-left leading-snug">
                    {step.text}
                  </p>
                </div>

                {/* Connector to Left (mirrored from Row 1) */}
                {index < row2.length - 1 && (
                  <div className="hidden md:block absolute top-[22px] left-[-205px] z-0 rotate-180">
                    <img src="/images/line.svg" alt="" className="w-[200px] h-auto" />
                  </div>
                )}

                {/* Mobile Connector Down */}
                {step.id < 10 && (
                  <div className="md:hidden mt-4">
                     <svg className="h-8 w-4 text-[#11593F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
