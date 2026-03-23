'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function CommitmentBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="my-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-[#F8FAFC] border-l-[6px] border-l-[#1E6F5C] rounded-[28px] p-8 lg:p-10"
      >
        <h2 className="text-xl lg:text-[1.8rem] font-bold text-[#0F2B3B] mb-1">
          Our commitment is simple
        </h2>
        <h2 className="text-xl lg:text-[1.8rem] font-bold text-[#1E6F5C] block mt-1">
          Your Yesterday is Our Today!
        </h2>
        <p className="mt-5 text-base text-[#2C3E4E] leading-relaxed max-w-[85%]">
          In the fast-paced world of recruitment, we get it - your needs are urgent, and the clock is ticking louder than ever. At Career144, we thrive on the challenge of meeting your demands with a sense of urgency that matches your "we wanted it filled like yesterday" mindset.
        </p>
      </motion.div>
    </section>
  )
}
