'use client';

import { withBasePath } from '@/lib/assetPath'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const PIN_POSITIONS = [
  { left: '68.9%', top: '62.7%', label: 'Sri Lanka' },
  { left: '75.1%', top: '65.3%', label: 'Singapore' },
  { left: '68.5%', top: '57.6%', label: 'India' },
  { left: '20.9%', top: '49.8%', label: 'USA' },
  { left: '47.1%', top: '41.7%', label: 'UK' },
  { left: '54.1%', top: '77.6%', label: 'South Africa' },
  { left: '50.2%', top: '42.5%', label: 'Germany' },
  { left: '61.8%', top: '56.2%', label: 'UAE' },
  { left: '61.1%', top: '55.6%', label: 'Qatar' },
  { left: '57.6%', top: '66.3%', label: 'Kenya' },
  { left: '58.2%', top: '62.2%', label: 'Ethiopia' },
  { left: '48.1%', top: '45.2%', label: 'France' },
  { left: '50.8%', top: '47.5%', label: 'Italy' },
  { left: '46.5%', top: '48.6%', label: 'Spain' },
  { left: '62.8%', top: '57.2%', label: 'Oman' },
  { left: '61.0%', top: '47.7%', label: 'Caspian Region' },
  { left: '65.9%', top: '53.4%', label: 'Pakistan' },
  { left: '71.5%', top: '56.3%', label: 'Bangladesh' },
  { left: '81.5%', top: '50.5%', label: 'South Korea' },
  { left: '74.3%', top: '59.5%', label: 'Thailand' },
  { left: '76.6%', top: '64.1%', label: 'Malaysia' },
  { left: '77.8%', top: '66.7%', label: 'Indonesia' },
  { left: '76.3%', top: '60.2%', label: 'Vietnam' },
  { left: '75.4%', top: '60.8%', label: 'Cambodia' },
  { left: '80.1%', top: '60.7%', label: 'Philippines' },
  { left: '84.3%', top: '50.7%', label: 'Japan' },
  { left: '86.0%', top: '53.5%', label: 'Pacific Rim' },
  { left: '83.1%', top: '76.0%', label: 'Australia' },
  { left: '93.3%', top: '83.4%', label: 'New Zealand' },
  { left: '92.1%', top: '68.9%', label: 'Pacific Islands' },
  { left: '20.2%', top: '56.3%', label: 'Mexico' },
  { left: '33.7%', top: '70.0%', label: 'Brazil' },
  { left: '21.7%', top: '39.3%', label: 'Canada' },
  { left: '48.9%', top: '42.0%', label: 'Netherlands' },
]
interface MapPinProps {
  label: string
}

function MapPin({ label }: MapPinProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative cursor-pointer focus:outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Market: ${label}`}
    >
      <span 
        className="relative inline-flex items-center justify-center w-[14px] h-[14px] rounded-full bg-[#006763] shadow-sm transition-colors duration-300"
      >
        <span 
          className={`absolute w-[8px] h-[1.6px] rounded-full transition-colors duration-300 ${isHovered ? 'bg-[#ff0a54]' : 'bg-[#CBFC06]'}`} 
        />
        <span 
          className={`absolute h-[8px] w-[1.6px] rounded-full transition-colors duration-300 ${isHovered ? 'bg-[#ff0a54]' : 'bg-[#CBFC06]'}`} 
        />
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8, x: '-50%' }}
            animate={{ opacity: 1, y: -25, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: -10, scale: 0.8, x: '-50%' }}
            className="absolute left-1/2 -top-1 px-3 py-1.5 bg-white border border-[#eee] rounded shadow-lg z-50 pointer-events-none whitespace-nowrap"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <span className="text-[#ff0a54] text-[13px] font-bold">{label}</span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-r border-[#eee] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Increased from 0.1 for a slower sequence
    },
  },
}

const markerVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,  // Reduced from 260 for slower motion
      damping: 20,    // Maintained for smoothness
      mass: 1,
    },
  },
}

export function GlobalReachSubsection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section className="hidden md:block w-full bg-white py-10 lg:py-[60px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[91px]">
        <div style={{ maxWidth: '1905px', width: '737.61px', margin: '0 auto 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <h2
                style={{
                  textAlign: 'center',
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '38.4px',
                  lineHeight: '46px',
                  display: 'inline-block'
                }}
                data-testid="text-global-reach-heading"
              >
                <span style={{ color: '#000000', fontWeight: 400 }}>Access a pool of talent with our </span>
                <span style={{ color: '#ff0a54', fontWeight: 700 }}>global reach</span>
              </h2>
            </div>
          </div>
        </div>

        <motion.div 
          ref={containerRef}
          className="relative w-full overflow-x-auto" 
          data-testid="map-world-reach" 
          style={{ minWidth: 0 }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="relative" style={{ minWidth: 560 }}>
            <img src={withBasePath('/figmaAssets/world-map.png')} alt="World map" className="w-full h-auto block" />

            {PIN_POSITIONS.map((pin, i) => (
              <motion.div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: pin.left, top: pin.top }}
                variants={markerVariants}
                data-testid={`img-map-pin-${i}`}
              >
                <MapPin label={pin.label} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
