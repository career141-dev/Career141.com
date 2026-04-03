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

export const CULTURE_DROPDOWN_ITEMS = [
  { label: 'Events', href: '/events' },
]

export const RESOURCES_DROPDOWN_ITEMS = [
  { label: 'Blogs', href: '/blogs' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Testimonials', href: '/testimonial' },
]

export const RESOURCES_CATEGORIES = [
  [
    { label: 'Case Study', href: '/case-studies' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Testimonial', href: '/testimonials' },
  ]
]

export const NAV_ITEMS = [
  { label: 'EXECUTIVE SEARCH', hasDropdown: true, href: '/executive-search', hasExecDrop: true },
  { label: 'OUR JOURNEY', hasDropdown: false, href: '/our-journey', hasExecDrop: false },
  { label: 'OUR CULTURE', hasDropdown: true, href: '/our-culture', hasExecDrop: false, dropdownItems: CULTURE_DROPDOWN_ITEMS },
  { label: 'PREMIUM JOBS', hasDropdown: false, href: '/premium-jobs', hasExecDrop: false },
  { label: 'RESOURCES', hasDropdown: true, href: undefined, hasExecDrop: false, dropdownItems: RESOURCES_DROPDOWN_ITEMS, hasResourceDrop: true },
  { label: 'CONTACT', hasDropdown: false, href: '/contact-us', hasExecDrop: false },
]

export const SOCIAL_LINKS = [
  { href: 'https://lk.linkedin.com/company/career-consultants-pvt-ltd', icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'https://web.facebook.com/career141/', icon: FacebookIcon, label: 'Facebook' },
]