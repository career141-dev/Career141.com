'use client'

import React, { useState, useMemo, useEffect } from 'react'
import styles from '@/styles/BrowseAllJobs.module.css'
import { JobCard, type Job } from '@/components/common/JobCard'
import DivELoopLoadMore from '@/components/DivELoopLoadMore'

interface SidebarItem {
  label: string;
  count: string;
  href: string;
}

interface BrowseAllJobsSectionProps {
  jobCards: Job[];
  // These will now be used as 'initial' or overridden by dynamic calculations
  sidebarIndustries: SidebarItem[];
  sidebarLocations: SidebarItem[];
  sidebarCurrencies: SidebarItem[];
}

const SidebarFilterLink = ({ item }: { item: SidebarItem }) => (
  <div className={styles.DivWpcTermItemContentWrapper_11_2227}>
    <div className={styles.Label_11_2228}>
      <div className={styles.SpanWpcFilterLabelWrapper_11_2229}>
        <div className={styles.A_11_2230}>
          <a 
            href={item.href} 
            className={styles.FilterTermLink}
            onClick={(e) => {
              if (item.href === '#') e.preventDefault();
            }}
          >
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
}: BrowseAllJobsSectionProps) {
  // Restore visibleCount from sessionStorage, default to 12
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === 'undefined') return 12
    const saved = sessionStorage.getItem('jobsVisibleCount')
    return saved ? parseInt(saved, 10) : 12
  })
  
  const [searchQuery, setSearchQuery] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)

  // Persist visibleCount to sessionStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('jobsVisibleCount', visibleCount.toString())
    }
  }, [visibleCount])

  // Restore scroll position on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('jobsScrollPosition')
      if (saved) {
        const position = parseInt(saved, 10)
        // Use requestAnimationFrame to ensure DOM is fully rendered
        requestAnimationFrame(() => {
          window.scrollTo({
            top: position,
            behavior: 'instant' as ScrollBehavior
          })
        })
      }
    }
  }, [])

  // 1. Filter jobs based on search
  const filteredJobs = useMemo(() => {
    if (!searchQuery) return jobCards
    const q = searchQuery.toLowerCase()
    return jobCards.filter(job => 
      job.title.toLowerCase().includes(q) || 
      job.industry.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q)
    )
  }, [jobCards, searchQuery])

  // 2. Calculate Dynamic Sidebar Stats
  const dynamicStats = useMemo(() => {
    const industries: Record<string, number> = {}
    const locations: Record<string, number> = {}
    const currencies: Record<string, number> = {}

    jobCards.forEach(job => {
      industries[job.industry] = (industries[job.industry] || 0) + 1
      locations[job.location] = (locations[job.location] || 0) + 1
      currencies[job.currency] = (currencies[job.currency] || 0) + 1
    })

    const toSidebar = (obj: Record<string, number>) => 
      Object.entries(obj)
        .sort((a, b) => b[1] - a[1]) // Sort by count descending
        .map(([label, count]) => ({ label, count: `(${count})`, href: '#' }))

    return {
      industries: toSidebar(industries),
      locations: toSidebar(locations),
      currencies: toSidebar(currencies)
    }
  }, [jobCards])

  const visibleJobs = filteredJobs.slice(0, visibleCount)
  const hasMore = visibleCount < filteredJobs.length

  const handleLoadMore = (e: React.MouseEvent) => {
    e.preventDefault()
    // Capture current scroll position BEFORE updating state
    const currentScrollY = window.scrollY
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('jobsScrollPosition', currentScrollY.toString())
    }
    
    setVisibleCount(prev => prev + 12)
    
    // Restore scroll position in the next frame to prevent jumping
    requestAnimationFrame(() => {
      window.scrollTo({
        top: currentScrollY,
        behavior: 'instant' as ScrollBehavior
      })
    })
  }

  // Save scroll position when navigating away from browse page
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('jobsScrollPosition', window.scrollY.toString())
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    
    // Also save when clicking links (job cards navigate away)
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a') || target.closest('button[role="link"]')) {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('jobsScrollPosition', window.scrollY.toString())
        }
      }
    }

    document.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  return (
    <section className="flex flex-col items-start w-full bg-white">
      <div className={styles.DivElementorElement_11_2202}>
        <div className={styles.DivElementorElement_11_2203}>
          <div className={styles.DivElementorWidgetContainer_11_2204}>
            <div className={styles.H2ElementorHeadingTitle_11_2205}>
              <span className={styles.BrowseAllJobs_11_2206}>Browse all jobs</span>
              <div className="mt-2 text-[#666] text-sm md:text-base font-medium">
                Showing {Math.min(visibleCount, filteredJobs.length)} of {filteredJobs.length} jobs
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className={styles.DivElementorElement_11_2207}>
          <div className={styles.DivEConInner_11_2208}>
            {/* Sidebar — WP Job Manager style */}
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
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value)
                          setVisibleCount(12) // Reset pagination on search
                          // Clear saved scroll position when searching
                          if (typeof window !== 'undefined') {
                            sessionStorage.removeItem('jobsScrollPosition')
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') e.preventDefault();
                        }}
                        className="w-full bg-transparent border-none outline-none text-[15.3px] font-inherit"
                        style={{ border: 'none', padding: 0 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Industry */}
                <div className={styles.DivWpcFiltersSection_11_2223}>
                  <div className={styles.DivWidgetTitle_11_2224}>
                    <span className={styles.Industry_11_2225}>Industry</span>
                  </div>
                  <div className={styles.UlWpcFiltersUlList_11_2226}>
                    <div className={styles.FilterTermsList}>
                      {dynamicStats.industries.map((item, idx) => (
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
                  <div className={styles.UlWpcFiltersUlList_11_2315}>
                    <div className={styles.FilterTermsList}>
                      {dynamicStats.locations.map((item, idx) => (
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
                      {dynamicStats.currencies.map((item, idx) => (
                        <SidebarFilterLink key={`cur-${item.label}-${idx}`} item={item} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Salary Section */}
                <div className={styles.DivWpcFiltersSection_11_2404}>
                  <div className={styles.DivWidgetTitle_11_2405}>
                    <span className={styles.Currency_11_2406}>Salary</span>
                  </div>
                  <div className={styles.FilterSalarySliderRow}>
                    <div className={styles.FilterSalaryTrack}>
                      <div className={styles.FilterSalaryTrackFill} />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-[#252525] font-medium opacity-80">
                      <span>0</span>
                      <span>1,200,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content (Job Cards) */}
            <div className={styles.DivElementorWidgetContainer_11_2450}>
              <div className={styles.DivElementorLoopContainer_11_2451}>
                {visibleJobs.map((job) => (
                  <JobCard key={job.slug} job={job} applyHref={`/premium-jobs/${job.slug}`} />
                ))}
              </div>
              
              {/* Load More Button */}
              {hasMore && (
                <div className="flex flex-col items-center justify-center w-full mt-12 mb-8">
                  <DivELoopLoadMore onClick={handleLoadMore} />
                </div>
              )}

              {!hasMore && filteredJobs.length > 0 && (
                <div className="flex justify-center mt-12 text-[#999] font-medium italic">
                  You&apos;ve reached the end of the listings.
                </div>
              )}

              {filteredJobs.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="text-2xl font-bold text-[#161618] mb-2">No jobs found</div>
                  <div className="text-[#666]">Try adjusting your search criteria.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
