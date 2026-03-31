'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { withBasePath } from '@/lib/assetPath'

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
      className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden"
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
      <div className="relative z-10 w-full h-full flex items-center">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full flex flex-col justify-center px-4 sm:px-6 lg:px-[91px] py-4 sm:py-6"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Heading */}
          <div className="relative w-full">
            <img src={withBasePath('/images/Vector 20.svg')} alt="" className="absolute hidden lg:block z-10" style={{ height: '400px', width: '600px', filter: 'drop-shadow(0 0 12px rgba(203, 252, 6, 0.8))', left: '91px', top: '-150px' }} />
            <img src={withBasePath('/images/Vector 20.svg')} alt="" className="absolute sm:hidden w-full z-10" style={{ height: '180px', filter: 'drop-shadow(0 0 12px rgba(203, 252, 6, 0.8))', left: '0', top: '-30px' }} />
            <img src={withBasePath('/images/Vector 20.svg')} alt="" className="absolute hidden sm:block lg:hidden w-full z-10" style={{ height: '250px', filter: 'drop-shadow(0 0 12px rgba(203, 252, 6, 0.8))', left: '0', top: '-60px' }} />
            <div className="relative z-20 lg:pl-[91px] flex flex-col pt-16 sm:pt-20 lg:pt-0">
              <nav className="text-gray-300 mb-2 pl-2 sm:pl-4 lg:pl-[60px] text-xs sm:text-sm">
                <Link href="/" className="hover:text-white transition-colors">Career141</Link>
                <span> &gt; </span>
                <span className="text-white">Executive Search</span>
              </nav>
              <h1 className="[font-family:'Open Sans',Helvetica] font-bold text-white text-sm sm:text-lg md:text-2xl lg:text-4xl leading-tight text-left pl-2 sm:pl-4 lg:pl-[60px] mb-2 sm:mb-4 lg:mb-6">
                Global Executive Search <b className="[font-family:'Quicksand',Helvetica] text-sm sm:text-lg md:text-2xl lg:text-4xl" style={{ color: '#CBFC06' }}>&amp; Leadership Recruitment</b>
                <br />by Career141
              </h1>
              <Link 
                href="/contact-us" 
                className="inline-block z-20 bg-[#11593f] hover:bg-[#0e4d34] text-white font-semibold rounded-full transition-colors text-xs sm:text-sm w-[120px] sm:w-[150px] h-[35px] sm:h-[40px] flex items-center justify-center ml-2 sm:ml-4 lg:ml-[60px] mt-2 sm:mt-4 text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
