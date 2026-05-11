'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { DeleteButton } from './delete-button'

export default function JobsPageClient() {
  const [jobs, setJobs] = useState<any[]>([])
  const [industries, setIndustries] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const [jobsRes, industriesRes] = await Promise.all([
        fetch('/api/admin/jobs'),
        fetch('/api/admin/industries'),
      ])
      const [jobsData, industriesData] = await Promise.all([jobsRes.json(), industriesRes.json()])
      setJobs(jobsData.jobs || [])
      setIndustries(industriesData.industries || [])
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3>Premium Jobs ({jobs.length})</h3>
        <Link href="/admin/jobs/new" className="btn btn-primary">Add New Job</Link>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Industry</th>
            <th>Location</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td><strong>{job.title}</strong></td>
              <td><span className="badge badge-industry">{job.industry}</span></td>
              <td>{job.location}</td>
              <td>{new Date(job.posted_date).toLocaleDateString()}</td>
              <td>
                <Link href={`/admin/jobs/${job.id}/edit`} className="btn btn-sm btn-outline" style={{ marginRight: 8 }}>Edit</Link>
                <DeleteButton jobId={job.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
