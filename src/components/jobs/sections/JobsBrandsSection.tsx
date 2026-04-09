'use client'

import { motion } from 'framer-motion'

const logos = [
  '/images/logos/Artboard-41-2x-1.png',
  '/images/logos/Artboard-33-2x-1.png',
  '/images/logos/Artboard-17-2x-1.png',
  '/images/logos/Artboard-10-2x-1.png',
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

const CARD_WIDTH = 167.36
const CARD_GAP = 20
const CARD_STEP_WIDTH = CARD_WIDTH + CARD_GAP
const TRACK_WIDTH = logos.length * CARD_STEP_WIDTH

function JobsBrandsSectionContent() {
  return (
    <div className="w-full py-25 px-[91.238px]" style={{ marginTop: '0px', position: 'relative', overflow: 'hidden' }}>
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
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10 w-full max-w-[1204.5px] ml-auto mr-0 pr-4 md:pr-0 relative z-10 md:translate-x-8 lg:translate-x-12">
        {/* Left Column - Figma sized */}
        <div className="w-full md:w-[321.19px] flex items-center">
          <div
            className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold text-[#4c4c4c] text-[28px] md:text-[35.2px]"
            style={{
              color: '#4C4C4C',
              fontFamily: 'Quicksand, sans-serif',
              fontSize: '35.2px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '35.2px',
            }}
          >
            <p className="leading-[35.2px] mb-0">Worked with the</p>
            <p className="leading-[35.2px]">best brands</p>
          </div>
        </div>

        {/* Right Column - Figma sized */}
        <div className="w-full md:w-230 overflow-hidden flex items-center" style={{ height: '220px' }}>
          <div className="relative w-full">
            <motion.div 
              className="flex w-max gap-5"
              animate={{
                x: [0, -TRACK_WIDTH]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: logos.length * 1.8,
                  ease: "linear",
                },
              }}
              style={{ willChange: 'transform' }}
            >
              {/* Two identical tracks for seamless chain-loop */}
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={index}
                  className="shrink-0 w-[167.36px] h-[167.36px] bg-white rounded-[18px] border border-[#cfcfcf] flex items-center justify-center p-[18.325px_11.637px]"
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