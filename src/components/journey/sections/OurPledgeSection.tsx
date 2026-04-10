'use client'

import { useState, useCallback } from 'react'
import { withBasePath } from '@/lib/assetPath'

const pledgeSlides = [
  {
    title: 'Clients',
    text: 'Service of Excellence and Confidentiality: Experience a service of excellence that surpasses mere recruitment, backed by unparalleled professionalism. Our commitment to confidentiality ensures that your corporate recruitment strategies remain secure within defined boundaries.',
    dividerColor: '#fe8d2b',
    photo: withBasePath('/figmaAssets/pledge-photo-clients.png'),
  },
  {
    title: 'Candidates',
    text: 'Career Growth and Guidance: We are dedicated to empowering candidates with personalized career guidance, connecting them with opportunities that align with their aspirations and potential for long-term professional growth.',
    dividerColor: '#ff0a54',
    photo: withBasePath('/figmaAssets/pledge-photo-clients.png'),
  },
  {
    title: 'Partners',
    text: 'Collaborative Excellence: We build strong, enduring partnerships founded on mutual respect, transparency, and a shared commitment to delivering outstanding recruitment outcomes across global markets.',
    dividerColor: '#01c5c4',
    photo: withBasePath('/figmaAssets/pledge-photo-clients.png'),
  },
]

