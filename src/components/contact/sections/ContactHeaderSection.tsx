'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MenuIcon, XIcon } from 'lucide-react'
import { withBasePath } from '@/lib/assetPath'

type LinkItem = {
  label: string
  href: string
}

const executiveSearchItems: LinkItem[] = [
  { label: 'Retained Search', href: 'https://career141.com/retained-search/' },
  { label: 'Contingency Search', href: 'https://career141.com/contingency-search/' },
  { label: 'Board & C-Suite', href: 'https://career141.com/board-c-suite/' },
  { label: 'Leadership Assessment', href: 'https://career141.com/leadership-assessment/' },
]

const ourCultureItems: LinkItem[] = [
  { label: 'Life at Career141', href: 'https://career141.com/our-culture/' },
  { label: 'Join Us', href: 'https://career141.com/our-culture/#join' },
]

const resourcesItems: LinkItem[] = [
  { label: 'Blog', href: 'https://career141.com/blog/' },
  { label: 'Case Studies', href: 'https://career141.com/case-studies/' },
  { label: 'Whitepapers', href: 'https://career141.com/whitepapers/' },
]

const navItems = [
  { label: 'EXECUTIVE SEARCH', hasDropdown: true, href: '', items: executiveSearchItems },
  { label: 'OUR JOURNEY', hasDropdown: false, href: '/our-journey', items: [] },
  { label: 'OUR CULTURE', hasDropdown: true, href: '', items: ourCultureItems },
  { label: 'PREMIUM JOBS', hasDropdown: false, href: '/premium-jobs', items: [] },
  { label: 'RESOURCES', hasDropdown: true, href: '', items: resourcesItems },
  { label: 'CONTACT', hasDropdown: false, href: '/contact-us', highlight: true, items: [] },
]

function DropdownMenu({ items, isOpen }: { items: LinkItem[]; isOpen: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 min-w-[200px] bg-[#0c2d1e] border border-white/10 shadow-xl rounded-b-lg overflow-hidden transition-all duration-200 z-50 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-3 text-white/80 text-[12.8px] font-medium font-['Quicksand',Helvetica] hover:bg-[#37a65e] hover:text-white transition-colors border-b border-white/5 last:border-0"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

export function ContactHeaderSection() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleNavClick = (index: number, item: (typeof navItems)[number]) => {
    if (item.hasDropdown) {
      setOpenDropdown(openDropdown === index ? null : index)
      return
    }

    setOpenDropdown(null)
    setMobileOpen(false)
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#0d1f15] shadow-lg' : 'bg-[#0d1f15]'
      }`}
    >
      <div className="flex md:hidden w-full items-center justify-between px-4 py-3">
        <Link href="/" className="block">
          <div
            className="w-[130px] h-[42px] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${withBasePath('/figmaAssets/career141-logo-with-20-year-anniversary-mark.png')})` }}
          />
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      <div className="hidden md:flex w-full items-stretch justify-between border-b border-[#ffffff2e]">
        <div className="flex items-center justify-center py-2 px-[30px] border-r border-[#ffffff2e] shrink-0">
          <Link href="/">
            <div
              className="w-[160px] h-[52px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${withBasePath('/figmaAssets/career141-logo-with-20-year-anniversary-mark.png')})` }}
            />
          </Link>
        </div>

        <nav className="flex items-center flex-1 px-4">
          <div className="flex items-center justify-between w-full">
            {navItems.map((item, index) => {
              const isInternal = item.href.startsWith('/')
              return (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => handleNavClick(index, item)}
                      className={`flex items-center px-3 py-[28px] font-['Quicksand',Helvetica] font-medium text-[12.8px] whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent ${
                        item.highlight ? 'text-[#cbfc06]' : 'text-white hover:text-[#cbfc06]'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`ml-1 w-[10px] h-[10px] shrink-0 transition-transform duration-200 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : isInternal ? (
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-[28px] font-['Quicksand',Helvetica] font-medium text-[12.8px] whitespace-nowrap transition-colors ${
                        item.highlight ? 'text-[#cbfc06]' : 'text-white hover:text-[#cbfc06]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-3 py-[28px] font-['Quicksand',Helvetica] font-medium text-[12.8px] whitespace-nowrap transition-colors ${
                        item.highlight ? 'text-[#cbfc06]' : 'text-white hover:text-[#cbfc06]'
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                  {item.hasDropdown && <DropdownMenu items={item.items} isOpen={openDropdown === index} />}
                </div>
              )
            })}
          </div>
        </nav>

        <div className="flex items-center justify-center px-4 border-r border-l border-[#ffffff2e] gap-2 shrink-0">
          <a
            href="https://lk.linkedin.com/company/career-consultants-pvt-ltd"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
            className="flex w-8 h-8 items-center justify-center rounded-full text-white hover:text-[#cbfc06] hover:bg-white/10 transition-all"
          >
            <LinkedinIcon className="w-[14px] h-[14px]" />
          </a>
          <a
            href="https://web.facebook.com/career141/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Facebook"
            className="flex w-8 h-8 items-center justify-center rounded-full text-white hover:text-[#cbfc06] hover:bg-white/10 transition-all"
          >
            <FacebookIcon className="w-[14px] h-[14px]" />
          </a>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0d1f15] border-t border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {navItems.map((item, index) => {
          const isInternal = item.href.startsWith('/')
          return (
            <div key={item.label} className="border-b border-white/5">
              {item.hasDropdown ? (
                <button
                  type="button"
                  onClick={() => handleNavClick(index, item)}
                  className={`flex items-center justify-between w-full px-6 py-4 font-['Quicksand',Helvetica] font-semibold text-[13px] transition-colors border-none bg-transparent ${
                    item.highlight ? 'text-[#cbfc06]' : 'text-white hover:text-[#cbfc06]'
                  }`}
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : isInternal ? (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between w-full px-6 py-4 font-['Quicksand',Helvetica] font-semibold text-[13px] transition-colors ${
                    item.highlight ? 'text-[#cbfc06]' : 'text-white hover:text-[#cbfc06]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between w-full px-6 py-4 font-['Quicksand',Helvetica] font-semibold text-[13px] transition-colors ${
                    item.highlight ? 'text-[#cbfc06]' : 'text-white hover:text-[#cbfc06]'
                  }`}
                >
                  {item.label}
                </a>
              )}
              {item.hasDropdown && openDropdown === index && (
                <div className="bg-[#071510]">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-10 py-3 text-white/70 text-[12px] font-['Quicksand',Helvetica] hover:text-[#cbfc06] transition-colors border-b border-white/5 last:border-0"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}

        <div className="flex items-center gap-4 px-6 py-4">
          <a
            href="https://www.instagram.com/life_at_career141/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Instagram"
            className="flex w-9 h-9 items-center justify-center rounded-full border border-white/30 text-white hover:border-[#cbfc06] hover:text-[#cbfc06] transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://lk.linkedin.com/company/career-consultants-pvt-ltd"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
            className="flex w-9 h-9 items-center justify-center rounded-full border border-white/30 text-white hover:border-[#cbfc06] hover:text-[#cbfc06] transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
