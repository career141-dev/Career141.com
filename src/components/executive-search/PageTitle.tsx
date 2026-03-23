'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function PageTitle() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="my-3">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-[3.2rem] font-extrabold tracking-[-0.02em] text-[#0A2540] leading-tight"
      >
        Information Technology
      </motion.h1>
    </section>
  )
}
