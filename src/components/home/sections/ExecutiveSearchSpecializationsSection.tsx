'use client'

import { type JSX, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { withBasePath } from '@/lib/assetPath'

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const SPECIALIZATIONS = [
  {
    title: 'Apparel Merchandising & Marketing',
    img: withBasePath('/home/Subtract-1.webp'),
    href: 'https://career141.com/apparel-merchandising-and-marketing/',
  },
  {
    title: 'Finance & Auditing',
    img: withBasePath('/home/Subtract-5.webp'),
    href: 'https://career141.com/finance-auditing/',
  },
  {
    title: 'Constructions & Civil Engineering',
    img: withBasePath('/home/Subtract-15.webp'),
    href: 'https://career141.com/constructions-civil-engineering/',
  },
  {
    title: 'Continuous Improvement',
    img: withBasePath('/home/Subtract-11.webp'),
    href: '/jobs/continuous-improvement',
  },
  {
    title: 'Data Analytics & Research',
    img: withBasePath('/home/Subtract-9.webp'),
    href: 'https://career141.com/data-analytics-research/',
  },
  {
    title: 'Environment Health & Safety',
    img: withBasePath('/home/Subtract-10.webp'),
    href: 'https://career141.com/ehs-environment-health-and-safety/',
  },
  {
    title: 'IT Software & Infrastructure',
    img: withBasePath('/home/Subtract-13.webp'),
    href: 'https://career141.com/it-software-infrastructure/',
  },
  {
    title: 'Legal & Secretarial',
    img: withBasePath('/home/Subtract-19.webp'),
    href: 'https://career141.com/legal-secretarial/',
  },
  {
    title: 'Maintenance Engineering',
    img: withBasePath('/home/Subtract-4.webp'),
    href: 'https://career141.com/maintenance-engineering/',
  },
  {
    title: 'Mechanical Engineering & Production',
    img: withBasePath('/home/Subtract-3.webp'),
    href: 'https://career141.com/mechanical-engineering-production/',
  },
  {
    title: 'Supply Chain Management',
    img: withBasePath('/home/Subtract-12.webp'),
    href: 'https://career141.com/supply-chain-management/',
  },
  {
    title: 'Fashion Designing & Development',
    img: withBasePath('/home/Subtract-14.webp'),
    href: 'https://career141.com/fashion-designing-development/',
  },
  {
    title: 'Digital Marketing',
    img: withBasePath('/home/Subtract-11.webp'),
    href: 'https://career141.com/digital-marketing-2/',
  },
  {
    title: 'Digital Transformation',
    img: withBasePath('/home/Subtract-18.webp'),
    href: 'https://career141.com/digital-transformation/',
  },
  {
    title: 'Marketing, Consumer Insight & Customer Experience',
    img: withBasePath('/home/Subtract-2.webp'),
    href: 'https://career141.com/marketing-consumer-insight-customer-experience/',
  },
]

function SpecializationCard({
  title,
  img,
  href,
  index,
}: {
  title: string
  img: string
  href: string
  index: number
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    if (prefersReducedMotion()) {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, index * 60)
          obs.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [index])

  const onEnter = () => {
    if (prefersReducedMotion()) return
    if (cardRef.current) cardRef.current.style.transform = 'translateY(-5px)'
    if (imgRef.current) imgRef.current.style.transform = 'scale(1.05)'
    if (labelRef.current) labelRef.current.style.color = '#2E7D6B'
  }

  const onLeave = () => {
    if (prefersReducedMotion()) return
    if (cardRef.current) cardRef.current.style.transform = 'translateY(0)'
    if (imgRef.current) imgRef.current.style.transform = 'scale(1)'
    if (labelRef.current) labelRef.current.style.color = '#1a2e2b'
  }

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="spec-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 24px 28px',
        background: '#ffffff',
        textDecoration: 'none',
        opacity: 0,
        transform: 'translateY(24px)',
        transition: 'transform 0.3s ease, opacity 0.5s ease',
        willChange: 'transform, opacity',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 12, marginBottom: 16 }}>
        <img
          ref={imgRef}
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.35s ease',
          }}
          className="spec-card-img"
        />
      </div>

      <span
        ref={labelRef}
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.45,
          color: '#1a2e2b',
          transition: 'color 0.25s ease',
        }}
      >
        {title}
      </span>
    </a>
  )
}

export function ExecutiveSearchSpecializationsSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Desktop Scroll-Linked Logic:
  // 1. Initially appear at top (0px)
  // 2. Clear downward track but stop much earlier (by 30% of scroll)
  // 3. Complete fade-out by middle of the section (50% scroll)
  // 4. Stays locked and hidden for the remainder
  // Desktop Scroll-Linked Logic:
  // 1. Start at top
  // 2. Stop downward motion very early (at only 12vh down) by 15% scroll
  // 3. NO FADE-OUT (Stay visible 100%)
  // 4. Stays locked in position for the remainder of the section
  // PHASE 1 (0% → 35%):  Text tracks downward from top of panel to visual center (~26vh)
  // PHASE 2 (35% → 100%): Text locks at center — stays visible while cards continue scrolling
  const yMotion = useTransform(
    scrollYProgress,
    [0,     0.35,   1.0],
    ['0px', '18vh', '18vh']
  )
  const opacityMotion = useTransform(scrollYProgress, [0, 1], [1, 1])

  return (
    <section
      ref={sectionRef}
      className="exec-spec-section"
      style={{
        width: '100%',
        position: 'relative',
        background: 'radial-gradient(ellipse at 20% 50%, #ccdde4 0%, #dce8ed 60%)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div
        className="exec-spec-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '520px 1fr',
          alignItems: 'start',
          minHeight: '100vh',
        }}
      >
        <div
          ref={leftRef}
          className="exec-spec-left"
          style={{
            position: isMobile ? 'static' : 'sticky',
            top: 0,
            height: isMobile ? 'auto' : '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: isMobile ? '48px 24px 32px' : '60px 48px 60px 72px',
            overflow: 'hidden',
          }}
        >
          <motion.div style={{ y: isMobile ? 0 : yMotion, opacity: opacityMotion }} className="exec-spec-motion-container">
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(22px, 2.4vw, 32px)',
                lineHeight: 1.18,
                margin: '0 0 20px 0',
                color: '#1a2e2b',
              }}
            >
              <span style={{ fontWeight: 300, display: 'block' }}>We are knowledge</span>
              <span style={{ fontWeight: 300, display: 'block' }}>experts in</span>
              <span style={{ fontWeight: 800, color: '#2E7D6B', display: 'block' }}>Skill Sets &amp;</span>
              <span style={{ fontWeight: 800, color: '#2E7D6B', display: 'block' }}>Specialization</span>
            </h2>

            <div
              style={{
                width: 81,
                height: 6,
                backgroundColor: '#C8622A',
                borderRadius: 3,
                marginBottom: 24,
              }}
            />

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.7,
                color: '#5a6e6b',
                maxWidth: 280,
                margin: '0 0 44px 0',
              }}
            >
              For over two decades, we&apos;ve been more than an executive search firm. We connect top talent with industry-leading companies.
            </p>
            <a
              href="https://career141.com/executive-search/"
              target="_blank"
              rel="noopener noreferrer"
              className="exec-search-btn"
              style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                alignItems: 'center',
                padding: '12px 28px',
                border: '2px solid #11593f',
                borderRadius: 999,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.1em',
                color: '#11593f',
                textDecoration: 'none',
                textTransform: 'uppercase',
                position: 'relative',
                overflow: 'hidden',
                transition: 'color 0.3s ease',
                marginTop: 0, // Reduced from 44
              }}
            >
              <span className="exec-search-btn-bg" />
              <span style={{ position: 'relative', zIndex: 1 }}>Executive Search</span>
            </a>
          </motion.div>
        </div>

        <div
          className="exec-spec-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderLeft: '1px solid rgba(0,0,0,0.08)',
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          {SPECIALIZATIONS.map((spec, i) => (
            <SpecializationCard key={spec.href} title={spec.title} img={spec.img} href={spec.href} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .spec-card {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .exec-spec-grid .spec-card:nth-child(3n) {
          border-right: none;
        }

        .exec-spec-grid .spec-card:nth-last-child(-n+3) {
          border-bottom: none;
        }

        .exec-search-btn .exec-search-btn-bg {
          position: absolute;
          inset: 0;
          background-color: #11593f;
          transform: translateX(-101%);
          transition: transform 0.3s ease;
          z-index: 0;
        }

        .exec-search-btn:hover .exec-search-btn-bg { transform: translateX(0); }
        .exec-search-btn:hover { color: #ffffff !important; }

        @media (prefers-reduced-motion: reduce) {
          .exec-spec-left h2,
          .exec-spec-left > div,
          .exec-spec-left > p,
          .exec-spec-left a {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .spec-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .spec-card-img { transition: none !important; }
          .exec-search-btn .exec-search-btn-bg { transition: none !important; }
        }

        @media (max-width: 1024px) {
          .exec-spec-inner {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }

          .exec-spec-left {
            position: static !important;
            height: auto !important;
            padding: 48px 24px 32px !important;
          }

          .exec-spec-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            border-left: none !important;
          }

          .spec-card-img { height: 140px !important; }
        }

        @media (max-width: 600px) {
          .exec-spec-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .exec-spec-grid .spec-card {
            border-right: 1px solid rgba(0,0,0,0.08) !important;
            border-bottom: 1px solid rgba(0,0,0,0.08) !important;
          }

          .exec-spec-grid .spec-card:nth-child(2n) { border-right: none !important; }
          .exec-spec-grid .spec-card:nth-last-child(-n+2) { border-bottom: none !important; }
        }
      `}</style>
    </section>
  )
}
