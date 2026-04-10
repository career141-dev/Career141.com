'use client'

import { withBasePath } from '@/lib/assetPath'

const whyChooseUsData = [
  {
    title: "Strategic Partnership",
    description: "We strive to be more than just a service provider; we aim to be a trusted strategic partner, deeply invested in the success and growth of our clients."
  },
  {
    title: "Excellence in Execution",
    description: "We set high standards for the quality of our work, consistently delivering results with precision, efficiency, and excellence."
  },
  {
    title: "Client-Centric Excellence",
    description: "We are dedicated to delivering exceptional service that goes beyond expectations, ensuring our clients' success is at the forefront of everything we do."
  }
]

function JobsWhyChooseUsContent() {
  return (
<div className="w-full py-[91.238px] px-[91.238px]">
      <div className="flex flex-col gap-[60px] items-center w-full max-w-[1204.5px] mx-auto">
        <div className="flex flex-row items-center justify-end w-full">
          <div className="relative">
            <img 
              src={withBasePath("/figmaAssets/apparel-merchandising/ba26325f25ea90ec9589dd493c4e7ac2998f53d0.png")} 
              alt="Why Choose Us"
              className="w-[180px] h-auto object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-end pr-8">
              <div className="font-['Quicksand:Bold',sans-serif] font-bold text-[#444444] text-[38.4px]">
                <p className="leading-[38.4px] whitespace-nowrap">Why Choose Us?</p>
              </div>
            </div>
          </div>
</div>
  
        <div className="md:hidden flex flex-col gap-4 w-full">
          {whyChooseUsData.map((item, index) => (
            <div 
              key={index}
              className="w-full rounded-[20px] p-6"
              style={{
                background: 'linear-gradient(90deg, #ecf1fd 0%, #d8fee8 50%, #f0f1cc 100%)',
              }}
            >
              <div className="flex flex-col items-start gap-3">
                <div className="font-['Quicksand:Bold',sans-serif] font-bold text-[#11593f] text-[22px]">
                  <p className="leading-[27.2px]">{item.title}</p>
                </div>
                <div className="font-['Inter:Regular',sans-serif] font-normal text-[#252525] text-[14px]">
                  <p className="leading-[24px]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="hidden md:block">
          <div 
            className="w-full rounded-[28px] p-[40px]"
            style={{
              background: 'linear-gradient(90deg, #ecf1fd 0%, #d8fee8 50%, #f0f1cc 100%)',
            }}
          >
            <div className="flex flex-row items-center justify-center gap-[40px] w-full max-w-[1640px] mx-auto rounded-[20px] p-[10px]">
              {whyChooseUsData.map((item, index) => (
                <div 
                  key={index}
                  className="flex-1 relative rounded-[20px] p-[40px]"
                  style={{ 
                    background: 'transparent',
                  }}
                >
<div className="flex flex-col items-start gap-[20px]">
                    <div className="relative">
                      <img 
                        src={withBasePath("/images/jobs/triangle.png")} 
                        alt=""
                        className="w-15 h-15"
                      />
                      <div className="absolute top-[15px] left-[55%]">
                        <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold text-[#11593f] text-[28px] whitespace-nowrap">
                          {item.title}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal text-[#252525] text-[15px]">
                      <p className="leading-[24px]">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function JobsWhyChooseUs() {
  return (
    <div className="w-full bg-white">
      <JobsWhyChooseUsContent />
    </div>
  )
}