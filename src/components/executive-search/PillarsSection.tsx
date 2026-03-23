'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, Globe, Building2, Target, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'Data-led recruitment with measurable impact and speed.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Tailored strategies built around your unique leadership needs.',
  },
  {
    icon: Globe,
    title: 'Global',
    description: 'Cross-border talent acquisition, local market intelligence.',
  },
  {
    icon: Building2,
    title: 'Industry Legacy',
    description: 'Decades of networks in tech, finance and executive domains.',
  },
  {
    icon: Target,
    title: 'Strategic Navigator',
    description: 'Agile search mapping future C-suite requirements.',
  },
  {
    icon: Sparkles,
    title: 'Visionary Partnership',
    description: 'Beyond placement - we become your talent strategy ally.',
  },
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

export function PillarsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="my-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-4"
      >
        <h2 className="font-quicksand text-3xl md:text-4xl font-bold text-[#102b27] mb-4">
          Driven by excellence, defined by legacy
        </h2>
        <p className="text-[#51706b] max-w-xl mx-auto mb-12">
          Our strategic pillars power every search - from global mandates to visionary leadership placements.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-[28px] p-7 text-center shadow-[0_10px_25px_-8px_rgba(0,0,0,0.03)] border border-[#eaf1ef] hover:border-[#caded8] hover:shadow-[0_20px_30px_-12px_rgba(26,68,58,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-mint mx-auto mb-5">
              <pillar.icon className="w-6 h-6 text-brand-teal" />
            </div>
            <h4 className="font-quicksand text-xl font-bold text-[#1e443f] mb-3">{pillar.title}</h4>
            <p className="text-sm text-[#4a6a64] leading-relaxed">{pillar.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
