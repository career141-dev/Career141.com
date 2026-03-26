'use client'

import { type JSX, useEffect, useRef, useState } from 'react'

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
        width: 204,
        height: 90.7,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        willChange: 'transform',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        if (window.innerWidth >= 1024) onClick()
        e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)'
      }}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) translateY(0)')}
      aria-label={label}
    >
      <div style={{ position: 'relative', width: 204, height: 63.2 }}>
        <svg
          width="204"
          height="64"
          viewBox="0 0 204 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', inset: 0, display: 'block' }}
        >
          <defs>
            <linearGradient id={gradId} x1="102" y1="0.000781232" x2="102" y2="63.2008" gradientUnits="userSpaceOnUse">
              <stop offset="0.465" stopColor="#01C5C4" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <clipPath id={`clip-${idx}`}>
              <rect width="204" height="63.2" fill="white" />
            </clipPath>
          </defs>
          <g clipPath={`url(#clip-${idx})`}>
            <path
              d="M172.4 0.800781H31.6C14.5897 0.800781 0.800049 14.5904 0.800049 31.6008C0.800049 48.6111 14.5897 62.4008 31.6 62.4008H172.4C189.41 62.4008 203.2 48.6111 203.2 31.6008C203.2 14.5904 189.41 0.800781 172.4 0.800781Z"
              stroke={`url(#${gradId})`}
              strokeWidth="1.6"
              style={{ vectorEffect: 'non-scaling-stroke' }}
            />
          </g>
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
            fontSize: fontSize || '12.8px',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '1.1px',
            lineHeight: '15.36px',
            padding: '0 10px',
            pointerEvents: 'none',
          }}
        >
          {label}
        </span>
      </div>
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
    prevTimer.current = setTimeout(() => setPrev(null), 850)
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
            animation: 'industriesBgFadeOut 0.8s ease-in-out forwards',
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
          animation: 'industriesBgPopIn 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
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
          <div style={{ lineHeight: 1.3, textAlign: 'center' }}>
            <span style={{ fontFamily: "'Quicksand', Helvetica, sans-serif", fontSize: 24, fontWeight: 700, color: '#BFEF00', letterSpacing: '0.3px' }}>INDUSTRIES</span>
            <span style={{ fontFamily: "'Quicksand', Helvetica, sans-serif", fontSize: 24, fontWeight: 400, color: '#FFFFFF' }}> we work on</span>
          </div>

          <div style={{ height: 60 }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 14, rowGap: 15 }}>
            {INDUSTRIES.map((industry, idx) => (
              <div key={idx} style={{ aspectRatio: '143 / 83' }}>
                <PillButton label={industry.label} idx={idx} onClick={() => handleClick(idx)} fontSize="clamp(10px, 3.2vw, 13px)" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
