'use client'

import { withBasePath } from '@/lib/assetPath'

const imgApparelMerchandisingMarketingScaledWebp = withBasePath("/figmaAssets/apparel-merchandising/Image.png")

function JobsSpecializationsContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 overflow-clip pt-[91.24px] right-0 top-[584.31px]" data-name="div.elementor-element">
      <div className="content-stretch flex flex-col items-start justify-center max-w-[736.09px] relative shrink-0 w-full" data-name="div.elementor-element">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-widget-container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.elementor-heading-title">
            <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[41.6px] text-[#161618] w-full">
              <p className="leading-[49.92px] mb-0">Our Specializations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[60px] items-start left-0 pb-[91.238px] px-[91.238px] right-0 top-0" data-name="div.elementor-element">
        <div className="content-stretch flex flex-col h-[1782.4px] flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="div.elementor-element">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="div.elementor-element">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.elementor-widget-container">
              <div className="h-[831.15px] max-w-[724.989990234375px] relative shrink-0 w-[724.99px]" data-name="Apparel-Merchandising-Marketing-scaled.webp">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgApparelMerchandisingMarketingScaledWebp} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function JobsSpecializations() {
  return (
    <div className="w-full bg-white">
      <JobsSpecializationsContent />
    </div>
  )
}