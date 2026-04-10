'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Sparkles } from 'lucide-react'

const stats = [
  { value: '15+ years', label: 'Executive search excellence' },
  { value: '380+', label: 'C-suite and VP placements' },
  { value: '97%', label: 'Client recommendation rate' },
]

export function LegacySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="my-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-brand-cream rounded-[48px] p-14 md:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between"
      >
        <div className="lg:w-[55%]">
          <span className="inline-flex items-center gap-2 bg-white text-brand-teal text-sm font-semibold px-5 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Strategic Partnership
          </span>
          <h2 className="font-quicksand text-3xl md:text-4xl font-extrabold text-[#0e3731] mb-5">
            Legacy of impact, track record of excellence
          </h2>
          <p className="text-[#2f5a53] text-base md:text-lg leading-relaxed mb-7">
            The firm&apos;s long-standing legacy is defined by a results-driven approach. Clients have come to expect not just placements, but a track record of successful, impactful placements that have contributed to the success of organizations over the years.
          </p>
          <p className="font-semibold text-[#0e3731] flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            92% of partners report transformative leadership hires - built on trust, transparency and long-term vision.
          </p>
        </div>

        <div className="lg:w-[40%] w-full">
          <div className="bg-white rounded-[32px] p-8 text-center shadow-[0_12px_24px_-12px_rgba(0,0,0,0.05)]">
            {stats.map((stat, index) => (
              <div key={index}>
                {index > 0 && <div className="w-14 h-0.5 bg-[#cbe4de] mx-auto my-5" />}
                <div className="text-[2.8rem] font-extrabold text-brand-teal mb-2">{stat.value}</div>
                <div className="text-[#51706b]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
