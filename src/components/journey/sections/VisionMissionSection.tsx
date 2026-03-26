import { withBasePath } from '@/lib/assetPath'

export function VisionMissionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ minHeight: 986 }}>
      <div className="relative w-full" style={{ minHeight: 620 }}>
        <svg
          viewBox="0 0 1614 737"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ringGrad1" x1="89.2462" y1="700.189" x2="402.118" y2="290.472" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D1F5F4" />
              <stop offset="1" stopColor="#D1F5F4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ringGrad2" x1="1569.71" y1="378.05" x2="1289.01" y2="-21.4957" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D1F5F4" />
              <stop offset="1" stopColor="#D1F5F4" stopOpacity="0" />
            </linearGradient>
          </defs>

          <rect x="46" y="0" width="1568" height="737" fill="white" />

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45.85 515.92C45.85 394.04 144.66 295.24 266.54 295.24H982.35C1104.24 295.24 1203.04 394.04 1203.04 515.92C1203.04 637.8 1104.24 736.61 982.35 736.61H266.54C144.66 736.61 45.85 637.8 45.85 515.92ZM266.54 420.26C213.7 420.26 170.87 463.09 170.87 515.92C170.87 568.76 213.7 611.59 266.54 611.59H982.35C1035.19 611.59 1078.02 568.76 1078.02 515.92C1078.02 463.09 1035.19 420.26 982.35 420.26H266.54Z"
            fill="url(#ringGrad1)"
          />

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1613.11 208.52C1613.11 93.63 1519.97 0.49 1405.08 0.49H663.95C549.06 0.49 455.92 93.63 455.92 208.52C455.92 323.42 549.06 416.56 663.95 416.56H1405.08C1519.97 416.56 1613.11 323.42 1613.11 208.52ZM1405.08 125.51C1450.92 125.51 1488.09 162.68 1488.09 208.52C1488.09 254.37 1450.92 291.54 1405.08 291.54H663.95C618.1 291.54 580.94 254.37 580.94 208.52C580.94 162.68 618.1 125.51 663.95 125.51H1405.08Z"
            fill="url(#ringGrad2)"
          />
        </svg>

        <div className="absolute left-0 right-0 flex flex-col lg:flex-row gap-6 lg:gap-0" style={{ top: 58, paddingLeft: '3.2%', paddingRight: '3.2%' }}>
          <div
            className="flex flex-col justify-center py-6 md:py-8 px-6 md:px-10"
            style={{
              flex: '0 0 53.8%',
              background: 'linear-gradient(to right, rgba(255,255,255,1) 76%, rgba(255,255,255,0.85) 100%)',
              minHeight: 174,
            }}
          >
            <p className="font-['Inter',Helvetica,sans-serif] font-normal text-[13px] md:text-[14.8px] leading-[1.65] text-[#252525] mb-3 md:mb-[14px]">
              Over the last two decades, Career141 Sri Lanka has built a trusted reputation as a Sri Lankan, Global Recruitment
              and executive search firm, serving clients across 25+ countries including Sri Lanka, Singapore, United Arab
              Emirates, Qatar, Kuwait, Bahrain, Egypt, Oman, India, Bangladesh, Indonesia, Malaysia, Vietnam, Cambodia,
              Thailand, Hong Kong, Kenya, Ghana, Ethiopia, Tanzania, Botswana, Zambia, Uganda, Rwanda, Fiji, United States,
              United Kingdom, Australia, and Papua New Guinea.
            </p>
            <a
              href="/our-journey"
              className="inline-flex items-center gap-1 hover:underline font-['Quicksand',Helvetica,sans-serif] font-bold text-[15px] md:text-[16px] text-[#37a65e] no-underline"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col" style={{ flex: '0 0 46.2%', minHeight: 299, paddingLeft: '2%' }}>
            <div className="flex items-start justify-between py-3">
              <div>
                <p className="font-['Quicksand',Helvetica,sans-serif] font-bold text-[22px] md:text-[28px] leading-[1.2] text-[#11593f] mb-1">
                  M.A.Azeemusham
                </p>
                <p className="font-['Quicksand',Helvetica,sans-serif] font-normal text-[15px] md:text-[17px] text-[#444444]">
                  Managing Director
                </p>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <img src={withBasePath('/figmaAssets/icon-email.png')} alt="Email" className="w-[27px] h-[27px] object-contain" />
                <img src={withBasePath('/figmaAssets/icon-linkedin.png')} alt="LinkedIn" className="w-[27px] h-[27px] object-contain" />
              </div>
            </div>

            <div className="w-full md:w-[68%]">
              <img
                src={withBasePath('/figmaAssets/founder-photo.png')}
                alt="M.A.Azeemusham – Managing Director"
                className="w-full h-[190px] md:h-[207px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-stretch w-full" style={{ minHeight: 251 }}>
        <div
          className="relative flex items-center"
          style={{
            flex: '0 0 66%',
            background: `url(${withBasePath('/figmaAssets/bg-mission.webp')}) center center / cover no-repeat`,
          }}
        >
          <div className="absolute inset-0 bg-white/80 pointer-events-none" />
          <div className="relative z-10 px-8 md:px-12 lg:px-16 py-8 md:py-10" style={{ maxWidth: 860 }}>
            <p className="uppercase mb-2 font-['Quicksand',Helvetica,sans-serif] font-bold text-[12px] tracking-[0.18em] text-[#109062]">
              OUR VISION
            </p>
            <p className="font-['Inter',Helvetica,sans-serif] font-medium text-[16px] md:text-[18px] leading-[1.6] text-[#444444]">
              Become the trusted partner in strengthening bridging the gaps of the corporate talent, enriching careers, and
              enhancing lives—creating lasting value for both organizations and individuals.
            </p>
          </div>
        </div>

        <div className="flex-1 relative overflow-visible" style={{ minHeight: 251, marginTop: -70 }}>
          <img
            src={withBasePath('/figmaAssets/group-2280.webp')}
            alt="Career141 team"
            className="w-full object-cover"
            style={{ height: 'calc(251px + 70px)' }}
          />
        </div>
      </div>
    </section>
  )
}
