import { withBasePath } from '@/lib/assetPath'

export function HeroSection() {
  return (
    <section className="relative flex flex-col w-full items-center gap-5 z-10 -mt-16 md:-mt-24 lg:-mt-32">
      {/* Background that overlaps the previous section */}
      <div
        className="absolute w-full h-[calc(100%+400px)] -top-[400px] md:-top-[350px] left-0 pointer-events-none z-[-1000]"
        style={{
          background: `url(${withBasePath('/figmaAssets/div-elementor-element.png')}) center center / cover no-repeat`,
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 100px)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100px)'
        }}
      />

      <div className="flex flex-col items-center gap-5 pt-32 md:pt-32 lg:pt-[200px] pb-4 lg:pb-[15.2px] px-6 md:px-10 lg:px-[106.45px] w-full relative z-10">
        <div className="relative w-full max-w-[1229px] pb-[14.4px] mt-16 md:mt-20 lg:mt-24">
          <div className="text-center">
            <p className="leading-[1.7] md:leading-[1.6] lg:leading-[56.3px]">
              <span className="font-['Libre Baskerville',serif] italic text-[#11593f] text-[23px] md:text-[28px] lg:text-[32px]">&ldquo; Our 20 plus year journey </span>
              <span className="font-['Libre Baskerville',serif] italic text-[#37a65e] text-[23px] md:text-[28px] lg:text-[32px]">has been benchmarked with relentless pursuit of</span>
              <span className="font-['Libre Baskerville',serif] italic text-[#11593f] text-[23px] md:text-[28px] lg:text-[32px]">understanding, </span>
              <span className="font-['Libre Baskerville',serif] italic text-[#37a65e] text-[22px] md:text-[27px] lg:text-[31.5px]">enabling us to navigate </span>
              <span className="font-['Libre Baskerville',serif] italic text-[#11593f] text-[23px] md:text-[28px] lg:text-[32px]">the complexities of </span>
              <span className="font-['Libre Baskerville',serif] italic text-[#37a65e] text-[22px] md:text-[27px] lg:text-[31.4px]">diverse roles with</span>
              <span className="font-['Libre Baskerville',serif] italic text-[#37a65e] text-[23px] md:text-[28px] lg:text-[33px]">unparalleled precision &rdquo;</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="border-t-4 border-solid border-[#0c2340] w-24 md:w-32" />
        </div>
      </div>
    </section>
  )
}
