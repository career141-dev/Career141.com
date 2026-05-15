'use client'

import { useEffect, useState, useRef } from 'react'
import { DeleteButton } from './delete-button'

export default function JobsPageClient() {
  const [jobs, setJobs] = useState<any[]>([])
  const [industries, setIndustries] = useState<string[]>([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const limit = 20
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    async function loadData() {
      const params = new URLSearchParams({ page: String(page) })
      if (search) params.set('search', search)
      const [jobsRes, industriesRes] = await Promise.all([
        fetch(`/api/admin/jobs?${params}`),
        fetch('/api/admin/industries'),
      ])
      const [jobsData, industriesData] = await Promise.all([jobsRes.json(), industriesRes.json()])
      setJobs(jobsData.jobs || [])
      setTotal(jobsData.total || 0)
      setIndustries(industriesData.industries || [])
      setLoading(false)
    }
    loadData()
  }, [page, search])

  function handleSearch(value: string) {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setSearch(value)
      setPage(1)
    }, 300)
  }

  const totalPages = Math.ceil(total / limit)

  if (loading) return <div>Loading...</div>

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3>Premium Jobs ({total})</h3>
        <a href="/admin/jobs/new" className="btn btn-primary">Add New Job</a>
      </div>

      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Search by title, location, or slug..."
          defaultValue={search}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: '100%', maxWidth: 360, padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6, fontSize: 14 }}
        />
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
                <a href={`/admin/jobs/${job.id}/edit`} className="btn btn-sm btn-outline" style={{ marginRight: 8 }}>Edit</a>
                <DeleteButton jobId={job.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
          <button className="btn btn-outline btn-sm" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Previous</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button key={p} className={`btn btn-sm ${p === page ? 'btn-primary' : 'btn-outline'}`} onClick={() => setPage(p)}>{p}</button>
          ))}
          <button className="btn btn-outline btn-sm" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
        </div>
      )}
    </div>
  )
}
