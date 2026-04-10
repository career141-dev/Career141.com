'use client'

import type { CSSProperties } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MapPinIcon, YoutubeIcon } from 'lucide-react'
import { withBasePath } from '@/lib/assetPath'

function XTwitterIcon({ size = 18, style }: { size?: number; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.262 5.638zM17.083 20.25h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'Executive Talent', href: '/executive-search' },
  { label: 'Premium Jobs', href: '/premium-jobs' },
  { label: 'Our Culture', href: '/our-culture' },
  { label: 'Our Journey', href: '/our-journey' },
  { label: 'Contact Us', href: '/contact-us' },
]

const serviceLinks = [
  { label: 'Jobs & Vacancies', href: '/premium-jobs' },
  { label: 'Join Us', href: '/our-culture' },
]

const contactInfo = [
  { label: 'hello@career141.com', href: 'mailto:hello@career141.com' },
  { label: '+94 75 359 5495', href: 'tel:+94753595495' },
  { label: '+94 75 577 8899', href: 'tel:+94755778899' },
  { label: '+94 11 723 2425', href: 'tel:+94117232425' },
  { label: '+94 11 488 4774', href: 'tel:+94114884774' },
]

const directions = [
  { label: 'Sri Lanka', href: 'https://maps.app.goo.gl/NCAnkkjgxJmumri38' },
  { label: 'Dubai', href: 'https://maps.app.goo.gl/A8LfqWjLtNY9bexn9' },
  { label: 'Singapore', href: 'https://maps.app.goo.gl/uNRNzjFZMRTbNDUYA' },
]

