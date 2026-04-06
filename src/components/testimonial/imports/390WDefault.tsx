import clsx from "clsx";
import { withBasePath } from "@/lib/assetPath";
import rawSvgPaths from "./svg-6m3w3nzzg8";

const imgDivElementorElement = withBasePath("/figmaAssets/testimonial/17c4028a605359300c9ddb69a9b0ee7da5187dc0.png");
const imgGroup3087Webp = withBasePath("/figmaAssets/testimonial/e18349222d5bac12ef0f29b45387a19fe672faf3.png");
const imgGroup3088Webp = withBasePath("/figmaAssets/testimonial/e9f4a609a4b684ca4c557accfd582a1232+f456d0.png");
const imgGroup3089Webp = withBasePath("/figmaAssets/testimonial/fadb5331d875b978b81c685bcc6146ab1c27cba3.png");
const imgDivElementorElement1 = withBasePath("/figmaAssets/testimonial/4bd109b0a0da7e94073e68c63d22d9e72294f61e.png");
const imgDivElementorElement2 = withBasePath("/figmaAssets/testimonial/032702031c80235a48f8edff72693cef0a9031ec.png");
const imgDivElementorElement3 = withBasePath("/figmaAssets/testimonial/f5fc7d0a8ab3374cd43c8bfed2b6b9ba03f8d49d.png");
const imgDivRcAnchorLogoImg = withBasePath("/figmaAssets/testimonial/4736508c795667dcea21f8d864233031223b7832.png");
const svgPaths = rawSvgPaths as Record<string, string>;

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

function MobileCard({ company, name, title, content, image }: { company: string; name: string; title: string; content: string; image?: string }) {
    return (
        <div className="bg-white min-h-[380px] relative rounded-[20px] w-full border border-black border-solid p-6 pt-12 flex flex-col mb-12">
            <div className="absolute -top-8 left-6 right-8 flex items-end justify-between">
                <Frame />
                {image && (
                   <div className="w-[80px] h-[80px] rounded-full border border-black overflow-hidden bg-white">
                       <img src={image} className="w-full h-full object-cover" alt={name} loading="lazy" decoding="async" />
                   </div>
                )}
            </div>
            <div className="flex flex-col gap-1 mb-4 pt-4">
                <div className="font-['Quicksand',sans-serif] font-bold text-[#5c5c5c] text-[19.2px] leading-tight">{company}</div>
                <div className="font-['Quicksand',sans-serif] font-semibold text-[#808080] text-[16px] leading-tight">{name}</div>
                <div className="font-['Quicksand',sans-serif] font-semibold text-[#808080] text-[12.8px] leading-tight">{title}</div>
            </div>
            <div className="w-full h-px bg-[#f2f2f2] mb-4"></div>
            <div className="flex-grow font-['Quicksand',sans-serif] font-semibold text-[#626262] text-[16px] leading-[24px]">
                {content}
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <div className="w-1/3 border-t-4 border-[#01c5c4] pt-2"></div>
                <div className="text-[#37a65e] font-['Quicksand',sans-serif] font-semibold text-[16px] text-right cursor-pointer">Read More</div>
            </div>
        </div>
    );
}

function Pagination({ current, total, onChange }: { current: number; total: number; onChange?: (p: number) => void }) {
    return (
        <div className="flex justify-center items-center gap-3 py-8">
            {Array.from({ length: total }, (_, i) => i + 1).map(p => (
                <div 
                    key={p} 
                    onClick={() => onChange?.(p)}
                    className={clsx(
                        "w-10 h-10 rounded-full border flex items-center justify-center font-['Quicksand',sans-serif] cursor-pointer transition-colors text-[16px]",
                        current === p ? "bg-[#11593f] text-[#cbfc06] border-[#11593f] font-bold" : "bg-white text-[#11593f] border-[#11593f] font-semibold"
                    )}
                >
                    {p}
                </div>
            ))}
        </div>
    );
}

