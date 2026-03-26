'use client'

import { useState } from 'react'
import { ChevronDownIcon, FacebookIcon, LinkedinIcon, MenuIcon, XIcon } from 'lucide-react'
import { withBasePath } from '@/lib/assetPath'

const navItems = [
  {
    label: 'EXECUTIVE SEARCH',
    href: 'https://career141.com/executive-search/',
    hasDropdown: true,
    isHighlighted: false,
  },
  {
    label: 'OUR JOURNEY',
    href: 'https://career141.com/our-journey/',
    hasDropdown: false,
    isHighlighted: false,
  },
  {
    label: 'OUR CULTURE',
    href: 'https://career141.com/our-culture/',
    hasDropdown: true,
    isHighlighted: false,
  },
  {
    label: 'PREMIUM JOBS',
    href: 'https://career141.com/premium-jobs/',
    hasDropdown: false,
    isHighlighted: true,
  },
  {
    label: 'RESOURCES',
    href: null,
    hasDropdown: true,
    isHighlighted: false,
  },
  {
    label: 'CONTACT',
    href: '/contact-us',
    hasDropdown: false,
    isHighlighted: false,
  },
]

const socialLinks = [
  {
    href: 'https://lk.linkedin.com/company/career-consultants-pvt-ltd',
    icon: LinkedinIcon,
    label: 'LinkedIn',
  },
  {
    href: 'https://web.facebook.com/career141/',
    icon: FacebookIcon,
    label: 'Facebook',
  },
]

export function JobListingsSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="flex flex-col w-full border-b-[0.8px] border-b-[#ffffff2e] bg-[#0b2f23]/90 backdrop-blur-[1px] relative z-50">
      <div className="flex w-full items-stretch justify-between">
        <div className="flex flex-col h-[70px] md:h-[89.34px] items-center justify-center flex-shrink-0 border-r-[0.8px] border-r-[#ffffff2e] px-4 md:px-6">
          <img
            className="w-[140px] md:w-[200px] h-[45px] md:h-[65.34px] object-contain"
            alt="Career141 logo"
            src={withBasePath('/figmaAssets/career141-logo-with-20-year-anniversary-mark.png')}
          />
        </div>

        <div className="hidden md:flex items-stretch flex-1 min-w-0">
          <div className="flex items-stretch flex-1 min-w-0 px-[17.8px]">
            <div className="flex items-stretch flex-wrap justify-between w-full">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center justify-center px-3 py-[31px] self-stretch flex-shrink-0"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={`font-career141-com-quicksand-medium-upper font-[number:var(--career141-com-quicksand-medium-upper-font-weight)] text-[length:var(--career141-com-quicksand-medium-upper-font-size)] tracking-[var(--career141-com-quicksand-medium-upper-letter-spacing)] leading-[var(--career141-com-quicksand-medium-upper-line-height)] [font-style:var(--career141-com-quicksand-medium-upper-font-style)] whitespace-nowrap ${
                        item.isHighlighted
                          ? 'text-career141comelectric-lime'
                          : 'text-career-14-1comwhite'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-career141-com-quicksand-medium-upper font-[number:var(--career141-com-quicksand-medium-upper-font-weight)] text-[length:var(--career141-com-quicksand-medium-upper-font-size)] tracking-[var(--career141-com-quicksand-medium-upper-letter-spacing)] leading-[var(--career141-com-quicksand-medium-upper-line-height)] [font-style:var(--career141-com-quicksand-medium-upper-font-style)] whitespace-nowrap text-career-14-1comwhite cursor-pointer">
                      {item.label}
                    </span>
                  )}
                  {item.hasDropdown && (
                    <span className="pl-[5px] flex items-center">
                      <ChevronDownIcon
                        className="text-career-14-1comwhite [text-shadow:0px_0px_10px_#0000004c]"
                        size={10}
                        strokeWidth={2.5}
                      />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center px-[17px] self-stretch border-r-[0.8px] border-r-[#ffffff2e] border-l-[0.8px] border-l-[#ffffff2e]">
            <div className="flex items-center gap-[5px]">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={social.label}
                    className="flex w-[22px] h-[22px] items-center justify-center rounded-[11px] text-career-14-1comwhite hover:opacity-80 transition-opacity"
                  >
                    <Icon size={11} strokeWidth={1.5} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-center pl-[23.74px] pr-3 self-stretch">
            <div className="inline-flex items-center cursor-pointer">
              <span className="font-career141-com-quicksand-medium-upper font-[number:var(--career141-com-quicksand-medium-upper-font-weight)] text-career-14-1comwhite text-[length:var(--career141-com-quicksand-medium-upper-font-size)] tracking-[var(--career141-com-quicksand-medium-upper-letter-spacing)] leading-[var(--career141-com-quicksand-medium-upper-line-height)] [font-style:var(--career141-com-quicksand-medium-upper-font-style)] whitespace-nowrap">
                LET&#39;S CONNECT
              </span>
              <span className="pl-[5px] flex items-center">
                <ChevronDownIcon
                  className="text-career-14-1comwhite [text-shadow:0px_0px_10px_#0000004c]"
                  size={10}
                  strokeWidth={2.5}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-center px-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XIcon size={24} strokeWidth={2} />
            ) : (
              <MenuIcon size={24} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="flex flex-col md:hidden bg-[rgba(0,0,0,0.88)] w-full py-4 border-t border-[#ffffff1a]">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-6 py-3 border-b border-[#ffffff0d]"
            >
              {item.href ? (
                <a
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`[font-family:'Quicksand',Helvetica] font-medium text-[13px] tracking-[0.05em] ${
                    item.isHighlighted ? 'text-[#cbfc06]' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <span className="[font-family:'Quicksand',Helvetica] font-medium text-[13px] tracking-[0.05em] text-white cursor-pointer">
                  {item.label}
                </span>
              )}
              {item.hasDropdown && (
                <ChevronDownIcon className="text-white" size={14} strokeWidth={2} />
              )}
            </div>
          ))}

          <div className="flex items-center gap-4 px-6 pt-4 pb-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.label}
                  className="flex w-[32px] h-[32px] items-center justify-center rounded-full border border-[#ffffff40] text-white hover:opacity-80 transition-opacity"
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              )
            })}
          </div>
          <div className="px-6 pt-2 pb-4">
            <button className="[font-family:'Quicksand',Helvetica] font-medium text-[13px] tracking-[0.05em] text-white flex items-center gap-1">
              LET&#39;S CONNECT
              <ChevronDownIcon size={12} strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
