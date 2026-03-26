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
      className="relative w-full bg-white overflow-hidden"
      style={{ padding: '90px 0 60px' }}
      data-testid="section-pledge"
    >
      <div className="relative w-full" style={{ maxWidth: 1417, margin: '0 auto', paddingRight: 200 }}>
        <div className="flex justify-end mb-4" style={{ maxWidth: 1217 }}>
          <h2
            style={{
              fontFamily: "'Quicksand', Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(28px, 2.5vw, 35.2px)',
              lineHeight: '1.1',
              color: '#444444',
            }}
            data-testid="text-pledge-title"
          >
            Our Pledge
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(400px, 42vw, 570.75px)' }}>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            height: 'clamp(380px, 40vw, 552.75px)',
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {pledgeSlides.map((slide, i) => (
            <div key={i} className="flex-shrink-0 w-full flex justify-center" data-testid={`pledge-slide-${i}`}>
              <div className="flex items-start w-full max-w-[1217px] px-5">
                <div className="flex items-start w-full relative">
                  <div
                    className="relative flex-shrink-0"
                    style={{
                      width: 'clamp(280px, 43vw, 621.74px)',
                      aspectRatio: '34/21',
                    }}
                  >
                    <img
                      src={slide.photo}
                      alt="Professional consultation"
                      className="w-full h-full object-cover"
                      data-testid={`img-pledge-photo-${i}`}
                    />
                  </div>

                  <div
                    className="relative flex-shrink-0 z-[2]"
                    style={{
                      marginTop: 'clamp(80px, 10.7vw, 146px)',
                      marginLeft: 'clamp(-40px, -2.5vw, -20px)',
                      width: 'clamp(320px, 52.5vw, 716.97px)',
                    }}
                  >
                    <div
                      className="relative overflow-hidden"
                      style={{
                        backgroundImage: `url(${withBasePath('/figmaAssets/pledge-panel-bg.png')})`,
                        backgroundSize: '100% auto',
                        backgroundPosition: '0 0',
                        backgroundRepeat: 'no-repeat',
                        padding:
                          'clamp(40px, 5.3vw, 73px) clamp(50px, 7.1vw, 97.35px) clamp(60px, 8.9vw, 121.7px)',
                      }}
                    >
                      <div style={{ height: 32 }} />

                      <div className="flex flex-col items-start w-full">
                        <div className="flex flex-col items-center w-full">
                          <span
                            style={{
                              fontFamily: "'Quicksand', Helvetica, sans-serif",
                              fontWeight: 600,
                              fontSize: 'clamp(22px, 2.3vw, 32px)',
                              lineHeight: '32px',
                              color: '#ffffff',
                              textAlign: 'center',
                            }}
                            data-testid={`text-pledge-slide-title-${i}`}
                          >
                            {slide.title}
                          </span>
                        </div>
                      </div>

                      <div
                        className="flex w-full"
                        style={{
                          padding: '12px clamp(100px, 15.3vw, 208.9px) 12px clamp(100px, 15.3vw, 208.92px)',
                        }}
                      >
                        <span className="flex-1" style={{ borderTop: `1.6px solid ${slide.dividerColor}` }} />
                      </div>

                      <div className="w-full" style={{ paddingBottom: 14.4 }}>
                        <p
                          style={{
                            fontFamily: "'Inter', Helvetica, sans-serif",
                            fontWeight: 400,
                            fontSize: 'clamp(13px, 1.13vw, 15.4px)',
                            lineHeight: '24px',
                            color: '#ffffff',
                          }}
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
      </div>

      <div className="flex items-center gap-6 max-w-[1217px] mx-auto mt-3 px-5">
        <div className="flex items-center gap-2">
          {pledgeSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#11593f',
                opacity: i === current ? 1 : 0.4,
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              data-testid={`pledge-dot-${i}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={prev}
            className="flex items-center justify-center hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"
            style={{ width: 66, height: 50 }}
            data-testid="pledge-prev"
            aria-label="Previous pledge"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M18 6H3.82L8.42 1.4L7 0L0 7L7 14L8.42 12.6L3.82 8H18V6Z" fill="black" />
            </svg>
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"
            style={{ width: 66, height: 50 }}
            data-testid="pledge-next"
            aria-label="Next pledge"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 8H14.18L9.58 12.6L11 14L18 7L11 0L9.58 1.4L14.18 6H0V8Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