export default function Component390WDefault({ 
    clientsPage = 1, 
    candidatesPage = 1,
    onClientsPageChange,
    onCandidatesPageChange 
}: { 
    clientsPage?: number; 
    candidatesPage?: number;
    onClientsPageChange?: (p: number) => void;
    onCandidatesPageChange?: (p: number) => void;
}) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full overflow-x-hidden">
      {/* Header Intro for Mobile */}
      <div className="bg-white w-full pt-[100px] pb-12">
        <div className="px-6 flex flex-col items-center gap-6">
            <div className="text-[#37a65e] font-['Quicksand',sans-serif] font-semibold text-[22.4px] uppercase tracking-widest text-center">Testimonials</div>
            <h1 className="font-['Quicksand',sans-serif] font-semibold text-[#555] text-[28px] text-center leading-tight">
               What Our Clients Say | Sri Lankan, Global Recruitment Testimonials
            </h1>
        </div>
      </div>

      {/* Clients Section with Restored Gradient */}
      <div className="w-full bg-gradient-to-b from-white via-[#eeeffe] to-[#f4eec7] pt-20 pb-16">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full mb-16 px-4">
          <div className="flex items-center justify-center gap-6">
            <h2 className="font-['Quicksand',sans-serif] font-normal text-[32px] text-black uppercase tracking-widest leading-none">
              Clients
            </h2>
            <img alt="" className="opacity-60 w-16 h-16 md:w-24 md:h-24 object-contain" src={imgDivElementorElement} loading="lazy" decoding="async" />
          </div>
        </div>
        
        <div className="px-6 flex flex-col gap-8">
              <MobileCard 
                company="Ananta Intimate Division"
                name="Nawaff Mubarak"
                title="Chief Executive Officer"
                image={imgGroup3087Webp}
                content="Azeem has been a mentor and career advisor and was able to guide me on numerous occasions, giving me the confidence to take on challenging c-suite positions within the industry."
              />
              <MobileCard 
                company="FCI"
                name="Devinda Peries"
                title="Director Marketing"
                image={imgGroup3088Webp}
                content="It gives me great pleasure to write this note of recommendation! After working at MAS Intimates for nearly 16 years I was quite apprehensive to talk to anyone outside of my comfort zone."
              />
        </div>
        <Pagination current={clientsPage} total={4} onChange={onClientsPageChange} />
      </div>

      {/* Candidates Section */}
      <div className="px-6 py-12 relative overflow-hidden">
          <img src={imgDivElementorElement1} className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" loading="lazy" decoding="async" />
          <div className="relative z-10">
              <div className="flex items-center justify-center gap-6 mb-16 relative z-10">
              <h2 className="font-['Quicksand',sans-serif] font-normal text-[32px] text-black uppercase tracking-wider">
                Candidates
              </h2>
              <img alt="" className="opacity-60 w-16 h-16 md:w-24 md:h-24 object-contain" src={imgDivElementorElement1} loading="lazy" decoding="async" />
          </div>
              
              <MobileCard 
                company="Candidate"
                name="Akarshana Waduge"
                title="Professional"
                content="I am truly grateful to Career141 for their guidance and support in helping me find better job opportunity. Their professional advice, personalized approach, and encouragement gave me the confidence."
              />
              <Pagination current={candidatesPage} total={5} onChange={onCandidatesPageChange} />
          </div>
      </div>

      {/* Employees Section */}
      <div className="px-6 py-12 relative bg-[#f9f9f9]">
           <div className="flex items-center justify-center gap-6 mb-12 relative z-10">
               <h2 className="font-['Quicksand',sans-serif] font-normal text-[32px] uppercase tracking-widest">Employees</h2>
               <img src={imgDivElementorElement} className="w-16 h-16 md:w-24 md:h-24 object-contain opacity-60" loading="lazy" decoding="async" />
           </div>
           <MobileCard 
                company="Employee"
                name="Nuha Iqbarek"
                title="Senior Executive"
                content="It’s been just over two months since I joined Career141, and it’s been such a meaningful journey so far. I’ve gained hands-on experience in talent acquisition."
           />
      </div>

      {/* Mobile Contact Form Section with Restored Background Images */}
      <div className="relative min-h-[850px] bg-[#0d1f15] overflow-hidden">
           {/* Background Overlay Images */}
            <div className="absolute inset-0 z-0 flex flex-col">
                <img src={imgDivElementorElement2} className="w-full h-1/2 object-cover pointer-events-none opacity-80" loading="lazy" decoding="async" />
                <img src={imgDivElementorElement3} className="w-full h-1/2 object-cover pointer-events-none opacity-80" loading="lazy" decoding="async" />
            </div>

           <div className="relative z-10 px-[23px] py-[31px]">
               <div className="bg-white/10 backdrop-blur-md rounded-[18px] p-6 flex flex-col gap-8 shadow-xl border border-white/20">
                    {/* Heading */}
                    <h2 className="font-['Quicksand',sans-serif] font-bold text-[#cbfc06] text-[27.2px] leading-[32.64px]">
                        Schedule a talent acquisition meeting
                    </h2>

                    {/* Phone Numbers Section */}
                    <div className="flex flex-col gap-6">
                        <div className="font-['Inter',sans-serif] font-normal text-white text-[13.4px]">Give us a call</div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                            <div className="flex flex-col gap-2">
                                <div className="text-white text-[10.5px] font-['Inter',sans-serif] font-semibold tracking-widest uppercase">Sri Lanka</div>
                                <div className="text-white text-[16px] font-['Quicksand',sans-serif] font-semibold leading-[16px]">+94 11 488 4774</div>
                                <div className="text-white text-[16px] font-['Quicksand',sans-serif] font-semibold leading-[16px]">+94 11 723 2425</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="text-white text-[10.5px] font-['Inter',sans-serif] font-semibold tracking-widest uppercase">Dubai</div>
                                <div className="text-white text-[16px] font-['Quicksand',sans-serif] font-semibold leading-[16px]">+971 52 232 5425</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="text-white text-[10.5px] font-['Inter',sans-serif] font-semibold tracking-widest uppercase">Singapore</div>
                                <div className="text-white text-[16px] font-['Quicksand',sans-serif] font-semibold leading-[16px]">+65 824 456 500</div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <form className="flex flex-col gap-6 w-full mt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border-b-[0.8px] border-white pb-1 flex flex-col gap-2">
                                <label className="text-white text-[16px] font-['Quicksand',sans-serif] font-normal">First Name *</label>
                                <input className="bg-transparent border-none outline-none text-white w-full font-['Inter',sans-serif] text-[15px] placeholder:text-white/50" placeholder="First Name" />
                            </div>
                            <div className="border-b-[0.8px] border-white pb-1 flex flex-col gap-2">
                                <label className="text-white text-[16px] font-['Quicksand',sans-serif] font-normal">Last Name *</label>
                                <input className="bg-transparent border-none outline-none text-white w-full font-['Inter',sans-serif] text-[15px] placeholder:text-white/50" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="border-b-[0.8px] border-white pb-1 flex flex-col gap-2">
                                <label className="text-white text-[16px] font-['Quicksand',sans-serif] font-normal">Email *</label>
                                <input className="bg-transparent border-none outline-none text-white w-full font-['Inter',sans-serif] text-[15px] placeholder:text-white/50" placeholder="Email" />
                            </div>
                            <div className="border-b-[0.8px] border-white pb-1 flex flex-col gap-2">
                                <label className="text-white text-[16px] font-['Quicksand',sans-serif] font-normal">Your Phone</label>
                                <input className="bg-transparent border-none outline-none text-white w-full font-['Inter',sans-serif] text-[15px] placeholder:text-white/50" placeholder="Your Phone" />
                            </div>
                        </div>

                        <div className="border-b-[0.8px] border-white pb-1 flex flex-col gap-2">
                            <label className="text-white text-[16px] font-['Quicksand',sans-serif] font-normal">Subject</label>
                            <input className="bg-transparent border-none outline-none text-white w-full font-['Inter',sans-serif] text-[15px] placeholder:text-white/50" placeholder="I want to talk about..." />
                        </div>

                        <div className="border-b-[0.8px] border-white pb-1 flex flex-col gap-2">
                            <label className="text-white text-[16px] font-['Quicksand',sans-serif] font-normal">Message</label>
                            <textarea className="bg-transparent border-none outline-none text-white w-full resize-none font-['Inter',sans-serif] text-[15px] placeholder:text-white/50" rows={1} placeholder="The details of my inquiry are..." />
                        </div>

                        {/* reCAPTCHA */}
                        <div className="bg-white rounded-[3px] p-2 flex items-center justify-between w-full h-[70px] mt-4 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-[24px] h-[24px] border-[2px] border-[#d3d3d3] bg-white rounded-[2px]"></div>
                                <span className="text-black text-[13px] font-['Roboto',sans-serif]">I'm not a robot</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <img src={imgDivRcAnchorLogoImg} className="w-[28px] h-[28px]" alt="reCAPTCHA" />
                                <span className="text-[9px] text-[#555] font-['Roboto',sans-serif]">reCAPTCHA</span>
                                <div className="flex gap-1 text-[8px] text-[#555] font-['Roboto',sans-serif]">
                                    <span>Privacy</span>
                                    <span>-</span>
                                    <span>Terms</span>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="bg-white text-black font-['Quicksand',sans-serif] font-bold h-[41px] w-full rounded-[100px] mt-2 text-[16px] hover:bg-gray-100 transition-colors">
                            Submit
                        </button>
                    </form>
               </div>
           </div>
      </div>
    </div>
  );
}