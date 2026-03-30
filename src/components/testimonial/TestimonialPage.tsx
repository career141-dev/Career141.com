'use client'

import { useEffect, useState } from 'react'
import { Navbar, CompanyFooter } from '@/components/common'
import DivElementorElement from './imports/DivElementorElement'
import DivElementorElementCandidates from './imports/DivElementorElement-1-695'
import DivElementorElementEmployees from './imports/DivElementorElement-6-241'
import DivElementorElementContact from './imports/DivElementorElement-10-635'
import Component390WDefault from './imports/390WDefault'

export function TestimonialPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [clientsPage, setClientsPage] = useState(1)
  const [candidatesPage, setCandidatesPage] = useState(1)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    let timeoutId: NodeJS.Timeout
    const debouncedCheck = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkMobile, 150)
    }

    window.addEventListener('resize', debouncedCheck)

    return () => {
      window.removeEventListener('resize', debouncedCheck)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <main className="flex flex-col items-start relative bg-white w-full min-h-screen">
      <Navbar variant="solid" />
      <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white">
        {isMobile ? (
          <div className="w-full max-w-full overflow-x-hidden">
            <Component390WDefault
              clientsPage={clientsPage}
              candidatesPage={candidatesPage}
              onClientsPageChange={setClientsPage}
              onCandidatesPageChange={setCandidatesPage}
            />
          </div>
        ) : (
          <div className="w-full max-w-full overflow-x-hidden">
            <DivElementorElement currentPage={clientsPage} onPageChange={setClientsPage} />
            <DivElementorElementCandidates currentPage={candidatesPage} onPageChange={setCandidatesPage} />
            <DivElementorElementEmployees />
            <DivElementorElementContact />
          </div>
        )}
      </div>
      <CompanyFooter />
    </main>
  )
}
