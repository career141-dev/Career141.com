'use client'

import { useEffect, useRef, useState } from 'react'

const INDUSTRIES = [
  { label: 'APPAREL', bg: 'https://career141.com/wp-content/uploads/2024/04/Apparel-scaled.webp' },
  { label: 'FMCG', bg: 'https://career141.com/wp-content/uploads/2024/04/FMCG-scaled.webp' },
  { label: 'IT', bg: 'https://career141.com/wp-content/uploads/2024/04/it-scaled.webp' },
  { label: 'RETAIL MARKET', bg: 'https://career141.com/wp-content/uploads/2024/04/retail-scaled.webp' },
  { label: 'E-COMMERCE', bg: 'https://career141.com/wp-content/uploads/2024/04/ecommerce-scaled.webp' },
  { label: 'HEALTHCARE', bg: 'https://career141.com/wp-content/uploads/2024/04/healthcare-scaled.webp' },
  { label: 'PHARMACEUTICAL', bg: 'https://career141.com/wp-content/uploads/2024/04/pharma-scaled.webp' },
  { label: 'POWER & ENERGY', bg: 'https://career141.com/wp-content/uploads/2024/04/power-and-energy-scaled.webp' },
  { label: 'HOSPITALITY', bg: 'https://career141.com/wp-content/uploads/2024/04/Hospitality-scaled.webp' },
  { label: 'EDUCATION', bg: 'https://career141.com/wp-content/uploads/2024/04/education-scaled.webp' },
  { label: 'TESTING AND CERTIFICATION', bg: 'https://career141.com/wp-content/uploads/2024/04/Testing-and-cert-scaled.webp' },
  { label: 'AUTOMOTIVE', bg: 'https://career141.com/wp-content/uploads/2024/04/automotive-scaled.webp' },
  { label: 'CONSTRUCTION', bg: 'https://career141.com/wp-content/uploads/2024/04/construction.png' },
  { label: 'SHIPPING & FREIGHT', bg: 'https://career141.com/wp-content/uploads/2024/04/shipping-scaled.webp' },
]

function PillButton({ label, idx, onClick, fontSize }: { label: string; idx: number; onClick: () => void; fontSize: string }) {
  const gradId = `ig-${idx}`

  return (
    <button
      onClick={onClick}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        transition: 'transform 0.25s ease',
        willChange: 'transform',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      aria-label={label}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 255 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0, display: 'block' }}
      >
        <defs>
          <linearGradient id={gradId} x1="127.5" y1="0" x2="127.5" y2="79" gradientUnits="userSpaceOnUse">
            <stop offset="0.465" stopColor="#01C5C4" />
            <stop offset="1" stopColor="#01C5C4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="253" height="77" rx="38.5" stroke={`url(#${gradId})`} strokeWidth="2" fill="transparent" />
      </svg>

      <span
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: "'Quicksand', Helvetica, sans-serif",
          fontWeight: 500,
          fontSize,
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '1.1px',
          lineHeight: 1.25,
          padding: '0 12%',
          pointerEvents: 'none',
        }}
      >
        {label}
      </span>
    </button>
  )
}

export function IndustriesSection(): JSX.Element {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const prevTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = (idx: number) => {
    if (idx === active) return
    if (prevTimer.current) clearTimeout(prevTimer.current)
    setPrev(active)
    setActive(idx)
    prevTimer.current = setTimeout(() => setPrev(null), 800)
  }

  useEffect(() => {
    return () => {
      if (prevTimer.current) clearTimeout(prevTimer.current)
    }
  }, [])

  const rows = [INDUSTRIES.slice(0, 5), INDUSTRIES.slice(5, 10), INDUSTRIES.slice(10, 14)]

  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {prev !== null && (
        <div
          key={`prev-${prev}`}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${INDUSTRIES[prev].bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <div
        key={`curr-${active}`}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backgroundImage: `url(${INDUSTRIES[active].bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'industriesBgFadeIn 0.75s ease forwards',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(135deg,rgba(0,0,0,0.62) 0%,rgba(15,8,0,0.55) 50%,rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="hidden lg:block" style={{ position: 'relative', zIndex: 10, paddingTop: '8.6vh' }}>
        <div style={{ textAlign: 'center', lineHeight: 1.2 }}>
          <span style={{ fontFamily: "'Quicksand', Helvetica, sans-serif", fontSize: 45, fontWeight: 700, color: '#BFEF00', letterSpacing: '0.3px' }}>INDUSTRIES</span>
          <span style={{ fontFamily: "'Quicksand', Helvetica, sans-serif", fontSize: 45, fontWeight: 400, color: '#FFFFFF' }}> we work on</span>
        </div>

        <div style={{ height: 'clamp(80px, 16.4vh, 160px)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 }}>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} style={{ display: 'flex', gap: 15 }}>
              {row.map((industry, colIdx) => {
                const gIdx = rowIdx < 2 ? rowIdx * 5 + colIdx : 10 + colIdx
                return (
                  <div key={gIdx} style={{ width: 204, height: 91, flexShrink: 0 }}>
                    <PillButton label={industry.label} idx={gIdx} onClick={() => handleClick(gIdx)} fontSize="12.8px" />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="ind-scroll-container lg:hidden" style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
        <div style={{ padding: '26px 45px 40px' }}>
          <div style={{ lineHeight: 1.3 }}>
            <span style={{ fontFamily: "'Quicksand', Helvetica, sans-serif", fontSize: 20, fontWeight: 700, color: '#BFEF00', letterSpacing: '0.3px' }}>INDUSTRIES</span>
            <span style={{ fontFamily: "'Quicksand', Helvetica, sans-serif", fontSize: 20, fontWeight: 400, color: '#FFFFFF' }}> we work on</span>
          </div>

          <div style={{ height: 68 }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 14, rowGap: 15 }}>
            {INDUSTRIES.map((industry, idx) => (
              <div key={idx} style={{ aspectRatio: '143 / 83' }}>
                <PillButton label={industry.label} idx={idx} onClick={() => handleClick(idx)} fontSize="clamp(8px, 2.5vw, 11px)" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
