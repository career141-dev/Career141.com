import { withBasePath } from '@/lib/assetPath'

const ROW1_CARDS = [
  { img: withBasePath('/figmaAssets/carousel-r1-1.jpg'), label: 'Global' },
  { img: withBasePath('/figmaAssets/carousel-r1-2.jpg'), label: 'UAE' },
  { img: withBasePath('/figmaAssets/carousel-r1-3.jpg'), label: 'Sri Lanka' },
  { img: withBasePath('/figmaAssets/carousel-r1-4.jpg'), label: 'Australia' },
  { img: withBasePath('/figmaAssets/carousel-r1-5.jpg'), label: 'UK' },
  { img: withBasePath('/figmaAssets/carousel-r1-6.jpg'), label: 'USA' },
  { img: withBasePath('/figmaAssets/carousel-r1-7.jpg'), label: 'Germany' },
  { img: withBasePath('/figmaAssets/carousel-r1-8.jpg'), label: 'France' },
  { img: withBasePath('/figmaAssets/carousel-r1-9.jpg'), label: 'Japan' },
  { img: withBasePath('/figmaAssets/carousel-r1-10.jpg'), label: 'India' },
  { img: withBasePath('/figmaAssets/carousel-r1-11.jpg'), label: 'Canada' },
  { img: withBasePath('/figmaAssets/carousel-r1-12.jpg'), label: 'South Africa' },
  { img: withBasePath('/figmaAssets/carousel-r1-13.jpg'), label: 'Kenya' },
  { img: withBasePath('/figmaAssets/carousel-r1-14.jpg'), label: 'Ethiopia' },
  { img: withBasePath('/figmaAssets/carousel-r1-15.jpg'), label: 'Qatar' },
  { img: withBasePath('/figmaAssets/carousel-r1-16.jpg'), label: 'Singapore' },
  { img: withBasePath('/figmaAssets/carousel-r1-17.jpg'), label: 'Malaysia' },
]

const ROW2_CARDS = [
  { img: withBasePath('/figmaAssets/carousel-r2-1.jpg'), label: 'Oman' },
  { img: withBasePath('/figmaAssets/carousel-r2-2.jpg'), label: 'Netherlands' },
  { img: withBasePath('/figmaAssets/carousel-r2-3.jpg'), label: 'Thailand' },
  { img: withBasePath('/figmaAssets/carousel-r2-4.jpg'), label: 'Indonesia' },
  { img: withBasePath('/figmaAssets/carousel-r2-5.jpg'), label: 'Philippines' },
  { img: withBasePath('/figmaAssets/carousel-r2-6.jpg'), label: 'Bangladesh' },
  { img: withBasePath('/figmaAssets/carousel-r2-7.jpg'), label: 'Pakistan' },
  { img: withBasePath('/figmaAssets/carousel-r2-8.jpg'), label: 'Bahrain' },
  { img: withBasePath('/figmaAssets/carousel-r2-9.jpg'), label: 'Kuwait' },
  { img: withBasePath('/figmaAssets/carousel-r2-10.jpg'), label: 'Saudi Arabia' },
  { img: withBasePath('/figmaAssets/carousel-r2-11.jpg'), label: 'New Zealand' },
  { img: withBasePath('/figmaAssets/carousel-r2-12.jpg'), label: 'Jordan' },
]

const CARD_W = 175
const CARD_H = 100
const CARD_GAP = 10

interface CarouselRowProps {
  cards: { img: string; label: string }[]
  direction?: 'left' | 'right'
  speed?: number
}

function CarouselRow({ cards, direction = 'left', speed = 30 }: CarouselRowProps) {
  const totalWidth = cards.length * (CARD_W + CARD_GAP)
  const animDuration = `${totalWidth / speed}s`
  const animName = direction === 'left' ? 'scrollLeft' : 'scrollRight'

  return (
    <div className="overflow-hidden" style={{ height: CARD_H + 20 }}>
      <div
        className="flex"
        style={{
          width: 'max-content',
          animation: `${animName} ${animDuration} linear infinite`,
          gap: CARD_GAP,
          paddingTop: 10,
        }}
      >
        {[...cards, ...cards].map((card, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: CARD_W, height: CARD_H, borderRadius: 5, border: '1.5px solid #37a65e' }}
            data-testid={`card-country-${i % cards.length}`}
          >
            <img src={card.img} alt={card.label} className="w-full h-full object-cover" draggable={false} />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 55%)' }}
            />
            <span
              className="absolute bottom-2 left-2 text-white [font-family:'Quicksand',Helvetica] font-bold leading-none"
              style={{ fontSize: 13 }}
            >
              {card.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function MobileGlobalReachSubsection() {
  return (
    <section className="w-full bg-white py-8 overflow-hidden relative md:hidden">
      <div className="absolute top-0 right-0 w-1/2 h-24 pointer-events-none select-none">
        <img src={withBasePath('/figmaAssets/mobile-global-reach-bg.svg')} alt="" aria-hidden className="w-full h-full object-cover" />
      </div>

      <div className="px-5 mb-6 relative">
        <h2
          className="[font-family:'Quicksand',Helvetica] font-bold text-[#444444] text-[22px] leading-snug"
          data-testid="text-mobile-global-reach-heading"
        >
          Access a pool of talent with our global reach
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        <CarouselRow cards={ROW1_CARDS} direction="left" speed={28} />
        <CarouselRow cards={ROW2_CARDS} direction="right" speed={22} />
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
