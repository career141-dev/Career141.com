'use client'

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-[#5B6E7C] my-7">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-2">{'>'}</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#5B6E7C] hover:text-[#1E6F5C] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className={item.isActive ? 'text-[#0A2540] font-medium' : ''}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}
