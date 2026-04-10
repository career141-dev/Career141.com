'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target } from 'lucide-react'

export function QuoteBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="my-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-[#FEFAF0] rounded-[28px] p-8 md:p-10 text-center"
      >
        <p className="text-xl md:text-2xl font-medium text-[#4b3b1a] flex items-center justify-center gap-3">
          <Target className="w-6 h-6 text-brand-teal" />
          "We don&apos;t just fill roles - we architect leadership futures. Premium jobs demand premium precision."
        </p>
        <p className="mt-4 text-[#6f6a44] font-medium">
          - Career14|20 Executive Search Team
        </p>
      </motion.div>
    </section>
  )
}
