'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, BookOpen, MessageCircle, ArrowRight } from 'lucide-react'

export function EventsCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="my-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Event Card */}
        <div className="bg-white rounded-[28px] border border-[#e6f0ed] p-8 hover:border-[#caded8] transition-colors">
          <div className="flex items-center gap-2 text-[#173e38] mb-3">
            <Calendar className="w-5 h-5 text-brand-teal" />
            <h3 className="text-xl font-bold">UPCOMING EVENT</h3>
          </div>
          <p className="text-sm text-[#508077] font-medium mb-6">Executive Leadership Summit 2025 · March 28 | NYC</p>
          <p className="text-[#2f5a53] text-sm leading-relaxed mb-6">
            Future-proofing tech leadership: AI, agility & executive presence. Network with 200+ CHROs and VPs of Talent.
          </p>
          <button className="bg-[#1E3A3A] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0f554a] transition-colors inline-flex items-center gap-2">
            REGISTER NOW <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Card */}
        <div className="bg-white rounded-[28px] border border-[#e6f0ed] p-8 hover:border-[#caded8] transition-colors">
          <div className="flex items-center gap-2 text-[#173e38] mb-3">
            <BookOpen className="w-5 h-5 text-brand-teal" />
            <h3 className="text-xl font-bold">INSIGHTS & BLOG</h3>
          </div>
          <p className="text-sm text-[#508077] font-medium mb-6">The new clock: speed vs. precision in executive search</p>
          <p className="text-[#2f5a53] text-sm leading-relaxed mb-6">
            How Career14|20 combines urgency with deep diligence — read our latest research on reducing time-to-hire without losing quality.
          </p>
          <button className="bg-[#eef3f0] text-[#1e5a51] px-6 py-3 rounded-full font-semibold text-sm border border-[#cfe2db] hover:bg-[#e3ebe6] transition-colors inline-flex items-center gap-2">
            EXPLORE BLOG <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Let's Talk Card */}
        <div className="bg-[#0e2f2a] rounded-[28px] p-8 text-white">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-lime-400" />
            <h3 className="text-xl font-bold">Let&apos;s talk</h3>
          </div>
          <p className="text-white/85 text-sm leading-relaxed mb-6">
            Ready to accelerate your executive hiring? Whether you need a transformative CTO, a visionary CFO or a product leader, we are here to deliver your yesterday, today.
          </p>
          <button className="bg-white text-[#0e2f2a] px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            SCHEDULE A CONSULTATION <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  )
}
