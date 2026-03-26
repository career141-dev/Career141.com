import { withBasePath } from '@/lib/assetPath'

export function CoreValuesSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: 'min(716px, 70vh)',
        backgroundImage: `url(${withBasePath('/figmaAssets/corevalues-bg.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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

          <div className="relative z-10 pl-6 md:pl-[7%] pr-6 md:pr-[5%]">
            <div className="relative inline-block">
              <img
                src={withBasePath('/figmaAssets/corevalues-title-bg.png')}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
                style={{ opacity: 0.3 }}
                aria-hidden="true"
              />
              <h2
                className="relative font-['Quicksand',Helvetica,sans-serif] font-bold text-[#11593f]"
                style={{
                  fontSize: 'clamp(28px, 2.5vw, 38.4px)',
                  lineHeight: '1.1',
                }}
                data-testid="text-core-values-title"
              >
                Core Values
              </h2>
              <div
                className="absolute -right-3 -bottom-1"
                style={{
                  width: 24,
                  height: 24,
                  border: '2px solid #cbfc06',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <img
            src={withBasePath('/figmaAssets/corevalues-diagram.svg')}
            alt="Core Values: Quality and Commitment, Integrity and Ethics, Confidentiality and Trust, Agility and Innovation"
            className="w-full h-auto max-w-[794px]"
            data-testid="img-core-values-diagram"
          />
        </div>
      </div>
    </section>
  )
}
