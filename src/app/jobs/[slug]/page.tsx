import { JobsPage } from '@/components/jobs/JobsPage'
import jobsData from '@/data/jobs.json'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return jobsData.sections.map((section) => ({
    slug: section.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const section = jobsData.sections.find((s) => s.slug === slug)
  
  if (!section) {
    return {
      title: 'Not Found | Career141',
    }
  }

  return {
    title: `${section.shortTitle} Jobs | Career141`,
    description: section.description,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const section = jobsData.sections.find((s) => s.slug === slug)

  if (!section) {
    notFound()
  }

  return (
    <JobsPage 
      heroData={section}
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
      }} 
    />
  )
}