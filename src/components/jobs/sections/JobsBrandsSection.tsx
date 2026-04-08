'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const logos = [
  '/images/logos/Artboard 41@2x 1.png',
  '/images/logos/Artboard 33@2x 1.png',
  '/images/logos/Artboard 17@2x 1.png',
  '/images/logos/Artboard 10@2x 1.png',
  '/images/logos/Aqua-Dynamics-Official-Logo-1.webp',
  '/images/logos/9-Trelleborg.png',
  '/images/logos/8-Finlays.png',
  '/images/logos/7-Hemas.png',
  '/images/logos/6-Hayleys.png',
  '/images/logos/5-Fonterra.png',
  '/images/logos/32-Inbay.png',
  '/images/logos/31-Inivos.png',
  '/images/logos/28-Dialog.png',
  '/images/logos/16-HM.png',
  '/images/logos/15-MS.png',
  '/images/logos/14-Aeturnum.png',
  '/images/logos/13-AE.png',
  '/images/logos/12-MAS.png',
  '/images/logos/11-Hirdaramani.png',
  '/images/logos/10-Brandix.png',
]

function JobsBrandsSectionContent() {
  return (
    <div className="w-full py-[100px] px-[91.238px]" style={{ marginTop: '0px', position: 'relative', overflow: 'hidden' }}>
      {/* Background image */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/jobs/tube.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 130px',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-[40px] w-full max-w-[1204.5px] mx-auto pr-4 md:pr-0 relative z-10">
        {/* Left Column - Smaller */}
        <div className="w-full md:w-[30%] flex items-center">
          <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold text-[#4c4c4c] text-[28px] md:text-[35.2px]">
            <p className="leading-[35.2px] mb-0">Worked with the</p>
            <p className="leading-[35.2px]">best brands</p>
          </div>
        </div>

        {/* Right Column - Larger with Auto-scrolling Carousel */}
        <div className="w-[95%] md:w-[70%] overflow-hidden flex items-center" style={{ height: '220px' }}>
          <div className="relative">
            <motion.div 
              className="flex gap-[20px]"
              animate={{
                x: [0, -((logos.length / 2) * 200)]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: logos.length * 2,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[180px] h-[120px] bg-white rounded-[20px] flex items-center justify-center p-4 shadow-md"
                >
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function JobsBrandsSection() {
  return (
    <div className="w-full bg-white">
      <JobsBrandsSectionContent />
    </div>
  )
}