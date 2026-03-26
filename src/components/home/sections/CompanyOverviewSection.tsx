import { withBasePath } from '@/lib/assetPath'

export function CompanyOverviewSection() {
  return (
    <section className="w-full bg-white pt-8 lg:pt-16 pb-0 lg:pb-16 overflow-visible">
      <div className="flex flex-col lg:hidden">
        <div className="px-[21px] pt-[10px]">
          <div
            className="w-full h-[196px] bg-cover bg-center"
            style={{ backgroundImage: `url(${withBasePath('/figmaAssets/image-of-career141-office--our-culture.png')})` }}
          />
        </div>

        <div className="mx-[12px] -mt-10 bg-[#006763] px-6 pt-10 pb-10 relative z-10">
          <div className="[font-family:'Quicksand',Helvetica] font-normal text-[30px] leading-[1.2] mb-5">
            <span className="text-white">Our people make the </span>
            <span className="font-bold text-[#cbfc06]">difference</span>
          </div>
          <div className="border-l-[1.6px] border-[#cbfc06] pl-4 mb-6">
            <p className="[font-family:'Inter',Helvetica] font-light text-white text-[14px] leading-[1.7] m-0">
              We pride ourselves on cultivating a dynamic and inclusive environment that encourages collaboration, innovation, and excellence
              while recognizing and rewarding the exceptional efforts of our own team.
            </p>
          </div>
          <a
            href="https://career141.com/index.php/our-culture/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center justify-center py-[11px] px-[22px] rounded-[100px] border border-solid border-white text-white [font-family:'Quicksand',Helvetica] font-semibold text-[11.2px] tracking-[0.50px] leading-[13.4px] whitespace-nowrap no-underline hover:bg-white hover:text-[#006763] transition-colors duration-200"
          >
            OUR CULTURE
          </a>
        </div>
      </div>

      <div className="hidden lg:flex items-stretch mx-auto px-[75px]">
        <div className="flex-shrink-0 flex items-start">
          <div
            className="w-[686px] h-[406px] bg-cover bg-center"
            style={{ backgroundImage: `url(${withBasePath('/figmaAssets/image-of-career141-office--our-culture.png')})` }}
          />
        </div>

        <div className="flex items-end justify-center relative flex-shrink-0 -ml-[50px] mt-[80px]">
          <div
            className="relative w-[683px] h-[399px] bg-cover bg-[100%_100%]"
            style={{ backgroundImage: `url(${withBasePath('/figmaAssets/home-culture-green-box-1-svg-fill.svg')})` }}
          >
            <div className="flex flex-col items-start justify-center absolute top-20 left-[81px] w-[calc(100%-162px)]">
              <div className="[font-family:'Quicksand',Helvetica] font-normal text-transparent text-[38.4px] tracking-[0] leading-[46px]">
                <span className="text-white">
                  Our people make the
                  <br />
                </span>
                <span className="font-bold text-[#cbfc06]">difference</span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[14.4px] absolute top-[192px] left-[81px] min-w-[570px]">
              <div className="flex flex-col items-start pl-5 pr-0 py-0 border-l-[1.6px] border-solid border-[#cbfc06] w-full">
                <p className="[font-family:'Inter',Helvetica] font-light text-white text-[15.1px] tracking-[0] leading-6 m-0">
                  We pride ourselves on cultivating a dynamic and inclusive environment that
                  <br />
                  encourages collaboration, innovation, and excellence while recognizing and
                  <br />
                  rewarding the exceptional efforts of our own team
                </p>
              </div>
              <div className="flex flex-col items-start">
                <a
                  href="https://career141.com/index.php/our-culture/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center pt-[11.2px] pb-[11.8px] px-[23.8px] rounded-[100px] border border-solid border-white text-white [text-shadow:0px_0px_10px_#0000004c] [font-family:'Quicksand',Helvetica] font-semibold text-[11.2px] text-center tracking-[0.50px] leading-[13.4px] whitespace-nowrap no-underline hover:bg-white hover:text-[#006763] transition-colors duration-200"
                >
                  OUR CULTURE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
