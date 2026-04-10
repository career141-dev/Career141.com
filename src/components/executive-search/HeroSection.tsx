'use client'

import Image from 'next/image'
import Link from 'next/link'
import { withBasePath } from '@/lib/assetPath'

export function HeroSection() {
  return (
    <section 
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
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-[91px] py-4 sm:py-6">
          {/* Container */}
          <div className="relative w-full h-full">
            {/* Layer 1: Vector 20 - Bottom */}
            <img 
              src={withBasePath('/images/Vector-20.svg')} 
              alt="" 
              className="absolute left-0 -bottom-4 sm:-bottom-24 lg:-bottom-30 h-[120px] sm:h-[280px] lg:h-[370px] w-auto sm:w-full lg:w-[570px] z-0" 
              style={{ filter: 'drop-shadow(0 0 12px rgba(203, 252, 6, 0.8))' }}
              loading="lazy"
              decoding="async"
            />
            
            {/* Layer 2 & 3: Text & Button - Top */}
            <div className="relative z-10 flex flex-col items-start pt-8 sm:pt-10 lg:pt-2 sm:pl-4 lg:pl-8">
              <nav className="text-gray-300 mb-2 text-xs sm:text-sm">
                <Link href="/" className="hover:text-white transition-colors">Career141</Link>
                <span> &gt; </span>
                <span className="text-white">Executive Search</span>
              </nav>
              <h1 className="[font-family:'Open Sans',Helvetica] font-bold text-white text-sm sm:text-lg md:text-2xl lg:text-4xl leading-tight text-left mb-2 sm:mb-4 lg:mb-6 pl-4 lg:pl-0">
                Global Executive Search <b className="[font-family:'Quicksand',Helvetica] text-sm sm:text-lg md:text-2xl lg:text-4xl" style={{ color: '#CBFC06' }}>&amp; Leadership Recruitment</b>
                <br />by Career141
              </h1>
              
              {/* Button - Under heading */}
              <Link 
                href="/contact-us" 
                className="bg-[#11593f] hover:bg-[#0e4d34] text-white font-semibold rounded-full transition-colors text-xs w-[100px] h-[30px] flex items-center justify-center mt-2 ml-4 sm:ml-0"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}