import clsx from "clsx";
import { withBasePath } from "@/lib/assetPath";
import svgPaths from "./svg-i22xuewop2";

const imgDivElementorElement = withBasePath("/figmaAssets/testimonial/17c4028a605359300c9ddb69a9b0ee7da5187dc0.png");

function Frame() {
  return (
    <div className="relative shrink-0 size-[50px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g clipPath="url(#clip0_6_245)" id="Frame">
          <path d={svgPaths.p21251380} fill="var(--fill-0, #369271)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6_245">
            <rect fill="white" height="50" width="50" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EmployeeCard({ name, title, content }: { name: string; title: string; content: React.ReactNode }) {
    return (
        <div className="bg-white min-h-[420px] relative rounded-[40px] w-full border border-[#e4e4e4] border-solid p-8 shadow-sm transition-transform hover:-translate-y-1 duration-300 flex flex-col">
            <div className="mb-6">
                <Frame />
            </div>
            <div className="flex-grow">
                <div className="font-['Quicksand',sans-serif] font-semibold text-[#626262] text-[16px] leading-[24px]">
                    {content}
                </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#01c5c4] border-t-4 w-1/3 mb-4"></div>
            <div className="flex justify-between items-end">
                <div>
                    <div className="font-['Quicksand',sans-serif] font-bold text-[#5c5c5c] text-[19.2px] mb-1 leading-tight">{name}</div>
                    <div className="font-['Quicksand',sans-serif] font-semibold text-[#808080] text-[12.8px] leading-tight">{title}</div>
                </div>
                <div className="font-['Quicksand',sans-serif] font-semibold text-[#37a65e] text-[16px] cursor-pointer">Read More</div>
            </div>
        </div>
    );
}

export default function DivElementorElement() {
  return (
    <div className="relative w-full pb-[100px] pt-[60px] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex items-center justify-center gap-6 mb-16 relative z-10">
              <h2 className="font-['Quicksand',sans-serif] font-normal text-[32px] text-black uppercase tracking-wider">
                Employees
              </h2>
              <img alt="" className="opacity-60 w-24 h-24 object-contain" src={imgDivElementorElement} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EmployeeCard 
                name="Nuha Iqbarek"
                title="Senior Executive - Talent Acquisition"
                content="It’s been just over two months since I joined Career141, and it’s been such a meaningful journey so far. I’ve gained hands-on experience in talent acquisition from understanding diverse roles and industries to confidently engaging with professionals and candidates."
              />
              <EmployeeCard 
                name="Umar Ahamad"
                title="Senior Executive - Talent Acquisition"
                content="Working at Career141 as a Senior Executive – Talent Acquisition has been nothing short of inspiring. I consider this place a true learning hub where every day brings new opportunities for growth. What makes it even more special is the constant mentorship."
              />
              <EmployeeCard 
                name="Rakshana Aswer"
                title="Executive - Operations"
                content="Alhamdulillah for every step, every test, and every opening that brought me to where I am today. My time at Career141 has been a path of learning, challenges, and beautiful growth and I’m truly grateful to be part of a place that values not just performance."
              />
              <EmployeeCard 
                name="Vihani Hettiarachchi"
                title="Senior Executive Recruitment"
                content="As a Senior Recruitment Executive at Career141 for the past two years, I’ve had the privilege of handling talent acquisition across a spectrum of positions, from junior to C-level, for both local and international clients. The supportive environment here has helped."
              />
              <EmployeeCard 
                name="Shamra Faiz"
                title="Operations Lead"
                content="“My experience at Career141 has been instrumental in broadening my horizons as I have got the opportunity in networking with Mid to C Level candidates and tackling diversified recruitment needs both Locally and Internationally."
              />
              <EmployeeCard 
                name="Isuru Thisara"
                title="Talent Acquisition Executive"
                content="“My Inaugural Month at Career141 Joining Career141 as a Talent Acquisition Executive has been nothing short of a revelation. The warm welcome extended by the team made the transition seamless, and I quickly realized that this is a place where my unique perspective."
              />
              <EmployeeCard 
                name="Ilma Waris"
                title="International Business Coordinator"
                content="Working at Career141 has truly been an enriching experience, surrounded by a team of positive-minded colleagues and a collaborative culture. Every day at work gives me a chance to learn and grow both professionally and personally."
              />
              <EmployeeCard 
                name="Rizla Nazim"
                title="Business Coordinator"
                content="“I am delighted to share my experience working with Career141 From the moment I joined the team, I’ve been impressed by the professionalism, dedication, and collaborative spirit that defines this organization."
              />
          </div>
      </div>
    </div>
  );
}