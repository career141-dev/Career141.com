'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles } from 'lucide-react'

export function SpecialtyBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-[#EEF4F1] rounded-[28px] p-9 lg:p-10 text-center"
      >
        <p className="text-lg lg:text-[1.25rem] font-medium text-[#1A4A3F] max-w-[860px] mx-auto leading-relaxed flex items-center justify-center gap-3">
          <Sparkles className="w-5 h-5 text-[#1E6F5C] flex-shrink-0" />
          We specialize in turning the recruitment clock back, delivering top-notch talent with appreciable lead times without compromising on quality
        </p>
      </motion.div>
    </section>
  )
}
