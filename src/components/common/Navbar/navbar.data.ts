import { LinkedinIcon, FacebookIcon } from 'lucide-react'

export const EXECUTIVE_SEARCH_CATEGORIES = [
  [
    { label: 'Apparel Merchandising & Marketing', href: '/jobs/apparel-merchandising-marketing' },
    { label: 'Continuous Improvement', href: '/jobs/continuous-improvement' },
    { label: 'IT Software & Infrastructure Solutions', href: '/jobs/it-software' },
    { label: 'Mechanical Engineering & Production', href: '/jobs/mechanical-engineering' },
    { label: 'Human Resource, L&D, Compensation & Benefit', href: '/jobs/hr-training' },
    { label: 'Digital Transformation', href: '/jobs/digital-transformation' },
  ],
  [
    { label: 'Finance & Auditing', href: '/jobs/finance-auditing' },
    { label: 'Data Analytics & Research', href: '/jobs/data-analytics-research' },
    { label: 'Legal & Secretarial', href: '/jobs/legal-secretarial' },
    { label: 'Supply chain & Logistics', href: '/jobs/supply-chain' },
    { label: 'Fashion Designing & Development', href: '/jobs/fashion-design' },
  ],
  [
    { label: 'Construction & Engineering', href: '/jobs/construction-engineering' },
    { label: 'EHS', href: '/jobs/ehs' },
    { label: 'Maintenance Engineering', href: '/jobs/maintenance-engineering' },
    { label: 'Marketing, Consumer Insight & Customer Experience', href: '/jobs/marketing-customer-experience' },
    { label: 'Digital Marketing', href: '/jobs/digital-marketing' },
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