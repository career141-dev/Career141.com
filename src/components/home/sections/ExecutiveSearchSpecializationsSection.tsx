'use client'

import { type JSX, useEffect, useRef } from 'react'

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const SPECIALIZATIONS = [
  {
    title: 'Apparel Merchandising & Marketing',
    img: 'https://www.figma.com/api/mcp/asset/db441dec-1bd6-49e5-88e5-984082742c87',
    href: 'https://career141.com/apparel-merchandising-and-marketing/',
  },
  {
    title: 'Finance & Auditing',
    img: 'https://www.figma.com/api/mcp/asset/5a21970c-d783-47e5-9f83-dbb3c5d1f069',
    href: 'https://career141.com/finance-auditing/',
  },
  {
    title: 'Constructions & Civil Engineering',
    img: 'https://www.figma.com/api/mcp/asset/63cc3f20-ce29-4006-a3e6-ddbbb0737845',
    href: 'https://career141.com/constructions-civil-engineering/',
  },
  {
    title: 'Continuous Improvement',
    img: 'https://www.figma.com/api/mcp/asset/ed2ef480-acfa-45bc-a9f9-093d36749d9e',
    href: 'https://career141.com/continuous-improvement/',
  },
  {
    title: 'Data Analytics & Research',
    img: 'https://www.figma.com/api/mcp/asset/dfcb16a3-ea42-45c8-9714-95d37cc3109d',
    href: 'https://career141.com/data-analytics-research/',
  },
  {
    title: 'Environment Health & Safety',
    img: 'https://www.figma.com/api/mcp/asset/1c879eb9-c391-46c9-a6c4-0e851a72a3cf',
    href: 'https://career141.com/ehs-environment-health-and-safety/',
  },
  {
    title: 'IT Software & Infrastructure',
    img: 'https://www.figma.com/api/mcp/asset/e91f81a1-65fc-4f19-879f-e14ef46883bf',
    href: 'https://career141.com/it-software-infrastructure/',
  },
  {
    title: 'Legal & Secretarial',
    img: 'https://www.figma.com/api/mcp/asset/c21b712e-2515-48a0-9c84-8511736e22c2',
    href: 'https://career141.com/legal-secretarial/',
  },
  {
    title: 'Maintenance Engineering',
    img: 'https://www.figma.com/api/mcp/asset/1c8f390f-dc80-4085-8cc9-0976bdf2ed6c',
    href: 'https://career141.com/maintenance-engineering/',
  },
  {
    title: 'Mechanical Engineering & Production',
    img: 'https://www.figma.com/api/mcp/asset/c151e83d-916d-4eef-b49e-d85f35f2a2c8',
    href: 'https://career141.com/mechanical-engineering-production/',
  },
  {
    title: 'Supply Chain Management',
    img: 'https://www.figma.com/api/mcp/asset/9db79313-27f2-47a8-86f5-ddab9fc1b632',
    href: 'https://career141.com/supply-chain-management/',
  },
  {
    title: 'Fashion Designing & Development',
    img: 'https://www.figma.com/api/mcp/asset/0114eb5e-34fa-4d4b-ab24-cb0df881ffbc',
    href: 'https://career141.com/fashion-designing-development/',
  },
  {
    title: 'Digital Marketing',
    img: 'https://www.figma.com/api/mcp/asset/a57c7484-a6b6-4642-9548-db101d57871a',
    href: 'https://career141.com/digital-marketing-2/',
  },
  {
    title: 'Digital Transformation',
    img: 'https://www.figma.com/api/mcp/asset/e88730eb-3ce3-4d21-8a63-b913fc5b4bc6',
    href: 'https://career141.com/digital-transformation/',
  },
  {
    title: 'Marketing, Consumer Insight & Customer Experience',
    img: 'https://www.figma.com/api/mcp/asset/83681f61-2d8e-48ce-b035-8da3a3207fdb',
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
      <div style={{ width: '100%', overflow: 'hidden', borderRadius: 12, marginBottom: 16 }}>
        <img
          ref={imgRef}
          src={img}
          alt={title}
          style={{
            width: '100%',
            height: 210,
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
  const headingRef = useRef<HTMLHeadingElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headingRef.current, dividerRef.current, subtextRef.current, buttonRef.current]

    if (prefersReducedMotion()) {
      els.forEach((el) => {
        if (el) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      })
      return
    }

    const panel = leftRef.current
    if (!panel) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          els.forEach((el, i) => {
            if (!el) return
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 150)
          })
          obs.unobserve(panel)
        }
      },
      { threshold: 0.15 }
    )

    obs.observe(panel)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      className="exec-spec-section"
      style={{
        width: '100%',
        background: 'radial-gradient(ellipse at 20% 50%, #ccdde4 0%, #dce8ed 60%)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div
        className="exec-spec-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: '520px 1fr',
          alignItems: 'start',
          minHeight: '100vh',
        }}
      >
        <div
          ref={leftRef}
          className="exec-spec-left"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 48px 60px 72px',
          }}
        >
          <h2
            ref={headingRef}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(22px, 2.4vw, 32px)',
              lineHeight: 1.18,
              margin: '0 0 20px 0',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <span style={{ fontWeight: 300, color: '#1a2e2b', display: 'block' }}>We are knowledge</span>
            <span style={{ fontWeight: 300, color: '#1a2e2b', display: 'block' }}>experts in</span>
            <span style={{ fontWeight: 800, color: '#2E7D6B', display: 'block' }}>Skill Sets &amp;</span>
            <span style={{ fontWeight: 800, color: '#2E7D6B', display: 'block' }}>Specialization</span>
          </h2>

          <div
            ref={dividerRef}
            style={{
              width: 81,
              height: 6,
              backgroundColor: '#C8622A',
              borderRadius: 3,
              marginBottom: 24,
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          />

          <p
            ref={subtextRef}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.7,
              color: '#5a6e6b',
              maxWidth: 280,
              margin: '0 0 44px 0',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            For over two decades, we&apos;ve been more than an executive search firm. We connect top talent with industry-leading companies.
          </p>

          <a
            ref={buttonRef}
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
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease, color 0.3s ease',
            }}
          >
            <span className="exec-search-btn-bg" />
            <span style={{ position: 'relative', zIndex: 1 }}>Executive Search</span>
          </a>
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
            grid-template-columns: 440px 1fr !important;
          }

          .exec-spec-left {
            padding: 48px 32px 48px 48px !important;
          }
        }

        @media (max-width: 768px) {
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
