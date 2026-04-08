// @ts-nocheck
import { withBasePath } from '@/lib/assetPath';
import desktopSvgPaths from '../../premium-jobs/apparel-merchandising/svg-3i9mnjyazu';
import mobileSvgPaths from '../../premium-jobs/apparel-merchandising/390WDefault/svg-7zr9290qr5';

const defaultImgHeroBg = withBasePath("/figmaAssets/apparel-merchandising/7806820e0bd90b541f139a0558f8ac853e8abb6b.png");

function Desktop_Frame1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_1_1675)" id="Frame">
          <path d={desktopSvgPaths.p1c2e2500} fill="var(--fill-0, #E0E0E0)" id="Vector" />
          <path d={desktopSvgPaths.p1706ad00} fill="url(#paint0_linear_1_1675)" id="Vector_2" />
          <path clipRule="evenodd" d={desktopSvgPaths.p62fa300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
          <path d={desktopSvgPaths.p39184000} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1675" x1="19.9999" x2="19.9999" y1="38.8604" y2="0.688446">
            <stop stopColor="#25D366" />
            <stop offset="1" stopColor="#25D366" />
          </linearGradient>
          <clipPath id="clip0_1_1675">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Desktop_DivCtcS() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="div.ctc_s_3_1">
      <div className="bg-[#25d366] content-stretch flex flex-col items-start p-[14px] relative rounded-[34px] shadow-[0px_0px_11px_0px_rgba(0,0,0,0.5)] shrink-0" data-name="div.ctc-analytics">
        <Desktop_Frame1 />
      </div>
    </div>
  );
}

function Desktop_H1ElementorHeadingTitle({ headline }) {
  const isSingleLine = headline && headline.length === 1;
  
  if (isSingleLine) {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.elementor-heading-title">
        <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[57.6px] text-white w-full">
          <p className="leading-[57.6px] text-[#cbfc06]">{headline[0]}</p>
        </div>
      </div>
    );
  }
  
  const lines = headline || [
    "Recruit Apparel, Textile ",
    "RMG Industr", " Talent in Sri",
    "Lanka and Asi"
  ];
  
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.elementor-heading-title">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[57.6px] text-white w-full whitespace-pre-wrap">
        <p className="leading-[57.6px] mb-0">{lines[0]}</p>
        <p className="mb-0">
          <span className="leading-[57.6px]">{lines[1]}</span>
          <span className="leading-[57.6px] text-[#cbfc06]">{lines[2]}</span>
        </p>
        <p className="leading-[57.6px] text-[#cbfc06]">{lines[3]}</p>
      </div>
    </div>
  );
}

