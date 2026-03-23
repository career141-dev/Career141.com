'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function CommitmentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Heading and Description */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
              Our commitment is simple:
              <b><br />We listen, understand and prioritize</b>
            </h2>

            <p className="mt-6 text-base text-[#2C3E4E] leading-relaxed" style={{ fontWeight: 400 }}>
              Career141 is a premier executive search and manpower recruitment firm based in Sri Lanka, with operational branches in Singapore, Dubai, and Bangladesh. We specialize in headhunting and placing C-level leaders, senior managers, and mid-level executives across Asia, the Middle East, Africa, Europe, and Australia. Whether you are seeking transformational CEOs, agile country heads, or high-impact functional leaders, our proven executive search methodology connects you with top-tier talent who can drive business growth and innovation in dynamic markets.
            </p>
          </div>

          {/* Right side - Specialty Block with transform */}
          <motion.div
            initial={{ opacity: 0, y: '-27%' }}
            animate={isInView ? { opacity: 1, y: '-27%' } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-[28px] rounded-tr-3xl rounded-bl-3xl lg:mt-24 overflow-hidden"
            style={{ transform: 'translateY(-27%)' }}
          >
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full" data-svg-wrapper>
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 840 413" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M0 36.0004C0 16.1181 16.1178 0.000385266 36 0.000374656L719.743 9.78751e-06C731.266 3.63853e-06 742.093 5.51592 748.866 14.8376L833.123 130.789C837.593 136.94 840 144.348 840 151.951V377C840 396.882 823.882 413 804 413L99.591 413C88.1168 413 77.3299 407.53 70.5493 398.274L6.95835 311.464C2.4373 305.293 0 297.841 0 290.19V36.0004Z" 
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="420" y1="0" x2="420" y2="413" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#07B174" />
                    <stop offset="1" stopColor="#109162" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Content with offset stroke SVG */}
            <div className="relative z-10 p-8 md:p-10 flex items-center justify-center min-h-[200px]">
              {/* SVG Stroke - inset 39px top/bottom, 34px left/right */}
              <div 
                className="absolute inset-0 pointer-events-none" 
                data-svg-wrapper
                style={{ 
                  top: '39px', 
                  left: '34px', 
                  right: '34px', 
                  bottom: '39px' 
                }}
              >
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 840 413" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M0 36.0004C0 16.1181 16.1178 0.000385266 36 0.000374656L719.743 9.78751e-06C731.266 3.63853e-06 742.093 5.51592 748.866 14.8376L833.123 130.789C837.593 136.94 840 144.348 840 151.951V377C840 396.882 823.882 413 804 413L99.591 413C88.1168 413 77.3299 407.53 70.5493 398.274L6.95835 311.464C2.4373 305.293 0 297.841 0 290.19V36.0004Z" 
                    stroke="#3D3D3D" 
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <p className="text-lg md:text-xl font-medium text-white text-center">
                We specialize in turning the recruitment clock back, delivering <b>top-notch talent</b> with <b>appreciable lead times</b> without compromising on quality
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
