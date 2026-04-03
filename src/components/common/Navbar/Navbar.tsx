'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon } from 'lucide-react'
import { EXECUTIVE_SEARCH_CATEGORIES, NAV_ITEMS, SOCIAL_LINKS, CULTURE_DROPDOWN_ITEMS, RESOURCES_DROPDOWN_ITEMS, RESOURCES_CATEGORIES } from './navbar.data'
import { withBasePath } from '@/lib/assetPath'

const APPAREL_EXECUTIVE_LABEL = 'Apparel Merchandising & Marketing'
const APPAREL_EXECUTIVE_HREF = '/apparel-merchandising-marketing'



type NavbarProps = {
  bgColor?: string
  variant?: 'overlay' | 'solid'
  sticky?: boolean
}

export function Navbar({ bgColor, variant = 'overlay', sticky = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [execDropOpen, setExecDropOpen] = useState(false)
  const [cultureDropOpen, setCultureDropOpen] = useState(false)
  const [resourcesDropOpen, setResourcesDropOpen] = useState(false)
  const execDropTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cultureDropTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resourcesDropTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const isSolid = variant === 'solid'
  const headerPositionClass = sticky ? 'fixed' : 'absolute'

  const handleExecEnter = () => {
    if (execDropTimeout.current) clearTimeout(execDropTimeout.current)
    setExecDropOpen(true)
  }

  const handleExecLeave = () => {
    execDropTimeout.current = setTimeout(() => setExecDropOpen(false), 150)
  }

  const handleCultureEnter = () => {
    if (cultureDropTimeout.current) clearTimeout(cultureDropTimeout.current)
    setCultureDropOpen(true)
  }

  const handleCultureLeave = () => {
    cultureDropTimeout.current = setTimeout(() => setCultureDropOpen(false), 150)
  }

  const handleResourcesEnter = () => {
    if (resourcesDropTimeout.current) clearTimeout(resourcesDropTimeout.current)
    setResourcesDropOpen(true)
  }

  const handleResourcesLeave = () => {
    resourcesDropTimeout.current = setTimeout(() => setResourcesDropOpen(false), 150)
  }

  return (
    <>
      <header
        className={`top-0 left-0 right-0 z-50 flex w-full items-stretch justify-between border-b border-[#ffffff2e] ${
          isSolid || bgColor
            ? `${headerPositionClass} bg-[#0d1f15]`
            : bgColor
            ? 'absolute'
            : 'absolute bg-[linear-gradient(180deg,rgba(0,0,0,0.21)_40%,rgba(0,0,0,0)_100%)]'
        }`}
        style={bgColor && !isSolid ? { backgroundColor: bgColor } : undefined}
      >
        <Link href="/" className="flex items-center justify-center h-[70px] lg:h-[89.34px] px-4 lg:px-[30.41px] border-r border-[#ffffff2e] shrink-0 hover:opacity-80 transition-opacity">
          <div
            className="w-[138px] h-[45px] lg:w-[200px] lg:h-[65.34px] bg-cover bg-center"
            style={{ backgroundImage: `url(${withBasePath('/figmaAssets/career141-logo-with-20-year-anniversary-mark.png')})` }}
          />
        </Link>

        <nav className="hidden lg:flex items-center flex-1 px-[17.8px]">
          <div className="flex items-center justify-between w-full">
            {NAV_ITEMS.map((item, index) => {
              const isActive = item.href === pathname || (item.hasExecDrop && pathname.startsWith('/executive-search'))
              const isLocal = item.href?.startsWith('/') && !item.href?.startsWith('//')
              
              return (
                <div
                  key={index}
                  className="relative inline-flex items-center px-3 py-[31px] cursor-pointer group"
                  onMouseEnter={item.hasExecDrop ? handleExecEnter : item.label === 'RESOURCES' ? handleResourcesEnter : item.hasDropdown && !item.hasExecDrop ? handleCultureEnter : undefined}
                  onMouseLeave={item.hasExecDrop ? handleExecLeave : item.label === 'RESOURCES' ? handleResourcesLeave : item.hasDropdown && !item.hasExecDrop ? handleCultureLeave : undefined}
                >
                  {item.href ? (
                    isLocal ? (
                      <Link
                        href={item.href}
                        className={`[font-family:'Quicksand',Helvetica] font-medium text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap transition-colors duration-200 ${
                          isActive ? 'text-[#cbfc06]' : 'text-white hover:text-[#cbfc06]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        className="[font-family:'Quicksand',Helvetica] font-medium text-white text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-[#cbfc06] transition-colors duration-200"
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    )
                  ) : (
                    <span
                      className={`[font-family:'Quicksand',Helvetica] font-medium text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap transition-colors duration-200 ${
                        item.hasExecDrop && execDropOpen ? 'text-[#cbfc06]' : 'text-white hover:text-[#cbfc06]'
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                  {item.hasDropdown && (
                    <ChevronDownIcon
                      className={`ml-[5px] shrink-0 transition-all duration-200 ${
                        (item.hasExecDrop && execDropOpen) || (item.label === 'OUR CULTURE' && cultureDropOpen) || (item.label === 'RESOURCES' && resourcesDropOpen) ? 'text-[#cbfc06] rotate-180' : 'text-white group-hover:text-[#cbfc06]'
                      }`}
                      style={{ width: '10.24px', height: '10.24px' }}
                    />
                  )}
                  
                  {item.label === 'OUR CULTURE' && cultureDropOpen && item.dropdownItems && (
                    <div className="absolute top-full left-0 z-[32] bg-white shadow-xl animate-dropdown-fade border-t-2 border-[#006763]">
                      <div className="px-6 py-3">
                        {CULTURE_DROPDOWN_ITEMS.map((menuItem, idx) => (
                          <Link
                            key={idx}
                            href={menuItem.href}
                            className="[font-family:'Quicksand',Helvetica] font-normal text-[#2f2f2f] text-[14px] leading-[1.5] hover:text-[#006763] transition-colors duration-200 cursor-pointer whitespace-nowrap block"
                          >
                            {menuItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.label === 'RESOURCES' && resourcesDropOpen && item.dropdownItems && (
                    <div className="absolute top-full left-0 z-[32] bg-white shadow-xl animate-dropdown-fade border-t-2 border-[#006763]">
                      <div className="px-6 py-3 flex flex-col gap-3">
                        {RESOURCES_DROPDOWN_ITEMS.map((menuItem, idx) => (
                          <Link
                            key={idx}
                            href={menuItem.href}
                            className="[font-family:'Quicksand',Helvetica] font-normal text-[#2f2f2f] text-[14px] leading-[1.5] hover:text-[#006763] transition-colors duration-200 cursor-pointer whitespace-nowrap block"
                          >
                            {menuItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </nav>

        <div className="hidden lg:flex items-center justify-center px-3 border-r border-l border-[#ffffff2e] shrink-0">
          <div className="flex items-center gap-[5px]">
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.label}
                  className="flex items-center justify-center w-[22px] h-[22px] rounded-full hover:opacity-70 transition-opacity duration-200"
                >
                  <Icon className="text-white" style={{ width: '11px', height: '11px' }} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center pl-[23.74px] pr-3 shrink-0">
          <Link href="/contact-us" className="inline-flex items-center [font-family:'Quicksand',Helvetica] font-medium text-white text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-[#cbfc06] transition-colors duration-200">
            LET&apos;S CONNECT
            <ChevronDownIcon className="ml-[5px] text-white shrink-0" style={{ width: '10.24px', height: '10.24px' }} />
          </Link>
        </div>

        <div className="lg:hidden flex items-center justify-center px-5 ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="text-white focus:outline-none">
            {menuOpen ? (
              <svg style={{ width: '24px', height: '24px' }} className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg style={{ width: '24px', height: '24px' }} className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {execDropOpen && (
          <div
            className="hidden lg:block fixed left-0 right-0 z-[32] bg-white shadow-2xl animate-dropdown-fade border-t-2 border-[#006763]"
            style={{ top: '93px' }}
            onMouseEnter={handleExecEnter}
            onMouseLeave={handleExecLeave}
          >
            <div className="max-w-[1200px] mx-auto px-12 py-10">
              <div className="grid grid-cols-3 gap-x-16 gap-y-1">
                {EXECUTIVE_SEARCH_CATEGORIES.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-y-4">
                    {col.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item === APPAREL_EXECUTIVE_LABEL ? APPAREL_EXECUTIVE_HREF : '/executive-search'}
                        className="[font-family:'Quicksand',Helvetica] font-normal text-[#2f2f2f] text-[14px] leading-[1.5] hover:text-[#006763] transition-colors duration-200 cursor-pointer"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000313]/95 flex flex-col pt-[56px] lg:hidden overflow-y-auto">
          <div className="flex flex-col divide-y divide-[#ffffff20]">
            {NAV_ITEMS.map((item, index) => {
              const isLocal = item.href?.startsWith('/') && !item.href?.startsWith('//')
              const isOpen = mobileDropdown === item.label
              const hasMobileDropdown = Boolean(item.hasDropdown)

              const mobileSubmenu = item.label === 'EXECUTIVE SEARCH'
                ? EXECUTIVE_SEARCH_CATEGORIES.flat().map((subItem) => ({
                    label: subItem,
                    href: subItem === APPAREL_EXECUTIVE_LABEL ? APPAREL_EXECUTIVE_HREF : '/executive-search',
                  }))
                : item.label === 'OUR CULTURE'
                ? CULTURE_DROPDOWN_ITEMS
                : item.label === 'RESOURCES'
                ? RESOURCES_DROPDOWN_ITEMS
                : []
              
              return (
                <div key={index} className="px-6 py-4">
                  <div className="flex items-center justify-between gap-4">
                    {item.href && !hasMobileDropdown ? (
                      isLocal ? (
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="[font-family:'Quicksand',Helvetica] font-medium text-white text-[14px] tracking-[0.5px] leading-[21px]"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          rel="noopener noreferrer"
                          target="_blank"
                          onClick={() => setMenuOpen(false)}
                          className="[font-family:'Quicksand',Helvetica] font-medium text-white text-[14px] tracking-[0.5px] leading-[21px]"
                        >
                          {item.label}
                        </a>
                      )
                    ) : item.href && hasMobileDropdown ? (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="[font-family:'Quicksand',Helvetica] font-medium text-white text-[14px] tracking-[0.5px] leading-[21px]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="[font-family:'Quicksand',Helvetica] font-medium text-white text-[14px] tracking-[0.5px] leading-[21px]">
                        {item.label}
                      </span>
                    )}

                    {item.hasDropdown && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        onClick={() => setMobileDropdown(isOpen ? null : item.label)}
                        className="flex items-center justify-center w-8 h-8 -mr-1 text-white"
                      >
                        <ChevronDownIcon className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} style={{ width: '14px', height: '14px' }} />
                      </button>
                    )}
                  </div>

                  {hasMobileDropdown && isOpen && mobileSubmenu.length > 0 && (
                    <div className="mt-3 ml-3 border-l border-[#ffffff20] pl-4 flex flex-col gap-2">
                      {mobileSubmenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          onClick={() => setMenuOpen(false)}
                          className="[font-family:'Quicksand',Helvetica] text-white/80 text-[13px] leading-[1.5] hover:text-[#cbfc06]"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <div className="px-6 py-5 flex items-center gap-5">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={social.label}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-[#ffffff40]"
                  >
                    <Icon className="text-white" style={{ width: '14px', height: '14px' }} />
                  </a>
                )
              })}
              <Link
                href="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="[font-family:'Quicksand',Helvetica] font-medium text-[#cbfc06] text-[14px] tracking-[0.5px] ml-auto uppercase"
              >
                LET&apos;S CONNECT
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}