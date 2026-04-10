'use client'

const brandsData = [
  { name: "Brand 1", color: "#9e1b32" },
  { name: "Brand 2", color: "#0066b1" },
  { name: "Brand 3", color: "#ed1c24" },
  { name: "Brand 4", color: "#000000" },
  { name: "Brand 5", color: "#2e3192" },
]

function JobsBrandsContent() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-0 px-[121.662px] right-0 top-[556.8px]" data-name="div.elementor-element">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="div.elementor-element">
        <div className="content-stretch flex flex-col items-start min-w-[321.19000244140625px] pr-[43.28px] relative shrink-0" data-name="div.elementor-widget-container">
          <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4c4c4c] text-[35.2px] whitespace-nowrap">
            <p className="leading-[35.2px] mb-0">Worked with th</p>
            <p className="leading-[35.2px]">best brands</p>
          </div>
        </div>
      </div>

      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        {brandsData.map((brand, index) => (
          <div key={index} className="flex-1 flex items-center justify-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: brand.color }}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function JobsBrands() {
  return (
    <div className="w-full bg-white py-10">
      <JobsBrandsContent />
    </div>
  )
}