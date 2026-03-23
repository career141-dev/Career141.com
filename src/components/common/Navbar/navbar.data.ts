import { LinkedinIcon, FacebookIcon } from 'lucide-react'

export const EXECUTIVE_SEARCH_CATEGORIES = [
  [
    'Apparel Merchandising & Marketing',
    'Continuous Improvement',
    'IT Software & Infrastructure Solutions',
    'Mechanical Engineering & Production',
    'Human Resource, L&D, Compensation & Benefit',
    'Digital Transformation',
  ],
  [
    'Finance & Auditing',
    'Data Analytics & Research',
    'Legal & Secretarial',
    'Supply chain & Logistics',
    'Fashion Designing & Development',
  ],
  [
    'Construction & Engineering',
    'EHS',
    'Maintenance Engineering',
    'Marketing, Consumer Insight & Customer Experience',
    'Digital Marketing',
  ],
]

export const NAV_ITEMS = [
  { label: 'EXECUTIVE SEARCH', hasDropdown: true, href: undefined, hasExecDrop: true },
  { label: 'OUR JOURNEY', hasDropdown: false, href: 'https://career141.com/our-journey/', hasExecDrop: false },
  { label: 'OUR CULTURE', hasDropdown: true, href: 'https://career141.com/our-culture/', hasExecDrop: false },
  { label: 'PREMIUM JOBS', hasDropdown: false, href: undefined, hasExecDrop: false },
  { label: 'RESOURCES', hasDropdown: true, href: undefined, hasExecDrop: false },
  { label: 'CONTACT', hasDropdown: false, href: 'https://career141.com/contact-us/', hasExecDrop: false },
]

export const SOCIAL_LINKS = [
  { href: 'https://lk.linkedin.com/company/career-consultants-pvt-ltd', icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'https://web.facebook.com/career141/', icon: FacebookIcon, label: 'Facebook' },
]
