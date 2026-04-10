'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function StrategicSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="my-5 pt-8 border-t border-[#EEF2F6]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#0F2B3B] mb-5 tracking-[-0.02em]">
          Strategic Partnership
        </h2>
        <p className="text-base text-[#2C3E4E] leading-relaxed max-w-[90%]">
          The firm&apos;s long-standing legacy is defined by a results-driven approach. Clients have come to expect not just placements, but a track record of successful, impactful placements that have contributed to the success of organizations over the years.
        </p>
      </motion.div>
    </section>
  )
}
