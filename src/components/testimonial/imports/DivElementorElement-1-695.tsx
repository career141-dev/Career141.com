import clsx from "clsx";
import { useState } from "react";
import { withBasePath } from "@/lib/assetPath";
import svgPaths from "./svg-np27avrfgc";

const imgDivElementorElement = withBasePath("/figmaAssets/testimonial/4bd109b0a0da7e94073e68c63d22d9e72294f61e.png");
const imgDivElementorElement1 = withBasePath("/figmaAssets/testimonial/17c4028a605359300c9ddb69a9b0ee7da5187dc0.png");

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

function CandidateCard({ name, content }: { name: string; content: string }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const shortContent = content.length > 150 ? content.substring(0, 150) + '...' : content

    return (
        <div className="bg-white relative rounded-[40px] w-full border border-[#e4e4e4] border-solid p-8 shadow-sm transition-all duration-500 flex flex-col">
            <div className="mb-6">
                <Frame />
            </div>
            <div className={`flex-grow transition-all duration-500 overflow-hidden`}>
                <p className="font-['Quicksand',sans-serif] font-semibold text-[#626262] text-[16px] leading-[24px]">
                    {isExpanded ? content : shortContent}
                </p>
            </div>
            <div className="mt-4">
                 <div className="w-1/3 mb-2 h-[34px] py-[15px] relative">
                    <div aria-hidden="true" className="absolute border-[#01c5c4] border-solid border-t-4 inset-0 pointer-events-none" />
                 </div>
                 <div className="flex justify-between items-center">
                    <p className="font-['Quicksand',sans-serif] font-semibold text-[#808080] text-[16px]">{name}</p>
                    <p 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="font-['Quicksand',sans-serif] font-semibold text-[#37a65e] text-[16px] leading-[24px] cursor-pointer hover:text-[#11593f] transition-colors"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </p>
                 </div>
            </div>
        </div>
    );
}

export default function DivElementorElement({ currentPage = 1, onPageChange }: { currentPage?: number; onPageChange?: (p: number) => void }) {
  return (
    <div className="relative w-full pb-24 pt-16 overflow-hidden">
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none" src={imgDivElementorElement} loading="lazy" decoding="async" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex items-center justify-center gap-6 mb-16 relative z-10">
              <h2 className="font-['Quicksand',sans-serif] font-normal text-[32px] text-black uppercase tracking-wider">
                Candidates
              </h2>
              <img alt="" className="opacity-60 w-24 h-24 object-contain" src={imgDivElementorElement1} loading="lazy" decoding="async" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <CandidateCard 
                name="Akarshana Waduge"
                content="I am truly grateful to Career141 for their outstanding support in helping me find better job opportunity. Their professional advice, personalized approach, and encouragement gave me the confidence to take the next step in my career."
              />
              <CandidateCard 
                name="Lakindu Kavindu"
                content="Career 141 provide best professional service for candidates as well as recruiters. More Professional service they offered. I highly recommend them to anyone looking for the right direction in their career journey."
              />
              <CandidateCard 
                name="Fahdan Zaky"
                content="Thank you so much to the entire CAREER141 team for your support! Special thanks to Umar, who was fantastic throughout the entire process – from our first contact on LinkedIn to the final interview day at Richardson."
              />
              <CandidateCard 
                name="Wilson Unesh"
                content="It’s truly wonderful coordinating with Career141, they helped me to find a best place to work with, they always give updates on what’s happening and they follow up whether the candidate is doing good. I highly recommend Career141."
              />
              <CandidateCard 
                name="Sri Vasanthan"
                content="I sincerely appreciate Career141 for their exceptional guidance and support throughout my job search journey. Their professional advice, personalized approach, and continuous encouragement gave me the confidence to advance."
              />
              <CandidateCard 
                name="Pradeep Perera"
                content="During my over 20 years of career journey, it was a pleasure experience with “Career 141” to move on my next level up experience. They are always in touch and co-ordinate with employee and client in negotiations."
              />
              <CandidateCard 
                name="Mahen Chandrasiri"
                content="I really appreciate you taking the time to find this incredible job opportunity. It means a lot! The team was very supportive and guided me through every step of the recruitment process."
              />
              <CandidateCard 
                name="Gayan Poornima"
                content="I am truly grateful to Career141 for guiding me through my career journey. From the very beginning, they took the time to understand my profile, career goals, and expectations. Their team was highly professional."
              />
              <CandidateCard 
                name="Anushka Sandanayake"
                content="My experience with “Career 141” has been nothing short of exceptional. From the very beginning, their team took the time to truly understand my career goals, strengths, and the type of work environment."
              />
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
              <PaginationButton text="1" isActive={currentPage === 1} onClick={() => onPageChange?.(1)} />
              <PaginationButton text="2" isActive={currentPage === 2} onClick={() => onPageChange?.(1)} />
              <PaginationButton text="3" isActive={currentPage === 3} onClick={() => onPageChange?.(1)} />
              <PaginationButton text="4" isActive={currentPage === 4} onClick={() => onPageChange?.(1)} />
              <PaginationButton text="5" isActive={currentPage === 5} onClick={() => onPageChange?.(1)} />
          </div>
      </div>
    </div>
  );
}