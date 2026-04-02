import type { Job } from '@/components/common/JobCard'

export type PremiumJob = Job & {
  slug: string
}

export const premiumJobCards: PremiumJob[] = [
  { slug: 'head-of-operations-modern-trade-supermarket-chain', industry: 'Other', title: 'Head of Operations - Modern Trade (Supermarket Chain)', currency: 'LKR', salaryMin: '', salaryMax: '-', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'senior-sales-manager', industry: 'Other', title: 'Senior Sales Manager', currency: 'LKR', salaryMin: '1,000,000', salaryMax: '1,200,000', location: 'Saudi Arabia', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'executive-research-business-development', industry: 'Other', title: 'EXECUTIVE - RESEARCH & BUSINESS DEVELOPMENT', currency: 'LKR', salaryMin: '55,000', salaryMax: '65,000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'accountant', industry: 'Power & Energy', title: 'Accountant', currency: 'LKR', salaryMin: '200,000', salaryMax: '250,000', location: 'Sri Lanka', type: 'Power & Energy', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'general-manager-sales-4-wheeler-cars-suv', industry: 'Automative', title: 'General Manager - Sales (4 Wheeler Cars & SUV)', currency: 'LKR', salaryMin: '1,200,000', salaryMax: '', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'general-manager-sales', industry: 'Automative', title: 'General Manager - Sales', currency: 'LKR', salaryMin: '1,200,000', salaryMax: '', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'chief-operating-officer', industry: 'Apparel', title: 'Chief Operating Officer', currency: 'USD', salaryMin: '10,000', salaryMax: '', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'procurement-manager', industry: 'Other', title: 'Procurement Manager', currency: 'LKR', salaryMin: '400,000', salaryMax: '550,000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'manager-senior-manager-digital-marketing', industry: 'Information Technology', title: 'Manager / Senior Manager Digital Marketing', currency: 'LKR', salaryMin: '450,000', salaryMax: '550,000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'manager-quality-assurance', industry: 'Apparel', title: 'Manager - Quality Assurance', currency: 'LKR', salaryMin: '320,000', salaryMax: '420,000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'cutting-manager', industry: 'Apparel', title: 'Cutting Manager', currency: 'LKR', salaryMin: '320,000', salaryMax: '420,000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'cluster-manager-human-resources', industry: 'Apparel', title: 'Cluster Manager - Human Resources', currency: 'LKR', salaryMin: '650,000', salaryMax: '800,000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
]

export function getPremiumJobBySlug(slug: string): PremiumJob | undefined {
  return premiumJobCards.find((job) => job.slug === slug)
}
