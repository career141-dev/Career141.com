import { getJobs, getIndustries } from '@/lib/admin-actions'
import Link from 'next/link'
import { DeleteButton } from './delete-button'

export default async function JobsPage(props: { searchParams: Promise<{ page?: string; search?: string; industry?: string }> }) {
  const searchParams = await props.searchParams
  const page = parseInt(searchParams.page || '1')
  const search = searchParams.search || ''
  const industry = searchParams.industry || ''

  const [{ jobs, total }, industries] = await Promise.all([
    getJobs({ page, search, industry }),
    getIndustries(),
  ])

  const totalPages = Math.ceil(total / 20)
  const qs = (p: number) => {
    const params = new URLSearchParams()
    if (p > 1) params.set('page', String(p))
    if (search) params.set('search', search)
    if (industry) params.set('industry', industry)
    return params.toString()
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontSize: 14, color: '#666' }}>{total} total jobs</div>
        <Link href="/admin/jobs/new" className="btn btn-primary">+ New Job</Link>
      </div>

      <form className="search-bar" method="get">
        <input type="text" name="search" placeholder="Search by title, location, or slug..." defaultValue={search} />
        <select name="industry" defaultValue={industry}>
          <option value="">All Industries</option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Industry</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length === 0 ? (
              <tr><td colSpan={6} style={{ textAlign: 'center', padding: 40, color: '#999' }}>No jobs found</td></tr>
            ) : jobs.map((job) => (
              <tr key={job.id}>
                <td><strong>{job.title}</strong><br /><span style={{ fontSize: 11, color: '#999' }}>{job.slug}</span></td>
                <td><span className="badge badge-industry">{job.industry}</span></td>
                <td>{job.location}</td>
                <td>{job.currency} {job.salary_min ?? '-'} - {job.salary_max ?? '-'}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{job.posted_date}</td>
                <td style={{ whiteSpace: 'nowrap' }}>
                  <Link href={`/admin/jobs/${job.id}/edit`} className="btn btn-sm btn-outline" style={{ marginRight: 4 }}>Edit</Link>
                  <DeleteButton jobId={job.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="pagination">
            {page > 1 && <a href={`?${qs(page - 1)}`}>Previous</a>}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => {
              if (i === page) return <span key={i} className="current">{i}</span>
              if (i <= 3 || i > totalPages - 3 || Math.abs(i - page) <= 2) return <a key={i} href={`?${qs(i)}`}>{i}</a>
              if (i === 4 || i === totalPages - 3) return <span key={i}>...</span>
              return null
            })}
            {page < totalPages && <a href={`?${qs(page + 1)}`}>Next</a>}
          </div>
        )}
      </div>
    </>
  )
}
