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
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-48">
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
                  <div className="hidden md:block absolute top-[113px] left-[calc(0%+45px)] right-[calc(-100%+80px)] z-0">
                    <svg className="w-full h-8 overflow-visible">
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#11593F" />
                        </marker>
                      </defs>
                      <line x1="0" y1="16" x2="100%" y2="16" stroke="#11593F" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowhead)" />
                    </svg>
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

            {/* Straight Downward connector from 5 to 6 at the far right edge */}
            <div className="hidden md:block absolute -bottom-36 right-[24px]">
                <svg className="w-8 h-32 overflow-visible">
                   <path 
                     d="M 16 0 L 16 120" 
                     stroke="#11593F" 
                     strokeWidth="2" 
                     strokeDasharray="6 4" 
                     fill="none" 
                     markerEnd="url(#arrowhead)"
                   />
                </svg>
            </div>
          </div>

          {/* Title between the rows */}
          <div className="flex justify-start items-center h-8 my-[-40px] pl-4 sm:pl-6 md:pl-8 lg:pl-4">
            <h2 className="[font-family:'Quicksand',Helvetica] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
              <span className="text-black">How it </span>
              <span className="text-[#11593F]">Work</span>
            </h2>
          </div>

          {/* Row 2: 6 -> 10 (Right to Left) */}
          <div className="flex flex-col md:flex-row-reverse items-start justify-between relative gap-12 md:gap-4 mt-8 md:mt-0">
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

                {/* Connector to Left (Pointing to higher numbers) */}
                {index < row2.length - 1 && (
                  <div className="hidden md:block absolute top-[21px] right-[calc(0%+45px)] left-[calc(-100%+80px)] z-0">
                    <svg className="w-full h-8 overflow-visible">
                      <line x1="100%" y1="0" x2="0" y2="0" stroke="#11593F" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowhead)" />
                    </svg>
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
