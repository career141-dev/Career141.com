import clsx from "clsx";
import { useState } from "react";
import { withBasePath } from "@/lib/assetPath";
import svgPaths from "./svg-f3qlllqr03";

const imgDivElementorElement = withBasePath("/figmaAssets/testimonial/17c4028a605359300c9ddb69a9b0ee7da5187dc0.png");
const imgMaskGroupWebp = withBasePath("/figmaAssets/testimonial/c950370038110512e5778a8917c41c855fefff8e.png");
const imgGroup3085Webp = withBasePath("/figmaAssets/testimonial/4070bd9e51852d03cfa7140318625c0573388c17.png");
const imgGroup2679Webp = withBasePath("/figmaAssets/testimonial/b1167b44a1cc44d87ba4da5a08f621d20e08df9a.png");
const imgGroup2676Webp = withBasePath("/figmaAssets/testimonial/382255309c396fda7ea0065e6b5032bdb2dea13e.png");
const imgGroup30891Webp = withBasePath("/figmaAssets/testimonial/79fa2bcfdbd09f91322a514e29542098f2a8d836.png");
const imgGroup30892Webp = withBasePath("/figmaAssets/testimonial/38a839e79cb0d600ece329ffb9d7ee69ff2c3dac.png");
const imgGroup2668Webp = withBasePath("/figmaAssets/testimonial/8bb56835335e113d27a06ab4b8290ba98569a188.png");
const imgGroup3086Webp = withBasePath("/figmaAssets/testimonial/fa39a059ab2c168ecee0e2002acd8ef8192c1732.png");

