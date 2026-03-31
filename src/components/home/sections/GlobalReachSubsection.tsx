import { withBasePath } from '@/lib/assetPath'

const PIN_POSITIONS = [
  { left: '68.0%', top: '59.6%' },
  { left: '76.1%', top: '65.8%' },
  { left: '61.1%', top: '51.7%' },
  { left: '20.0%', top: '38.4%' },
  { left: '45.0%', top: '33.3%' },
  { left: '44.1%', top: '61.8%' },
  { left: '53.1%', top: '48.7%' },
  { left: '56.1%', top: '57.8%' },
  { left: '56.1%', top: '60.8%' },
  { left: '53.0%', top: '75.8%' },
  { left: '52.0%', top: '78.8%' },
  { left: '57.1%', top: '50.7%' },
  { left: '58.0%', top: '46.5%' },
  { left: '59.0%', top: '49.5%' },
  { left: '60.0%', top: '53.6%' },
  { left: '65.0%', top: '47.5%' },
  { left: '67.0%', top: '54.6%' },
  { left: '69.0%', top: '50.5%' },
  { left: '74.0%', top: '44.5%' },
  { left: '75.0%', top: '54.6%' },
  { left: '74.0%', top: '61.6%' },
  { left: '75.0%', top: '62.6%' },
  { left: '78.0%', top: '63.7%' },
  { left: '74.0%', top: '56.6%' },
  { left: '75.0%', top: '57.6%' },
  { left: '77.0%', top: '50.5%' },
  { left: '79.0%', top: '50.5%' },
  { left: '84.0%', top: '80.8%' },
  { left: '95.0%', top: '87.9%' },
  { left: '87.0%', top: '67.7%' },
]

function MapPin() {
  return (
    <span className="relative inline-flex items-center justify-center w-[14px] h-[14px] rounded-full bg-[#006763] shadow-sm">
      <span className="absolute w-[8px] h-[1.6px] bg-[#CBFC06] rounded-full" />
      <span className="absolute h-[8px] w-[1.6px] bg-[#CBFC06] rounded-full" />
    </span>
  )
}

export function GlobalReachSubsection() {
  return (
    <section className="hidden md:block w-full bg-white py-10 lg:py-[60px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[91px]">
        <h2
          className="[font-family:'Quicksand',Helvetica] font-normal text-[#444444] tracking-[0] leading-tight mb-8 lg:mb-12 text-[22px] sm:text-[28px] lg:text-[38.4px] lg:leading-[46px]"
          data-testid="text-global-reach-heading"
        >
          Access a pool of talent with our global reach
        </h2>

        <div className="relative w-full overflow-x-auto" data-testid="map-world-reach" style={{ minWidth: 0 }}>
          <div className="relative" style={{ minWidth: 560 }}>
            <img src={withBasePath('/figmaAssets/world-map.png')} alt="World map" className="w-full h-auto block" />

            {PIN_POSITIONS.map((pin, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: pin.left, top: pin.top }}
                data-testid={`img-map-pin-${i}`}
              >
                <MapPin />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
