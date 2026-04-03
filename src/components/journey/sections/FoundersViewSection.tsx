'use client'

import React from 'react'
import styles from '@/styles/FoundersViewSection.module.css'

export function FoundersViewSection() {
  return (
    <section className={styles.FoundersSectionWrapper}>
      <div className="flex flex-col items-center w-full">
        <div className={styles.DivElementorElement_115_9528}>
          {/* Title Container */}
          <div className={styles.DivElementorElement_115_9529}>
            <div className={styles.DivElementorElement_115_9530}>
              <div className={styles.DivElementorWidgetContainer_115_9531}>
                <span className={styles.FounderSView_115_9532}>Founder&#x2019;s View</span>
              </div>
            </div>
          </div>

          {/* Video Player Section */}
          <div className={styles.DivElementorElement_115_9533}>
            <div className={styles.DivElementorElementMaskGroup_115_9534}>
              <div className={styles.DivElementorElementMask_115_9535}>
                <div className={styles.DivElementorElement_115_9537}>
                  <div className={styles.DivElementorWidgetContainer_115_9538}>
                    {/* Real Video Player Wrapper */}
                    <div className={styles.DivElementorWrapper_115_9539}>
                      <div className={styles.IframeWidget2_115_9540}>
                        <iframe
                          src="https://www.youtube.com/embed/t5jEi1dpXp8?autoplay=1"
                          title="Founder's View - Career141"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full border-0 absolute inset-0"
                        />
                      </div>
                    </div>

                    {/* Placeholder/Overlay (Visible when necessary) */}
                    <div className={styles.BodyDate_20260323_115_9541}>
                      <div className={styles.YouTubeVideoPlayer_115_9542}>
                        <div className={styles.DivHtml5VideoContainer_115_9543}>
                          <div className={styles.Image_115_9544}></div>
                        </div>
                      </div>
                      <div className={styles.DivPlayerControls_115_9545}>
                        <div className={styles.DivPlayerControlsBackground_115_9546}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
