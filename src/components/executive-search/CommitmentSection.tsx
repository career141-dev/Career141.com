'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { withBasePath } from '@/lib/assetPath'

export function CommitmentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="-mt-4 sm:-mt-6 md:-mt-8 lg:-mt-12 pt-[calc(1.5rem+20px)] sm:pt-[calc(2rem+30px)] md:pt-[calc(3rem+40px)] lg:pt-[calc(4rem+50px)] bg-white px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
          <div className="w-full order-2 lg:order-1">
            <h2 className="[font-family:'Quicksand',Helvetica] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#11593F]">
              Our commitment is simple:
              <b className="font-bold"><br />We listen, understand and prioritize</b>
            </h2>

            <p className="[font-family:'General Sans',Helvetica] mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-[#2C3E4E] leading-relaxed" style={{ fontWeight: 400 }}>
              In the fast-paced world of recruitment, we get it – your needs are urgent, and the clock is ticking louder than ever. At Career141, we thrive on the challenge of meeting your demands with a sense of urgency that matches your "we wanted it filled like yesterday" mindset.
            </p>
          </div>

          <div className="relative w-full flex justify-center lg:justify-start mt-8 sm:mt-12 lg:mt-[-180px] order-1 lg:order-2">
            <img src={withBasePath('/images/signature.svg')} alt="Signature" className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[800px] h-auto" style={{ marginTop: '-50px', maxWidth: '100%' }} />
            <p className="[font-family:'Quicksand',Helvetica] absolute z-10 text-xs sm:text-sm md:text-base lg:text-xl font-medium text-white text-center w-full px-4 sm:px-6 md:px-8" style={{ top: '20%', left: '50%', transform: 'translate(-50%, 0)', marginTop: '-50px' }}>
              We specialize in turning the recruitment clock back, delivering <b>top-notch talent</b> with <b>appreciable lead times</b> without compromising on quality
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
