import { withBasePath } from '@/lib/assetPath'

export function QuoteHighlightSection() {
  return (
    <section
      className="relative flex flex-col w-full min-h-[420px] md:min-h-[560px] lg:min-h-[657px] items-start justify-center py-20 md:py-32 lg:py-[218px] overflow-hidden"
      style={{
        background: `url(${withBasePath('/figmaAssets/div-elementor-element-1.png')}) center center / cover no-repeat`,
      }}
    >
      <div className="flex flex-col items-start gap-2.5 px-6 md:px-12 lg:px-[121px] py-0 w-full relative z-10">
        <img
          className="w-[132px] h-[21px] object-contain"
          alt="Rating and 20 year badge"
          src={withBasePath('/figmaAssets/div-elementor-element-4.svg')}
        />

        <div className="relative w-full min-h-[90px] md:min-h-[120px] lg:min-h-[153px]">
          <div
            className="absolute left-0 top-0 h-full pointer-events-none"
            style={{
              width: '35.36%',
              background: `url(${withBasePath('/figmaAssets/div-elementor-element-3.png')}) left center / cover no-repeat`,
              opacity: 0.6,
            }}
          />

          <div className="relative flex flex-col items-start justify-center h-full ml-3 md:ml-6 lg:ml-[38px]">
            <p className="text-transparent font-['Inter',Helvetica,sans-serif] text-[22px] leading-[1.3] md:text-[34px] md:leading-[1.35] lg:text-[46.3px] lg:leading-[57.6px] font-normal">
              <span style={{ color: '#96db86', fontWeight: 400 }}>20+ Years of Global</span>
              <span style={{ color: '#ffffff', fontWeight: 300 }}> Executive Search & Offshore</span>
              <br />
              <span style={{ color: '#ffffff', fontWeight: 300 }}>Recruitment Across 25+ Countries</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
