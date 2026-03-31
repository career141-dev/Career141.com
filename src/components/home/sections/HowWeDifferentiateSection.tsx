'use client'

import { useRef, useState } from 'react'
import { withBasePath } from '@/lib/assetPath'

const HEADING_DARK = 'rgb(22,22,24)'
const HEADING_GREEN = '#37A65E'

const DIAMOND_PATH =
  'M303.381 144.959L163.22 4.79817C158.159 -0.263179 149.953 -0.263179 144.892 4.79817L4.73038 144.959C-0.330977 150.021 -0.330972 158.227 4.73038 163.288L144.892 303.449C149.953 308.511 158.159 308.511 163.22 303.449L303.381 163.288C308.443 158.227 308.443 150.021 303.381 144.959Z'

const CARDS = [
  { id: 1, text: '100% Head\nHunting', back: withBasePath('/figmaAssets/diff-card-1.png') },
  { id: 2, text: 'Tailored\nApproach', back: withBasePath('/figmaAssets/diff-card-2.png') },
  { id: 3, text: 'Knowledge\nExperts', back: withBasePath('/figmaAssets/diff-card-3.png') },
  { id: 4, text: 'Business Acumen\nMindset', back: withBasePath('/figmaAssets/diff-card-4.png') },
  { id: 5, text: 'Sustainable\nRelationship', back: withBasePath('/figmaAssets/diff-card-5.png') },
  { id: 6, text: 'Execution\nExcellence', back: withBasePath('/figmaAssets/diff-card-6.png') },
  { id: 7, text: 'Technology\nAdaptation', back: withBasePath('/figmaAssets/diff-card-7.png') },
]

function DiamondFront({ text, uid, size }: { text: string; uid: string; size: number }) {
  const fontSize = Math.max(11, Math.round(15 * (size / 308)))

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 308 309" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
        <defs>
          <linearGradient id={`grad-${uid}`} x1="84.8287" y1="64.8611" x2="239.617" y2="219.65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FE8D2B" />
            <stop offset="1" stopColor="#109162" />
          </linearGradient>
        </defs>
        <path d={DIAMOND_PATH} fill="#F8F8F8" stroke={`url(#grad-${uid})`} strokeWidth="1.52396" />
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: "'Quicksand', Helvetica, sans-serif",
          fontWeight: 600,
          fontSize,
          lineHeight: 1.35,
          color: '#161618',
          padding: '0 22%',
          pointerEvents: 'none',
          whiteSpace: 'pre-line',
        }}
      >
        {text}
      </div>
    </div>
  )
}

interface FlipCardProps {
  card: (typeof CARDS)[0]
  size: number
}

function FlipCard({ card, size }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      style={{ width: size, height: size, perspective: 1000, cursor: 'pointer', flexShrink: 0 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          transition: 'transform 0.35s ease',
          transform: flipped ? 'translateY(-12px)' : 'translateY(0px)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <DiamondFront text={card.text} uid={`f${card.id}`} size={size} />
          </div>

          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={card.back} alt={card.text.replace('\n', ' ')} style={{ width: size, height: size, objectFit: 'contain', display: 'block' }} draggable={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

function CardCol({ card, size }: { card: (typeof CARDS)[0]; size: number }) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '19.2px 17.1px',
      }}
    >
      <FlipCard card={card} size={size} />
    </div>
  )
}

function MobileCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [animating, setAnimating] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const total = CARDS.length
  const carouselW = 343
  const carouselH = 281
  const cardSize = 256

  const navigate = (dir: 1 | -1) => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setIndex((i) => (i + dir + total) % total)
      setAnimating(false)
    }, 300)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) navigate(delta > 0 ? 1 : -1)
    touchStartX.current = null
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          width: carouselW,
          height: carouselH,
          position: 'relative',
          overflow: 'hidden',
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translateX(${animating ? direction * -100 : 0}%)`,
            transition: animating ? 'transform 0.3s ease' : 'none',
          }}
        >
          <FlipCard card={CARDS[index]} size={cardSize} />
        </div>

        <button
          onClick={() => navigate(-1)}
          aria-label="Previous card"
          style={{
            position: 'absolute',
            left: 0,
            top: 112,
            width: 25,
            height: 26,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,103,99,0.12)',
            border: '1px solid rgba(0,103,99,0.3)',
            borderRadius: 4,
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M7 1L1 6.5L7 12" stroke="#006763" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={() => navigate(1)}
          aria-label="Next card"
          style={{
            position: 'absolute',
            right: 0,
            top: 112,
            width: 25,
            height: 26,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,103,99,0.12)',
            border: '1px solid rgba(0,103,99,0.3)',
            borderRadius: 4,
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M1 1L7 6.5L1 12" stroke="#006763" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          style={{
            position: 'absolute',
            bottom: 2,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (animating) return
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Go to card ${i + 1}`}
              style={{
                width: i === index ? 18 : 6,
                height: 6,
                borderRadius: 3,
                background: i === index ? '#006763' : 'rgba(0,103,99,0.3)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function HowWeDifferentiateSection() {
  const row1 = CARDS.slice(0, 3)
  const row2 = CARDS.slice(3)

  return (
    <section
      className={[
        'w-full relative bg-white bg-no-repeat',
        `[background-image:url(${withBasePath('/figmaAssets/how-we-differentiate-bg.png')})]`,
        '[background-position:left_center]',
        '[background-size:55%_auto]',
        'lg:[background-size:100%_100%]',
      ].join(' ')}
    >
      <div className="hidden lg:block" style={{ maxWidth: 1521, margin: '0 auto', padding: '10px 40px 40px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            paddingLeft: 28.8,
            paddingRight: 28.8,
            gap: 5,
            height: 384,
          }}
        >
          <div
            style={{
              width: 342,
              minWidth: 342,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'flex-end',
              paddingBottom: 80,
            }}
          >
            <h2
              style={{
                fontFamily: "'Quicksand', Helvetica, sans-serif",
                fontWeight: 700,
                fontSize: 38.4,
                lineHeight: 1,
                margin: 0,
                color: HEADING_DARK,
              }}
            >
              How We
              <br />
              <span style={{ color: HEADING_GREEN }}>Differentiate</span>
            </h2>
          </div>

          {row1.map((card) => (
            <CardCol key={card.id} card={card} size={308} />
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 28.8,
            paddingRight: 28.8,
            gap: 5,
            marginTop: -40,
          }}
        >
          {row2.map((card) => (
            <CardCol key={card.id} card={card} size={308} />
          ))}
        </div>
      </div>

      <div className="hidden md:block lg:hidden py-12 px-6">
        <h2
          style={{
            fontFamily: "'Quicksand', Helvetica, sans-serif",
            fontWeight: 700,
            fontSize: 32,
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 24,
            color: HEADING_DARK,
          }}
        >
          How We
          <br />
          <span style={{ color: HEADING_GREEN }}>Differentiate</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          {row1.map((card) => (
            <FlipCard key={card.id} card={card} size={196} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: -20 }}>
          {row2.map((card) => (
            <FlipCard key={card.id} card={card} size={168} />
          ))}
        </div>
      </div>

      <div className="md:hidden" style={{ minHeight: 472, paddingTop: 32, paddingBottom: 32 }}>
        <div style={{ paddingLeft: 23, paddingRight: 23, marginBottom: 24 }}>
          <h2
            style={{
              fontFamily: "'Quicksand', Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: 32,
              lineHeight: 1.1,
              margin: 0,
              color: HEADING_DARK,
            }}
          >
            How We
            <br />
            <span style={{ color: HEADING_GREEN }}>Differentiate</span>
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MobileCarousel />
        </div>
      </div>
    </section>
  )
}
