'use client'

import Link from 'next/link'

const navLinks = [
  { label: 'OUR JOURNEY', href: '#' },
  { label: 'EXECUTIVE SEARCH', href: '#' },
  { label: 'OUR CULTURE', href: '#' },
  { label: 'PREMIUM JOBS', href: '#' },
  { label: 'BLOG', href: '#' },
  { label: 'EVENTS', href: '#' },
  { label: "LET'S TALK", href: '#', isCTA: true },
]

export function NavigationHeader() {
  return (
    <header className="flex flex-wrap justify-between items-center py-5 md:py-6 border-b border-[#EEF2F6]">
      <div className="text-[28px] font-extrabold tracking-[-0.02em] text-[#0A2540]">
        career<span className="font-bold text-[#1E6F5C]">144</span>
      </div>
      
      <nav className="flex flex-wrap gap-7 md:gap-[28px]">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`text-[15px] font-medium transition-colors ${
              link.isCTA 
                ? 'bg-[#1E6F5C] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#155A4A]' 
                : 'text-[#2C3E4E] hover:text-[#1E6F5C]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