function Frame() {
  return (
    <div className="relative shrink-0 size-[50px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g clipPath="url(#clip0_1_409)" id="Frame">
          <path d={svgPaths.p36ff1e00} fill="var(--fill-0, #01C5C4)" fillOpacity="0.9" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_409">
            <rect fill="white" height="50" width="50" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PaginationButton({ text, isActive = false, onClick }: { text: string; isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
        className={clsx(
            "flex items-center justify-center h-[41.6px] w-[40px] rounded-[20px] cursor-pointer transition-colors relative font-['Quicksand',sans-serif]",
            isActive ? "bg-[#11593f]" : "bg-transparent"
        )} 
        onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#11593f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <span className={clsx(
          "text-[16px] text-center whitespace-nowrap",
          isActive ? "font-bold text-[#cbfc06]" : "font-semibold text-[#11593f]"
      )}>
        {text}
      </span>
    </div>
  );
}

function ClientCard({ company, name, title, content, image }: { company: string; name: string; title: string; content: string; image: string }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const shortContent = content.length > 180 ? content.substring(0, 180) + '...' : content

    return (
        <div className="bg-white relative rounded-[40px] w-full border border-black border-solid p-6 pt-12 shadow-sm transition-all duration-500">
            <div className="absolute -top-10 left-6 right-8 flex items-end justify-between">
                <div className="flex flex-col h-[56.4px] items-start relative shrink-0 pb-[6.4px]">
                    <Frame />
                </div>
                <div className="max-w-[90px] pointer-events-none relative rounded-[100px] shrink-0 size-[90px]">
                    <div className="absolute inset-0 overflow-hidden rounded-[100px]">
                        <img alt="" className="absolute h-full left-[-0.33%] max-w-none top-0 w-[100.66%] object-cover" src={image} />
                    </div>
                    <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[100px]" />
                </div>
            </div>

            <div className="flex flex-col gap-[10px] mt-4 mb-4">
                <p className="font-['Quicksand',sans-serif] font-bold text-[#5c5c5c] text-[19.2px] leading-tight">{company}</p>
                <p className="font-['Quicksand',sans-serif] font-semibold text-[#808080] text-[16px] leading-tight">{name}</p>
                <p className="font-['Quicksand',sans-serif] font-semibold text-[#808080] text-[12.8px] leading-tight">{title}</p>
            </div>

            <div className="h-[17.6px] py-[8px] relative w-full mb-4">
                <div aria-hidden="true" className="absolute border-[#f2f2f2] border-solid border-t-[1.6px] inset-0 pointer-events-none" />
            </div>

            <div className="flex flex-col gap-4">
                <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'min-h-[144px]' : 'min-h-[100px]'}`}>
                    <div className="font-['Quicksand',sans-serif] font-semibold text-[#626262] text-[16px] leading-[24px]">
                        {isExpanded ? content : shortContent}
                    </div>
                </div>
                {content.length > 180 && (
                    <div className="flex flex-col items-start gap-4">
                         <div className="w-1/3 h-[34px] py-[15px] relative">
                            <div aria-hidden="true" className="absolute border-[#01c5c4] border-solid border-t-4 inset-0 pointer-events-none" />
                         </div>
                         <p 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="font-['Quicksand',sans-serif] font-semibold text-[#37a65e] text-[16px] leading-[24px] cursor-pointer hover:text-[#11593f] transition-colors"
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function DivElementorElement({ currentPage = 1, onPageChange }: { currentPage?: number; onPageChange?: (p: number) => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full overflow-x-hidden">
      {/* Header Intro with White Background */}
      <div className="relative shrink-0 w-full bg-white pt-[140px] pb-16">
        <div className="content-stretch flex flex-col gap-6 items-center px-4 max-w-7xl mx-auto">
          <div className="font-['Quicksand',sans-serif] font-semibold text-[#37a65e] text-[22.4px] text-center uppercase tracking-widest">
            Testimonials
          </div>
          <h1 className="font-['Quicksand',sans-serif] font-semibold text-[#555] text-[44.8px] text-center max-w-4xl leading-[1.2]">
            What Our Clients Say | Sri Lankan, Global Recruitment Testimonials
          </h1>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-white via-[#eeeffe] to-[#f4eec7] pt-20 pb-16">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full mb-16 px-4">
          <div className="flex items-center justify-center gap-6">
            <h2 className="font-['Quicksand',sans-serif] font-normal text-[32px] text-black uppercase tracking-widest leading-none">
              Clients
            </h2>
            <img alt="" className="opacity-60 w-24 h-24 object-contain" src={imgDivElementorElement} />
          </div>
        </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 w-full mb-16 px-4 max-w-7xl mx-auto">
                <ClientCard 
                    company="Brandix"
                    name="Ushan De Silva"
                    title="Group Head of Logistics"
                    image={imgMaskGroupWebp}
                    content="One of my career objective was to join a MNC at some point of my career. However i never expected that it could be achieved in a time where all of us were trying to secure our current job s due to the economic downturn caused by COVID19 outbreak."
                />
                <ClientCard 
                    company="Brandix"
                    name="Asanka Wimalaratna"
                    title="Director / Chief Executive Officer"
                    image={imgMaskGroupWebp}
                    content="Azeem has been a constant go to in our efforts to spot top technical talents in apparel. His deep understanding of the industry, job roles and the strong network has been very helpful to us."
                />
                <ClientCard 
                    company="Unilever"
                    name="Nayani Peiris"
                    title="Head of Employee Relations and Senior HR Business Partner"
                    image={imgGroup3085Webp}
                    content="It has been a tremendous pleasure working with Azeem during the past few years. I had my very first connect with him in 2012 when he reached out to offer me a position in a MNC which I was able to succeed with his guidance. Ever since then he has remained as my go to person."
                />
                <ClientCard 
                    company="George Steuart"
                    name="Achala Silva"
                    title="Director Group Human Resources & Administration"
                    image={imgGroup2679Webp}
                    content="Working with Azeem and the Team in finding the right talent had been a pleasant and a smooth experience. Azeem had been very professional and have promptly adhered to given timelines. Kept us informed the progress time to time enabling us to be updated."
                />
                <ClientCard 
                    company="Avery Dennison"
                    name="Nishantha Navurunnage"
                    title="Director Human Resources Asia Pacific"
                    image={imgGroup2676Webp}
                    content="It has been an absolute pleasure to work with Azeem and his team. We were impressed by their professionalism, commitment, and interest they took to source a suitable candidate for us. We recently used their services to hire a Manager, they performed exceptionally."
                />
                <ClientCard 
                    company="Daraz"
                    name="Kaushal Mendis"
                    title="Chief Human Resources Officer"
                    image={imgGroup30891Webp}
                    content="It is hard to put into words what Azeem Ansar (Career141) has done for me and the organisations for which I have served. Not only was I a candidate, but as an employer, I received exceptional service from Azeem, particularly in senior-level placements."
                />
                <ClientCard 
                    company="Link Natural"
                    name="Ashan Ransilige"
                    title="Chief Executive Officer"
                    image={imgGroup30892Webp}
                    content="As a visionary leader, I drive global holistic wellness by blending innovation with excellence, elevating Sri Lanka's Ayurvedic heritage to the world stage. As a visionary leader, I drive global holistic wellness by blending innovation with excellence."
                />
                <ClientCard 
                    company="Timex"
                    name="Prasad Kavindra"
                    title="CEO"
                    image={imgMaskGroupWebp}
                    content="Azeem has been working with me through out my professional journey in many projects with partnering to attract apparel industry top talent . His dedication and commitment , selecting the right resources within the timelines is excellent. I wish him and the team the best."
                />
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <PaginationButton text="1" isActive={currentPage === 1} onClick={() => onPageChange?.(1)} />
          <PaginationButton text="2" isActive={currentPage === 2} onClick={() => onPageChange?.(2)} />
          <PaginationButton text="3" isActive={currentPage === 3} onClick={() => onPageChange?.(3)} />
          <PaginationButton text="4" isActive={currentPage === 4} onClick={() => onPageChange?.(4)} />
        </div>
      </div>
    </div>
  );
}