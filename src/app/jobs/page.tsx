import { JobsPage } from '@/components/jobs/JobsPage'
import jobsData from '@/data/jobs.json'

export const metadata = {
  title: 'Jobs | Career141',
  description: 'Explore job opportunities at Career141 - Connecting talent with leading companies across apparel, textile, and RMG industries.',
}

export default function Page() {
  const heroData = jobsData.sections[0]

  return (
    <JobsPage 
      heroData={heroData}
      showSections={{ 
        hero: true,
        whyChooseUs: true,
        unequalledProficiency: true,
        statsSection: true,
        emptySection: false,
        jobsListingSection: true,
        brandsSection: true,
        testimonialsSection: true,
        specializations: false,
        brands: false,
        globalReach: true,
      }} />
  )
}