const socialLinks = [
  { href: 'https://web.facebook.com/career141/', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://www.instagram.com/life_at_career141/', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://lk.linkedin.com/company/career-consultants-pvt-ltd', icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'https://twitter.com/career141', icon: XTwitterIcon, label: 'X' },
  { href: 'https://www.youtube.com/@career141_', icon: YoutubeIcon, label: 'YouTube' },
]

function FooterLink({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  const isInternal = href.startsWith('/')

  const className = `text-[14.1px] font-['Inter',sans-serif] font-normal leading-[1.4] transition-colors ${
    dark ? 'text-white/60 hover:text-[#6abf4b]' : 'text-[#161618] hover:text-[#37a65e]'
  }`

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {label}
    </a>
  )
}

export function CompanyFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* Mobile Footer */}
      <footer className="md:hidden flex flex-col w-full bg-white border-t border-[#ededed]">
        <div className="px-5 pt-10 pb-6 flex flex-col gap-8">
          <div>
            <div
              className="w-[160px] h-[62px] bg-contain bg-no-repeat bg-left"
              style={{ backgroundImage: `url(${withBasePath('/figmaAssets/artboard-3-2048x790-png.png')})` }}
            />
            <p className="font-['Quicksand',sans-serif] text-[#444444] text-[12.8px] leading-[20.48px] mt-4">
              Executive Search remains our primary focus. In a world where CVs and resumes are available everywhere on the web, we add value and insight.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {mainLinks.map((link) => (
                <FooterLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {serviceLinks.map((link) => (
                <FooterLink key={link.label} href={link.href} label={link.label} />
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <span className="font-['Quicksand',sans-serif] font-bold text-[#161618] text-[14.1px]">Get Directions</span>
                {directions.map((direction) => (
                  <a
                    key={direction.label}
                    href={direction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#11593f] text-[13.3px] font-['Inter',sans-serif] font-medium hover:text-[#37a65e] transition-colors underline"
                  >
                    <MapPinIcon className="w-3 h-3" />
                    {direction.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#ededed]" />

          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.label}
                  className="flex w-9 h-9 items-center justify-center rounded-lg bg-[#f4f4f4] hover:bg-[#ededed] transition-all duration-200"
                >
                  <Icon size={16} className="text-[#0c422e]" />
                </a>
              )
            })}
          </div>

          <p className="font-['Quicksand',sans-serif] font-bold text-[#161618]/30 text-[11.2px] text-center">
            © 2024 Career141. A Positive Impact Company
          </p>
        </div>
      </footer>

      {/* Desktop Footer */}
      <footer className="hidden md:flex flex-col w-full bg-white">
        <div className="w-full px-[80px] lg:px-[121px] pt-16 pb-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 w-full mb-10">
            <div className="flex flex-col items-start gap-5 max-w-[340px]">
              <Link href="/">
                <div
                  className="w-[200px] h-[77px] bg-contain bg-no-repeat bg-left"
                  style={{ backgroundImage: `url(${withBasePath('/figmaAssets/artboard-3-2048x790-png.png')})` }}
                />
              </Link>
              <p className="font-['Quicksand',sans-serif] font-normal text-[#444444] text-[12.8px] leading-[20.48px]">
                Executive Search remains our primary focus. In a world where CVs and resumes are available everywhere on the web, we add value and insight to the identification of singularly viable candidates that meet your requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
              <div className="flex flex-col items-start gap-4">
                <h3 className="font-['Quicksand',sans-serif] font-bold text-[#161618] text-[20.8px] leading-none w-full">Main</h3>
                <nav className="flex flex-col items-start gap-2 w-full">
                  {mainLinks.map((link) => (
                    <FooterLink key={link.label} href={link.href} label={link.label} />
                  ))}
                </nav>
              </div>

              <div className="flex flex-col items-start gap-4">
                <h3 className="font-['Quicksand',sans-serif] font-bold text-[#161618] text-[20.8px] leading-none w-full">Services</h3>
                <nav className="flex flex-col items-start gap-2 w-full">
                  {serviceLinks.map((link) => (
                    <FooterLink key={link.label} href={link.href} label={link.label} />
                  ))}
                </nav>
              </div>

              <div className="flex flex-col items-start gap-4">
                <h3 className="font-['Quicksand',sans-serif] font-bold text-[#161618] text-[20.8px] leading-none w-full">Get In Touch</h3>
                <div className="flex flex-col items-start gap-4 w-full">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="font-['Inter',sans-serif] font-medium text-[#161618] text-[13.2px] leading-[1.4] hover:text-[#37a65e] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <h3 className="font-['Quicksand',sans-serif] font-bold text-[#161618] text-[20.8px] leading-none w-full">Get Directions</h3>
                <div className="flex flex-col items-start gap-5 w-full">
                  {directions.map((direction) => (
                    <a
                      key={direction.label}
                      href={direction.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex items-center gap-3 font-['Inter',sans-serif] font-medium text-[#11593f] text-[13.3px] leading-[1.4] hover:text-[#37a65e] transition-all underline"
                    >
                      <MapPinIcon className="w-4 h-4" />
                      <span>{direction.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#ededed] mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
            <span className="font-['Quicksand',sans-serif] font-bold text-[#161618] text-[11.2px]">
              © 2024 Career141. A Positive Impact Company
            </span>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={social.label}
                    className="flex w-9 h-9 items-center justify-center rounded-lg bg-[#f4f4f4] hover:scale-110 transition-all duration-200"
                  >
                    <Icon size={25} className="text-[#0c422e]" />
                  </a>
                )
              })}
            </div>

            <div className="flex items-center gap-4">
              <span className="font-['Quicksand',sans-serif] font-bold text-[#161618] text-[11.2px]">Terms and Conditions</span>
              <span className="text-[#ddd]">|</span>
              <a
                href="https://career141.com/privacy-policy/"
                rel="noopener noreferrer"
                target="_blank"
                className="font-['Quicksand',sans-serif] font-bold text-[#161618] text-[11.2px] hover:text-[#37a65e] transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=94753595495&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-[80px] md:right-10 md:bottom-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 z-40"
        aria-label="Chat on WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain rounded-full" />
      </a>
    </>
  )
}
