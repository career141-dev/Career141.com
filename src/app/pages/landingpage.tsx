import {
  BackgroundSubsection,
  BackgroundWrapperSubsection,
  CompanyOverviewSection,
  ContainerSubsection,
  ExecutiveSearchSpecializationsSection,
  ExecutiveSearchStatsSection,
  GlobalReachSubsection,
  HowWeDifferentiateSection,
  IndustriesSection,
  MainNavigationSection,
  MeetingSchedulerSubsection,
  MobileGlobalReachSubsection,
  TalentAccessSection,
} from '@/components/home/sections'
import { CompanyFooter } from '@/components/common'

export function LandingPage() {
  return (
    <main className="flex flex-col w-full relative" style={{ backgroundColor: 'white' }}>
      <div className="relative overflow-hidden">
        <MainNavigationSection />
        <ExecutiveSearchStatsSection />
      </div>
      <CompanyOverviewSection />
      <HowWeDifferentiateSection />
      <IndustriesSection />
      <ExecutiveSearchSpecializationsSection />
      <TalentAccessSection />
      <BackgroundSubsection />
      <ContainerSubsection />
      <BackgroundWrapperSubsection />
      <MobileGlobalReachSubsection />
      <GlobalReachSubsection />
      <MeetingSchedulerSubsection />
      <CompanyFooter />
    </main>
  )
}
