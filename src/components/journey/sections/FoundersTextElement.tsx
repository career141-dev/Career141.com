'use client'

import React, { useState } from 'react'
import styles from '@/styles/FoundersTextElement.module.css'

export function FoundersTextElement() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`${styles.DivElementorElement_115_10489} w-full px-4 md:px-0`} style={{ background: 'transparent' }}>
      <div className={`${styles.DivElementorElement_115_10490} w-full md:w-[719.75px]`}>
        <div className={styles.DivElementorElement_115_10491}>
          <div className={styles.DivElementorWidgetContainer_115_10492}>
            <div className={`${styles.P_115_10493} text-sm md:text-base`} style={{ fontFamily: "'General Sans Variable', Sans-serif", fontSize: '1em', lineHeight: '1.7em', color: '#000000', fontWeight: 'normal', position: 'relative' }}>
              {!isExpanded && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
                />
              )}
              <span>
                Over the last two decades, Career141 Sri Lanka has built a trusted reputation as a Sri Lankan, Global
                Recruitment and executive search firm, serving clients across 25+ countries including Sri Lanka,
                Singapore, United Arab Emirates, Qatar, Kuwait, Bahrain, Egypt, Oman, India, Bangladesh, Indonesia,
                Malaysia, Vietnam, Cambodia, Thailand, Hong Kong, Kenya, Ghana, Ethiopia, Tanzania, Botswana,
                Zambia, Uganda, Rwanda, Fiji, United States, United Kingdom, Australia, and Papua New Guinea.
              </span>
              {isExpanded && (
                <>
                  <br /><br />
                  <span>
                    We specialize in recruiting from Assistant Manager to C-Level across 14+ key industries — including Apparel, FMCG, Information Technology, Retail, E-commerce, Healthcare, Pharmaceuticals, Power & Energy, Hospitality, Education, Testing and Certification, Automotive, Construction, and Shipping & Freight.
                  </span>
                  <br /><br />
                  <span>
                    From our regional base in Singapore and virtual office in Dubai, we also support offshore companies in launching and scaling startup operations in Sri Lanka, by providing access to world-class talent tailored to their operational needs.
                  </span>
                  <br /><br />
                  <span>
                    As a Great Place to Work® Certified company, we combine people-first practices with advanced hiring technology and licensed LinkedIn headhunting tools to deliver bespoke recruitment solutions — helping businesses grow with confidence, speed, and precision.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.DivElementorElement_115_10495}>
          <div className={styles.DivElementorWidgetContainer_115_10496}>
            <div 
              className={styles.ABdtShowHideTitle_115_10497}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className={styles.Before_115_10498}></div>
              <span className={styles.ReadMore_115_10499}>{isExpanded ? 'Read Less' : 'Read More'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.DivElementorElement_115_10500}>
        <div className={styles.DivElementorElement_115_10501}>
          <div className={styles.DivElementorElement_115_10502}>
            <div className={styles.DivElementorElement_115_10503}>
              <div className={styles.DivElementorWidgetContainer_115_10504}>
                <span className={styles.MAAzeemusham_115_10505}>M.A.Azeemusham</span>
              </div>
            </div>
            <div className={styles.DivElementorElementAlignStretch_115_10506}>
              <div className={styles.DivElementorElement_115_10507}>
                <div className={styles.DivElementorElement_115_10508}>
                  <div className={styles.DivElementorWidgetContainer_115_10509}>
                    <div className={styles.A_115_10510}>
                      <div className={styles.EmailWebp_115_10511}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.DivElementorElement_115_10513}>
                  <div className={styles.DivElementorWidgetContainer_115_10514}>
                    <div className={styles.A_115_10515}>
                      <div className={styles.LinkedinWebp_115_10516}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DivElementorElement_115_10518}>
            <div className={styles.DivElementorWidgetContainer_115_10519}>
              <div className={styles.PElementorHeadingTitle_115_10520}>
                <span className={styles.ManagingDirector_115_10521}>Managing Director</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.DivElementorElement_115_10522}>
          <div className={styles.DivElementorWidgetContainer_115_10523}>
            <div className={styles.YearsLogoWebp_115_10524}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
