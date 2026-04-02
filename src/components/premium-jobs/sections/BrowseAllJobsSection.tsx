'use client'

import React from 'react'
import styles from '@/styles/BrowseAllJobs.module.css'
import { JobCard, type Job } from '@/components/common/JobCard'

interface SidebarItem {
  label: string;
  count: string;
  href: string;
}

interface BrowseAllJobsSectionProps {
  jobCards: Job[];
  sidebarIndustries: SidebarItem[];
  sidebarLocations: SidebarItem[];
  sidebarCurrencies: SidebarItem[];
}



const SidebarFilterLink = ({ item }: { item: SidebarItem }) => (
  <div className={styles.DivWpcTermItemContentWrapper_11_2227}>
    <div className={styles.Label_11_2228}>
      <div className={styles.SpanWpcFilterLabelWrapper_11_2229}>
        <div className={styles.A_11_2230}>
          <a href={item.href} className={styles.FilterTermLink} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </div>
        <div className={styles.SpanWpcTermCountMargin_11_2232}>
          <div className={styles.SpanWpcTermCount_11_2233}>
            <span className={styles.generated_23_11_2234}>{item.count}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export function BrowseAllJobsSection({
  jobCards,
  sidebarIndustries,
  sidebarLocations,
  sidebarCurrencies,
}: BrowseAllJobsSectionProps) {
  return (
    <section className="flex flex-col items-start w-full bg-white overflow-hidden">
      <div className={styles.DivElementorElement_11_2202}>
        <div className={styles.DivElementorElement_11_2203}>
          <div className={styles.DivElementorWidgetContainer_11_2204}>
            <div className={styles.H2ElementorHeadingTitle_11_2205}>
              <span className={styles.BrowseAllJobs_11_2206}>Browse all jobs</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className={styles.DivElementorElement_11_2207}>
          <div className={styles.DivEConInner_11_2208}>
            {/* Sidebar — WP Job Manager style: bordered panel + term chips */}
            <div className={`${styles.DivElementorWidgetContainer_11_2209} ${styles.FilterSidebarSurface}`}>
              <div className={`${styles.DivWpcFiltersWidgetWrapper_11_2210} ${styles.FilterSidebarInner}`}>
                {/* Search */}
                <div className={styles.DivWpcFiltersSection_11_2211}>
                  <div className={styles.DivWidgetTitle_11_2212}>
                    <span className={styles.Search_11_2213}>Search</span>
                  </div>
                  <div className={styles.DivWpcSearchFieldWrapper_11_2214}>
                    <div className={styles.InputWpcSearchField_11_2215}>
                      <input
                        type="text"
                        placeholder="Search jobs"
                        className="w-full bg-transparent border-none outline-none text-[15.3px] font-inherit"
                        style={{ border: 'none', padding: 0 }}
                      />
                    </div>
                    <div className={styles.SpanWpcSearchIcon_11_2218}>
                      <div className={styles.Before_11_2219}>
                        <div className={styles.ImageFill_11_2220}>
                          <div className={styles.Image_11_2221}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_11_2221)">
                                <path d="M13.8086 12.1051L11.0824 9.37891C10.9594 9.25586 10.7926 9.1875 10.6176 9.1875H10.1719C10.9266 8.22227 11.375 7.0082 11.375 5.6875C11.375 2.5457 8.8293 0 5.6875 0C2.5457 0 0 2.5457 0 5.6875C0 8.8293 2.5457 11.375 5.6875 11.375C7.0082 11.375 8.22227 10.9266 9.1875 10.1719V10.6176C9.1875 10.7926 9.25586 10.9594 9.37891 11.0824L12.1051 13.8086C12.3621 14.0656 12.7777 14.0656 13.032 13.8086L13.8059 13.0348C14.0629 12.7777 14.0629 12.3621 13.8086 12.1051ZM5.6875 9.1875C3.7543 9.1875 2.1875 7.62344 2.1875 5.6875C2.1875 3.7543 3.75156 2.1875 5.6875 2.1875C7.6207 2.1875 9.1875 3.75156 9.1875 5.6875C9.1875 7.6207 7.62344 9.1875 5.6875 9.1875Z" fill="#AAAAAA" />
                              </g>
                              <defs>
                                <clipPath id="clip0_11_2221">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industry */}
                <div className={styles.DivWpcFiltersSection_11_2223}>
                  <div className={styles.DivWidgetTitle_11_2224}>
                    <span className={styles.Industry_11_2225}>Industry</span>
                  </div>
                  <div className={styles.UlWpcFiltersUlList_11_2226} style={{ overflowY: 'auto', height: 'auto', maxHeight: '550px' }}>
                    <div className={styles.FilterTermsList}>
                      {sidebarIndustries.map((item, idx) => (
                        <SidebarFilterLink key={`ind-${item.label}-${idx}`} item={item} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className={styles.DivWpcFiltersSection_11_2312}>
                  <div className={styles.DivWidgetTitle_11_2313}>
                    <span className={styles.Location_11_2314}>Location</span>
                  </div>
                  <div className={styles.UlWpcFiltersUlList_11_2315} style={{ overflowY: 'auto', height: 'auto', maxHeight: '550px' }}>
                    <div className={styles.FilterTermsList}>
                      {sidebarLocations.map((item, idx) => (
                        <SidebarFilterLink key={`loc-${item.label}-${idx}`} item={item} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Currency */}
                <div className={styles.DivWpcFiltersSection_11_2404}>
                  <div className={styles.DivWidgetTitle_11_2405}>
                    <span className={styles.Currency_11_2406}>Currency</span>
                  </div>
                  <div className={styles.UlWpcFiltersUlList_11_2407}>
                    <div className={styles.FilterTermsList}>
                      {sidebarCurrencies.map((item, idx) => (
                        <SidebarFilterLink key={`cur-${item.label}-${idx}`} item={item} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Salary */}
                <div className={styles.DivWpcFiltersSection_11_2424}>
                  <div className={styles.DivWidgetTitle_11_2425}>
                    <span className={styles.Salary_11_2426}>Salary</span>
                  </div>
                  <div className={styles.FormWpcFilterRangeForm_2555_11_2427}>
                    <div className={styles.DivWpcFiltersRangeWrapper_11_2428}>
                      <div className={styles.DivWpcFiltersRangeColumnMargin_11_2429}>
                        <div className={styles.DivWpcFiltersRangeColumn_11_2430}>
                          <div className={styles.InputWpcFiltersRangeMin_11_2431}>
                            <input
                              type="text"
                              inputMode="numeric"
                              placeholder="0"
                              aria-label="Minimum salary"
                              className="w-full min-h-[24px] bg-transparent border-none outline-none text-[#161618] text-[15px] leading-6 font-inherit text-center"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.DivWpcFiltersRangeColumn_11_2438}>
                        <div className={styles.InputWpcFiltersRangeMax_11_2439}>
                          <input
                            type="text"
                            inputMode="numeric"
                            placeholder="1200000"
                            aria-label="Maximum salary"
                            className="w-full min-h-[24px] bg-transparent border-none outline-none text-[#161618] text-[15px] leading-6 font-inherit text-center"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.FilterSalarySliderRow} aria-hidden>
                      <div className={styles.FilterSalaryTrack}>
                        <div className={styles.FilterSalaryTrackFill} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content (Job Cards) */}
            <div className={styles.DivElementorWidgetContainer_11_2450}>
              <div className={styles.DivElementorLoopContainer_11_2451}>
                {jobCards.map((job, index) => (
                  <JobCard key={index} job={job} applyHref={`/premium-jobs/${job.slug}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
