import { withBasePath } from '@/lib/assetPath'
import styles from '@/styles/VisionMissionSection.module.css'
import { VisionTitleElement } from '@/components/journey/sections/VisionTitleElement'

export function VisionMissionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ minHeight: 'auto' }}>
      <div className="relative w-full overflow-visible hidden md:block">
        <VisionTitleElement />
      </div>

      <div className={`${styles.VisionSectionContainer} pt-10 md:pt-0 relative`}>
        <p className="md:hidden absolute top-2 right-4 uppercase font-['Quicksand',Helvetica,sans-serif] font-bold text-3xl tracking-[0.18em] text-[#109062] mr-4">
          Vision
        </p>
        <div className={`${styles.VisionContentRow} mt-20 md:mt-[350px]`}>
          <div className={`${styles.TextBox} mt-6 md:mt-0`}>
            <div className={styles.InnerContent}>
              <p className="uppercase -mt-2 mb-4 font-['Quicksand',Helvetica,sans-serif] font-bold text-[14px] tracking-[0.18em] text-[#109062] relative z-10">
                OUR VISION
              </p>
              <span className={styles.VisionText}>
                Become the trusted partner in strengthening bridging the gaps of the corporate talent, enriching careers, and enhancing lives—creating lasting value for both organizations and individuals.
              </span>
            </div>
          </div>

          <div className={styles.ImageWrapper}>
            <div className={styles.QuoteImage} />
          </div>
        </div>
      </div>
    </section>
  )
}