export function OurPledgeSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % pledgeSlides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + pledgeSlides.length) % pledgeSlides.length)
  }, [])

  return (
    <section
      className="relative w-full bg-white overflow-hidden py-[54.65px] md:py-[90px] md:pb-[60px]"
      data-testid="section-pledge"
    >
      <div className="relative w-full max-w-[1417px] mx-auto md:pr-[200px]">
        {/* Title */}
        <div className="flex justify-center md:justify-end mb-[15.6px] md:mb-4 px-[15px] md:px-0 max-w-[1217px] mx-auto">
          <h2
            className="font-[Quicksand] font-bold text-[20px] leading-[20px] md:text-[clamp(28px,2.5vw,35.2px)] md:leading-[1.1] text-[#444] text-center md:text-left"
            data-testid="text-pledge-title"
          >
            Our Pledge
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden h-auto md:h-[clamp(400px,42vw,570.75px)] pb-[17px] md:pb-0">
        <div
          className="flex transition-transform duration-700 ease-in-out h-[475.6px] md:h-[clamp(380px,40vw,552.75px)]"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {pledgeSlides.map((slide, i) => (
            <div key={i} className="flex-shrink-0 w-full flex justify-center" data-testid={`pledge-slide-${i}`}>
              <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-[390px] md:max-w-[1217px] px-0 md:px-5">
                <div className="flex flex-col md:flex-row items-center md:items-start w-full relative">
                  
                  {/* Image */}
                  <div
                    className="relative flex-shrink-0 w-full md:w-[clamp(280px,43vw,621.74px)] aspect-[390/240.9] md:aspect-[34/21]"
                  >
                    <img
                      src={slide.photo}
                      alt="Professional consultation"
                      className="w-full h-full object-cover"
                      data-testid={`img-pledge-photo-${i}`}
                    />
                  </div>

                  {/* Text Panel */}
                  <div
                    className="relative flex-shrink-0 z-[2] w-[390px] max-w-[390px] md:max-w-none md:w-[clamp(320px,52.5vw,716.97px)] pl-[15.6px] md:pl-0 mt-[-1px] md:mt-[clamp(80px,10.7vw,146px)] ml-0 md:ml-[clamp(-40px,-2.5vw,-20px)] pr-[15.6px] md:pr-0"
                  >
                    <div
                      className="relative overflow-hidden pt-[31.2px] pr-[46.8px] pb-[31.2px] pl-[31.2px] md:pt-[clamp(40px,5.3vw,73px)] md:pr-[clamp(50px,7.1vw,97.35px)] md:pb-[clamp(60px,8.9vw,121.7px)] md:pl-[clamp(50px,7.1vw,97.35px)]"
                      style={{
                        backgroundImage: `url(${withBasePath('/figmaAssets/pledge-panel-bg.png')})`,
                        backgroundSize: '100% 104.306%',
                        backgroundPosition: '0 -11px',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      {/* Only for desktop layout spacing */}
                      <div className="hidden md:block h-[32px]" />

                      <div className="flex flex-col items-start w-full">
                        <div className="flex flex-col items-center md:items-start w-full">
                          <span
                            className="font-[Quicksand] font-semibold text-[25.6px] leading-[25.6px] md:text-[clamp(22px,2.3vw,32px)] md:leading-[32px] text-white text-center md:text-left"
                            data-testid={`text-pledge-slide-title-${i}`}
                          >
                            {slide.title}
                          </span>
                        </div>
                      </div>

                      <div
                        className="flex w-full pt-[12px] pb-[12px] md:px-[clamp(100px,15.3vw,208.9px)]"
                      >
                        <span className="flex-1 w-full" style={{ borderTop: `1.6px solid ${slide.dividerColor}` }} />
                      </div>

                      <div className="w-full pb-[14.4px]">
                        <p
                          className="font-[Inter] font-normal text-[12.2px] leading-[19.2px] md:text-[clamp(13px,1.13vw,15.4px)] md:leading-[24px] text-white"
                          data-testid={`text-pledge-slide-text-${i}`}
                        >
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots (Absolute positioned inside carousel area in Figma) */}
        <div className="flex md:hidden absolute bottom-[10px] left-1/2 -translate-x-[calc(50%-100px)] items-center gap-[12px] px-[6px]">
          {pledgeSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 w-[7px] h-[7px] rounded-[3.5px] bg-[#11593f] border-none cursor-pointer p-0"
              style={{
                opacity: i === current ? 1 : 0.2,
              }}
              data-testid={`pledge-dot-mobile-${i}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Controls Container (Desktop: dots + arrows, Mobile: strictly arrows with 100px gap) */}
      <div className="flex flex-col md:flex-row items-center md:justify-start justify-center max-w-[1217px] mx-auto mt-[60px] md:mt-3 px-5 md:px-5">
        
        {/* Desktop Pagination Dots */}
        <div className="hidden md:flex items-center gap-[12px] md:gap-2 mr-6">
          {pledgeSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 md:w-[10px] md:h-[10px] rounded-full bg-[#11593f] border-none cursor-pointer p-0"
              style={{
                opacity: i === current ? 1 : 0.4,
              }}
              data-testid={`pledge-dot-desktop-${i}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-[100px] md:gap-1">
          <button
            onClick={prev}
            className="flex items-center justify-center hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-[15.2px_24px_16px] md:p-0 md:w-[66px] md:h-[50px] rounded-[3px] md:rounded-none"
            data-testid="pledge-prev"
            aria-label="Previous pledge"
          >
            {/* Desktop SVG hidden on mobile */}
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="hidden md:block">
              <path d="M18 6H3.82L8.42 1.4L7 0L0 7L7 14L8.42 12.6L3.82 8H18V6Z" fill="black" />
            </svg>
            {/* Mobile SVG hidden on desktop */}
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
              <path d="M7.08398 15.6168L1.45898 9.9918C1.23633 9.78086 1.125 9.51719 1.125 9.20078C1.125 8.88437 1.23633 8.6207 1.45898 8.40977L7.08398 2.78477C7.30664 2.56211 7.57324 2.45078 7.88379 2.45078C8.19434 2.45078 8.45508 2.56211 8.66602 2.78477C8.88867 3.00742 9 3.27402 9 3.58457C9 3.89512 8.88867 4.15586 8.66602 4.3668L4.95703 8.07578H15.75C16.0547 8.07578 16.3184 8.18711 16.541 8.40977C16.7637 8.63242 16.875 8.89609 16.875 9.20078C16.875 9.50547 16.7637 9.76914 16.541 9.9918C16.3184 10.2145 16.0547 10.3258 15.75 10.3258H4.95703L8.66602 14.0348C8.7832 14.1402 8.86816 14.2633 8.9209 14.4039C8.97363 14.5445 9 14.6852 9 14.8258C9 14.9664 8.97363 15.107 8.9209 15.2477C8.86816 15.3883 8.7832 15.5113 8.66602 15.6168C8.44336 15.8395 8.17676 15.9508 7.86621 15.9508C7.55566 15.9508 7.29492 15.8395 7.08398 15.6168Z" fill="black" />
            </svg>
          </button>
          
          <button
            onClick={next}
            className="flex items-center justify-center hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-[15.2px_24px_16px] md:p-0 md:w-[66px] md:h-[50px] rounded-[3px] md:rounded-none"
            data-testid="pledge-next"
            aria-label="Next pledge"
          >
            {/* Desktop SVG hidden on mobile */}
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="hidden md:block">
              <path d="M0 8H14.18L9.58 12.6L11 14L18 7L11 0L9.58 1.4L14.18 6H0V8Z" fill="black" />
            </svg>
            {/* Mobile SVG hidden on desktop */}
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
              <path d="M10.916 15.6168L16.541 9.9918C16.7637 9.78086 16.875 9.51719 16.875 9.20078C16.875 8.88437 16.7637 8.6207 16.541 8.40977L10.916 2.78477C10.6934 2.56211 10.4268 2.45078 10.1162 2.45078C9.80566 2.45078 9.54492 2.56211 9.33398 2.78477C9.11133 3.00742 9 3.27402 9 3.58457C9 3.89512 9.11133 4.15586 9.33398 4.3668L13.043 8.07578H2.25C1.94531 8.07578 1.68164 8.18711 1.45898 8.40977C1.23633 8.63242 1.125 8.89609 1.125 9.20078C1.125 9.50547 1.23633 9.76914 1.45898 9.9918C1.68164 10.2145 1.94531 10.3258 2.25 10.3258H13.043L9.33398 14.0348C9.2168 14.1402 9.13184 14.2633 9.0791 14.4039C9.02637 14.5445 9 14.6852 9 14.8258C9 14.9664 9.02637 15.107 9.0791 15.2477C9.13184 15.3883 9.2168 15.5113 9.33398 15.6168C9.55664 15.8395 9.82324 15.9508 10.1338 15.9508C10.4443 15.9508 10.7051 15.8395 10.916 15.6168Z" fill="black" />
            </svg>
          </button>
        </div>
        
      </div>
    </section>
  )
}
