import {
  CompanyOverviewSection,
  ExecutiveSearchSpecializationsSection,
  ExecutiveSearchStatsSection,
  HowWeDifferentiateSection,
  IndustriesSection,
  MainNavigationSection,
  TalentAccessSection,
} from '@/components/home/sections'

export function LandingPage() {
  return (
    <main className="flex flex-col w-full">
      <div className="relative">
        <MainNavigationSection />
        <ExecutiveSearchStatsSection />
      </div>
      <CompanyOverviewSection />
      <HowWeDifferentiateSection />
      <IndustriesSection />
      <ExecutiveSearchSpecializationsSection />
      <TalentAccessSection />
    </main>
  )
}
