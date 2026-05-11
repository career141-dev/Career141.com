'use client'

import { useEffect, useState } from 'react'
import { getIndustries } from '@/lib/admin-actions'
import { EditJobForm } from './edit-job-form'

export default function NewJobPageClient() {
  const [industries, setIndustries] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const data = await getIndustries()
      setIndustries(data)
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <div>Loading...</div>

  return <EditJobForm industries={industries} />
}
