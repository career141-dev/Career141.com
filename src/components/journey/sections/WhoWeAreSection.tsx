import { withBasePath } from '@/lib/assetPath'

export function WhoWeAreSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ minHeight: 585 }}>
      <div className="absolute top-0 left-0 right-0" style={{ height: 426 }}>
        <svg
          viewBox="0 0 1482 442"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="s4RingGrad" x1="1405.01" y1="407.087" x2="1029.45" y2="16.0317" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D1F5F4" />
              <stop offset="1" stopColor="#D1F5F4" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M297.718 221.038C297.718 99.2271 396.466 0.479863 518.276 0.479863H1259.47C1381.28 0.479863 1480.03 99.2272 1480.03 221.038C1480.03 342.849 1381.28 441.597 1259.47 441.597H518.276C396.465 441.597 297.718 342.849 297.718 221.038ZM518.276 150.52C479.33 150.52 447.758 182.092 447.758 221.038C447.758 259.985 479.33 291.557 518.276 291.557H1259.47C1298.42 291.557 1329.99 259.985 1329.99 221.038C1329.99 182.092 1298.42 150.52 1259.47 150.52H518.276Z"
            fill="url(#s4RingGrad)"
          />
        </svg>
      </div>

      <div className="absolute left-0 z-10" style={{ top: 280, width: '34.3%', height: 320 }}>
        <img
          src={withBasePath('/figmaAssets/group-2279.webp')}
          alt="Career141 global offices"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute z-10"
        style={{
          top: 365,
          left: '24.6%',
          right: 0,
          minHeight: 210,
          background: `url(${withBasePath('/figmaAssets/bg-vision.webp')}) center center / cover no-repeat`,
        }}
      >
        <div className="absolute inset-0 bg-white/80 pointer-events-none" />
        <div className="relative z-10 px-6 md:px-10 lg:px-16 py-6 md:py-8">
          <p className="uppercase mb-2 font-['Quicksand',Helvetica,sans-serif] font-bold text-[12px] tracking-[0.18em] text-[#109062]">
            OUR MISSION
          </p>
          <p className="font-['Inter',Helvetica,sans-serif] font-medium text-[15px] md:text-[17.7px] leading-[1.6] text-[#444444]">
            Build a trusted global entity, driven by quality, commitment, innovation, and trust— empowering growth for both
            people and organizations worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}