function Desktop_DivElementorWidgetContainer1({ description }) {
  const text = description || [
    "Career141 Sri Lanka specializes in recruiting highly skilled professionals across the apparel, textile, an",
    "ready-made garment (RMG) industries. From merchandisers and fashion designers to productio",
    "heads and washing plant managers, we connect you with the right talent to drive operational efficienc",
    "and innovation. Our team understands the intricacies of apparel supply chains and works closely wit",
    "factories, exporters, buying offices, and brands to fulfill executive, middle-management, and technica",
    "hiring needs across Sri Lanka, South Asia, and key global markets"
  ];

  return (
    <div className="relative shrink-0 w-full" data-name="div.elementor-widget-container">
      <div className="content-stretch flex flex-col items-start pr-[2.68px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white w-full">
          {text.map((line, i) => (
             <p key={i} className={`leading-[19.2px] ${i === text.length - 1 ? '' : 'mb-0'}`}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Desktop_Hero({ props, heroData }) {
  const descriptionLines = heroData?.heroDescription 
    ? [heroData.heroDescription]
    : props?.descriptionLines;
  const heroBgImage = heroData?.heroImage || heroData?.image || defaultImgHeroBg;
  const themeColor = heroData?.theme || '#0c448b';
  const headlineFromData = heroData?.heroTitle ? [heroData.heroTitle] : undefined;
  
  return (
    <div className="relative w-full" style={{ height: '584.31px' }}>
      <div className="absolute inset-0">
        <img alt="" className="absolute h-full left-0 max-w-none object-cover top-0 w-full" src={heroBgImage} />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.59)] h-[584.31px] left-0 mt-[1.2px] opacity-50 top-0 w-full" data-name="::before" />
        
      <div className="absolute bg-gradient-to-b bottom-[-96.33px] content-stretch flex flex-col items-start left-[6%] p-[53.525px] right-[38.56%] rounded-[20px]" style={{ backgroundColor: themeColor }} data-name="div.elementor-element">
        <div className="content-stretch flex flex-col gap-[19.2px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="div.elementor-element">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-widget-container">
              <Desktop_H1ElementorHeadingTitle headline={headlineFromData || props?.headlineLines} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-element:align-flex-start">
             <div className="content-stretch flex flex-col items-start justify-center max-w-[736.09px] relative shrink-0 w-full" data-name="div.elementor-element">
                <Desktop_DivElementorWidgetContainer1 description={descriptionLines} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mobile_Frame() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_1_1675)_m" id="Frame_m">
          <path d={mobileSvgPaths.p1c2e2500} fill="var(--fill-0, #E0E0E0)" id="Vector_m" />
          <path d={mobileSvgPaths.p1706ad00} fill="url(#paint0_linear_1_1675_m)" id="Vector_2_m" />
          <path clipRule="evenodd" d={mobileSvgPaths.p62fa300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3_m" />
          <path d={mobileSvgPaths.p39184000} fill="var(--fill-0, white)" id="Vector_4_m" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1675_m" x1="19.9999" x2="19.9999" y1="38.8604" y2="0.688446">
            <stop stopColor="#25D366" />
            <stop offset="1" stopColor="#25D366" />
          </linearGradient>
          <clipPath id="clip0_1_1675_m">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Mobile_DivCtcS() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="div.ctc_s_3_1">
       <div className="bg-[#25d366] content-stretch flex flex-col items-start p-[14px] relative rounded-[34px] shadow-[0px_0px_11px_0px_rgba(0,0,0,0.5)] shrink-0" data-name="div.ctc-analytics">
          <Mobile_Frame />
       </div>
    </div>
  );
}

function Mobile_H1ElementorHeadingTitle({ headline }) {
  const lines = headline || [
    "Recruit Apparel,",
    "Textile & RM",
    "Industry", " Talent in",
    "Sri Lanka and Asia"
  ];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.elementor-heading-title">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-white w-full">
        <p className="leading-[32px] mb-0">{lines[0]}</p>
        <p className="leading-[32px] mb-0">{lines[1]}</p>
        <p className="mb-0">
          <span className="leading-[32px]">{lines[2]}</span>
          <span className="leading-[32px] text-[#cbfc06]">{lines[3]}</span>
        </p>
        <p className="leading-[32px] text-[#cbfc06]">{lines[4]}</p>
      </div>
    </div>
  );
}

function Mobile_DivElementorWidgetContainer1({ description }) {
  const text = description || [
    "Career141 Sri Lanka specializes in",
    "recruiting highly skilled professionals",
    "across the apparel, textile, and ready-",
    "made garment (RMG) industries. From",
    "merchandisers and fashion designers to",
    "production heads and washing plant",
    "managers, we connect you with the right",
    "talent to drive operational efficiency and",
    "innovation. Our team understands the",
    "intricacies of apparel supply chains and",
    "works closely with factories, exporters,",
    "buying offices, and brands to fulfill",
    "executive, middle-management, and",
    "technical hiring needs across Sri Lanka,",
    "South Asia, and key global markets."
  ];

  return (
     <div className="relative shrink-0 w-full" data-name="div.elementor-widget-container">
      <div className="content-stretch flex flex-col items-start pr-[11.23px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white w-full">
          {text.map((line, i) => (
             <p key={i} className={`leading-[19.2px] ${i === text.length - 1 ? '' : 'mb-0'}`}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Mobile_Hero({ props, heroData }) {
  const descriptionLinesMobile = heroData?.heroDescription
    ? [heroData.heroDescription]
    : props?.descriptionLinesMobile;
  const heroBgImage = heroData?.heroImage || heroData?.image || defaultImgHeroBg;
  const themeColor = heroData?.theme || '#0c448b';

  return (
    <div className="relative h-[780px] w-full" data-name="Mobile Hero Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 max-w-none object-cover top-0 w-full" src={heroBgImage} />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.59)] h-[780px] left-0 mt-[1.2px] opacity-50 top-0 w-full" data-name="::before" />

      <div className="absolute bg-gradient-to-b bottom-[-58.43px] content-stretch flex flex-col items-start left-[23.41px] p-[20.612px] right-[23.41px] rounded-[20px]" style={{ backgroundColor: themeColor }} data-name="div.elementor-element">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="div.elementor-element">
             <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-widget-container">
                <Mobile_H1ElementorHeadingTitle headline={props?.headlineLinesMobile} />
             </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-element:align-flex-start">
             <div className="content-stretch flex flex-col items-start justify-center max-w-[302.35px] relative shrink-0 w-full" data-name="div.elementor-element">
                <Mobile_DivElementorWidgetContainer1 description={descriptionLinesMobile} />
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[20px] right-[20px] z-50 overflow-visible">
         <Mobile_DivCtcS />
      </div>
    </div>
  );
}

interface HeroData {
  id: string
  title: string
  description: string
  theme?: string
  heroTitle?: string
  heroDescription?: string
  heroImage?: string
  image: string
  jobCategories: { heading: string; jobs: string[] }[]
}

export function JobsHero({ heroData, props = {} }: { heroData?: HeroData }) {
  return (
    <>
      <div className="hidden md:block w-full">
         <Desktop_Hero props={props} heroData={heroData} />
      </div>
      <div className="block md:hidden w-full">
         <Mobile_Hero props={props} heroData={heroData} />
      </div>
    </>
  );
}