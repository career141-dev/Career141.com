'use client'

import { withBasePath } from '@/lib/assetPath'

const proficiencyImage = withBasePath("/images/jobs/div.elementor-element.png")

const leftColumnRoles = [
  "Director",
  "Managing Director",
  "Vice President",
  "Asst. Manager",
  "AGM",
]

const rightColumnRoles = [
  "Partner",
  "CEO",
  "GM",
  "Senior Manager",
  "Executive",
]

function JobsUnequalledProficiencyContent() {
  return (
    <div className="w-full py-[91.238px] px-[91.238px]">
      {/* Mobile: Left side first, then image */}
      <div className="md:hidden flex flex-col gap-8">
        {/* Left Side - Title and Bullet Points */}
        <div>
          <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold text-[#161618] text-[28px] mb-4">
            <p className="leading-[35.2px] mb-0">Unequalled proficiency in all aspects of Talent access</p>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              {leftColumnRoles.map((role, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#37A65E]" />
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#252525] text-[14px]">
                    {role}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {rightColumnRoles.map((role, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#37A65E]" />
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#252525] text-[14px]">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image after left content */}
        <div>
          <div className="w-full h-auto rounded-[28px] overflow-hidden">
            <img 
              src={proficiencyImage} 
              alt="Talent access illustration" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Desktop: Side by side */}
      <div className="hidden md:flex flex-row items-start gap-[60px] w-full max-w-[1204.5px] mx-auto">
        {/* Left Side - Title and Bullet Points */}
        <div className="flex-1">
          <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold text-[#161618] text-[35.2px] mb-[40px]">
            <p className="leading-[35.2px] mb-0">Unequalled proficiency in all</p>
            <p className="leading-[35.2px]">
              <span>aspects of </span>
              <span className="text-[#0c2340]">Talent access</span>
            </p>
          </div>

          <div className="flex flex-row gap-[40px]">
            {/* Left Column */}
            <div className="flex flex-col">
              {leftColumnRoles.map((role, index) => (
                <div key={index} className="flex items-center gap-[10px] mb-[15px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#37A65E]" />
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#252525] text-[18px]">
                    {role}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
              {rightColumnRoles.map((role, index) => (
                <div key={index} className="flex items-center gap-[10px] mb-[15px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#37A65E]" />
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#252525] text-[18px]">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <div className="w-full h-auto rounded-[28px] overflow-hidden">
            <img 
              src={proficiencyImage} 
              alt="Talent access illustration" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function JobsUnequalledProficiency() {
  return (
    <div className="w-full bg-white">
      <JobsUnequalledProficiencyContent />
    </div>
  )
}