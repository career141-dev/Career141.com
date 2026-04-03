import React from 'react'
import { withBasePath } from '@/lib/assetPath'
import styles from '@/styles/WhoWeAreSection.module.css'
import { MissionTitleElement } from './MissionTitleElement'

export function WhoWeAreSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white -mt-30" style={{ minHeight: 'auto' }}>
      <div className="relative w-full overflow-visible">
        <MissionTitleElement />
      </div>

      <div className={styles.WhoWeAreContainer}>
        <div className={styles.MissionContentRow}>
          <div className={styles.ImageWrapper}>
            <div className={styles.QuoteImage} />
          </div>

          <div className={styles.TextBox}>
            <div className={styles.InnerContent}>
              <p className="uppercase mb-4 font-['Quicksand',Helvetica,sans-serif] font-bold text-[14px] tracking-[0.18em] text-[#109062] relative z-10 md:block hidden">
                OUR MISSION
              </p>
              <span className={styles.MissionText}>
                Build a trusted global entity, driven by quality, commitment, innovation, and trust—
                empowering growth for both people and organizations worldwide.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
