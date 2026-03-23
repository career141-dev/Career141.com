'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function HeroSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-50px' })

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[650px] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-img.png"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Breadcrumb */}
          <nav className="text-gray-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Career141</Link>
            <span> &gt; </span>
            <span className="text-white">Executive Search</span>
          </nav>

          {/* Heading */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Global Executive Search <b style={{ color: '#CBFC06' }}>&amp; Leadership Recruitment</b>
            <br />by Career141
          </h1>

          {/* Get In Touch Button */}
          <Link 
            href="/contact-us" 
            className="inline-block mt-8 bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
