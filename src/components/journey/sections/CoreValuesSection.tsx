import { withBasePath } from '@/lib/assetPath'

export function CoreValuesSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: 'min(716px, 70vh)',
        backgroundImage: `url(${withBasePath('/figmaAssets/corevalues-bg.jpg')})`,
        backgroundSize: 'contain',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
      }}
      data-testid="section-core-values"
    >
      <div className="flex flex-col md:flex-row items-stretch w-full min-h-[inherit]">
        <div className="relative flex items-center w-full md:w-[41%] flex-shrink-0 py-10 md:py-0" style={{ minHeight: 150 }}>
          <div
            className="absolute right-0 top-0 bottom-0 hidden md:block"
            style={{
              width: '70%',
              background: 'linear-gradient(to right, transparent 0%, #e8f0ec 70%, #f0f4f2 100%)',
              borderRadius: '0 50% 50% 0 / 0 50% 50% 0',
              opacity: 0.15,
            }}
          />

            <div className="relative z-10 pl-6 md:pl-[35%] pr-6 md:pr-[5%] pt-10 md:pt-0">
            <div className="relative w-48 h-48 md:w-60 md:h-60 ml-20">
              <img
                src={withBasePath('/images/Vector 97.svg')}
                alt=""
                className="w-full h-full"
              />
                <h2
                className="absolute inset-0 flex items-center justify-center font-['Quicksand',Helvetica,sans-serif] font-bold text-[#11593f] text-center -translate-x-10 md:-translate-x-40"
                style={{
                  fontSize: 'clamp(28px, 2.5vw, 38.4px)',
                  lineHeight: '1.1',
                }}
                data-testid="text-core-values-title"
              >
                Core Values
              </h2>
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex items-center justify-center pt-10 md:pt-24 pb-4 md:pb-6 px-4 md:px-6 lg:px-8 -mt-5 md:-mt-20">
          <img
            src={withBasePath('/figmaAssets/corevalues-diagram.svg')}
            alt="Core Values: Quality and Commitment, Integrity and Ethics, Confidentiality and Trust, Agility and Innovation"
            className="w-full h-auto max-w-[900px]"
            data-testid="img-core-values-diagram"
          />
        </div>
      </div>
    </section>
  )
}
