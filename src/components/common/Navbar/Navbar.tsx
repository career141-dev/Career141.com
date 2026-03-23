'use client'

import { useRef, useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { EXECUTIVE_SEARCH_CATEGORIES, NAV_ITEMS, SOCIAL_LINKS } from './navbar.data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [execDropOpen, setExecDropOpen] = useState(false)
  const execDropTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleExecEnter = () => {
    if (execDropTimeout.current) clearTimeout(execDropTimeout.current)
    setExecDropOpen(true)
  }

  const handleExecLeave = () => {
    execDropTimeout.current = setTimeout(() => setExecDropOpen(false), 150)
  }

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 flex w-full items-stretch justify-between border-b border-[#ffffff2e] bg-[linear-gradient(180deg,rgba(0,0,0,0.21)_40%,rgba(0,0,0,0)_100%)]">
        <div className="flex items-center justify-center h-[70px] lg:h-[89.34px] px-4 lg:px-[30.41px] border-r border-[#ffffff2e] shrink-0">
          <div className="w-[140px] h-[46px] lg:w-[200px] lg:h-[65.34px] bg-[url(/figmaAssets/career141-logo-with-20-year-anniversary-mark.png)] bg-cover bg-center" />
        </div>

        <nav className="hidden lg:flex items-center flex-1 px-[17.8px]">
          <div className="flex items-center justify-between w-full">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={index}
                className="relative inline-flex items-center px-3 py-[31px] cursor-pointer group"
                onMouseEnter={item.hasExecDrop ? handleExecEnter : undefined}
                onMouseLeave={item.hasExecDrop ? handleExecLeave : undefined}
              >
                {item.href ? (
                  <a
                    className="[font-family:'Quicksand',Helvetica] font-medium text-white text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-[#cbfc06] transition-colors duration-200"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
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
                      item.hasExecDrop && execDropOpen ? 'text-[#cbfc06] rotate-180' : 'text-white group-hover:text-[#cbfc06]'
                    }`}
                    style={{ width: '10.24px', height: '10.24px' }}
                  />
                )}
              </div>
            ))}
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
          <button className="inline-flex items-center [font-family:'Quicksand',Helvetica] font-medium text-white text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-[#cbfc06] transition-colors duration-200">
            LET&apos;S CONNECT
            <ChevronDownIcon className="ml-[5px] text-white shrink-0" style={{ width: '10.24px', height: '10.24px' }} />
          </button>
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
                    <a
                      key={itemIdx}
                      href="https://career141.com/executive-search/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="[font-family:'Quicksand',Helvetica] font-normal text-[#2f2f2f] text-[14px] leading-[1.5] hover:text-[#006763] transition-colors duration-200 cursor-pointer"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000313]/95 flex flex-col pt-[70px] lg:hidden overflow-y-auto">
          <div className="flex flex-col divide-y divide-[#ffffff20]">
            {NAV_ITEMS.map((item, index) => (
              <div key={index} className="flex items-center justify-between px-6 py-4">
                {item.href ? (
                  <a
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => setMenuOpen(false)}
                    className="[font-family:'Quicksand',Helvetica] font-medium text-white text-[14px] tracking-[0.5px] leading-[21px]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="[font-family:'Quicksand',Helvetica] font-medium text-white text-[14px] tracking-[0.5px] leading-[21px]">
                    {item.label}
                  </span>
                )}
                {item.hasDropdown && <ChevronDownIcon className="text-white" style={{ width: '14px', height: '14px' }} />}
              </div>
            ))}

            <div className="px-6 py-4 bg-[#001a1a]">
              <p className="[font-family:'Quicksand',Helvetica] text-[#cbfc06] text-[11px] font-semibold tracking-[1px] mb-3 uppercase">
                Executive Search Areas
              </p>
              <div className="flex flex-col gap-2">
                {EXECUTIVE_SEARCH_CATEGORIES.flat().map((item, i) => (
                  <a
                    key={i}
                    href="https://career141.com/executive-search/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="[font-family:'Quicksand',Helvetica] text-white/80 text-[13px] leading-[1.5] hover:text-[#cbfc06]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

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
              <span className="[font-family:'Quicksand',Helvetica] font-medium text-white text-[14px] tracking-[0.5px] ml-auto">
                LET&apos;S CONNECT
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
