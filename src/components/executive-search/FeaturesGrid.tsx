'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Handshake, Globe, Building2, Crown, Users, Compass } from 'lucide-react'

const features = [
  { icon: TrendingUp, title: 'Results-Driven Legacy' },
  { icon: Handshake, title: 'Client-Centric Excellence' },
  { icon: Globe, title: 'Global Visionary' },
  { icon: Building2, title: 'Industry Stewardship' },
  { icon: Crown, title: 'Strategic Leadership' },
  { icon: Users, title: 'Strategic Partnership' },
  { icon: Compass, title: 'Strategic Navigator' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FeaturesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="my-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-[24px] p-6 text-center border border-[#EDF2F7] shadow-[0_8px_20px_rgba(0,0,0,0.02),0_2px_4px_rgba(0,0,0,0.03)] hover:translate-y-[-4px] hover:shadow-[0_20px_30px_-12px_rgba(0,0,0,0.08)] hover:border-[#DCE5EF] transition-all duration-300"
          >
            <feature.icon className="w-10 h-10 text-[#1E6F5C] mx-auto mb-4" style={{ fontSize: '2.4rem' }} />
            <h3 className="font-bold text-[#0F2B3B] text-base">{feature.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
