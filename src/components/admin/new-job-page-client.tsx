'use client'

import { useEffect, useState } from 'react'
import { EditJobForm } from './edit-job-form'

export default function NewJobPageClient() {
  const [industries, setIndustries] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const res = await fetch('/api/admin/industries')
      const data = await res.json()
      setIndustries(data.industries || [])
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <div>Loading...</div>

  return <EditJobForm industries={industries} />
}
