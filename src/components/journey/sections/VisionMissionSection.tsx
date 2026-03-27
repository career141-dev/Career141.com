import { withBasePath } from '@/lib/assetPath'
import styles from '@/styles/VisionMissionSection.module.css'
import { VisionTitleElement } from '@/components/journey/sections/VisionTitleElement'

export function VisionMissionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ minHeight: 'auto' }}>
      <div className="relative w-full overflow-visible">
        <VisionTitleElement />
      </div>

      <div className={styles.VisionSectionContainer}>
        <div className={styles.VisionContentRow}>
          <div className={styles.TextBox}>
            <div className={styles.InnerContent}>
              <p className="uppercase mb-4 font-['Quicksand',Helvetica,sans-serif] font-bold text-[14px] tracking-[0.18em] text-[#109062] relative z-10 md:block hidden">
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
