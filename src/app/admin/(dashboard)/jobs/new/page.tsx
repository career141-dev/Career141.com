'use client'
export const runtime = 'edge'

import { useActionState } from 'react'
import { useRouter } from 'next/navigation'
import { createJobAction, getIndustries } from '@/lib/admin-actions'
import type { FormState } from '@/lib/admin-actions'
import { useEffect, useState } from 'react'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

export default function NewJobPage() {
  const router = useRouter()
  const [state, action] = useActionState(createJobAction, {} as FormState)
  const [industries, setIndustries] = useState<string[]>([])
  const [jobSlug, setJobSlug] = useState('')
  const [slugReadOnly, setSlugReadOnly] = useState(true)

  useEffect(() => {
    getIndustries().then(setIndustries)
  }, [])

  useEffect(() => {
    if (state?.success) router.push('/admin/jobs')
  }, [state, router])

  const errs = (state as any)?.errors || {}

  return (
    <>
      <style>{`
        .slug-row { display: flex; align-items: center; gap: 6px; }
        .slug-row input { flex: 1; }
        .slug-row button { padding: 4px 8px; font-size: 12px; white-space: nowrap; }
        .slug-hint { font-size: 12px; color: #999; margin-top: 4px; }
      `}</style>
      {errs.general && <div className="alert alert-error">{errs.general}</div>}
      <div className="card">
        <form action={action}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input type="text" id="title" name="title" defaultValue={(state as any)?.job?.title || ''} required onChange={(e) => { if (slugReadOnly) setJobSlug(slugify(e.target.value)) }} />
              {errs.title && <div className="error">{errs.title}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="slug">Slug</label>
              <div className="slug-row">
                <input type="text" id="slug" name="slug" value={jobSlug} onChange={(e) => setJobSlug(e.target.value)} readOnly={slugReadOnly} style={{ background: slugReadOnly ? '#f4f4f4' : '#fff', cursor: slugReadOnly ? 'default' : 'text' }} />
                <button type="button" onClick={() => setSlugReadOnly(!slugReadOnly)}>{slugReadOnly ? 'Edit' : 'Lock'}</button>
              </div>
              <div className="slug-hint">Auto-generated from title. Click Edit to override.</div>
              {errs.slug && <div className="error">{errs.slug}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="industry">Industry *</label>
              <select id="industry" name="industry" required defaultValue={(state as any)?.job?.industry || ''}>
                <option value="">Select industry</option>
                {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                <option value="Other">Other</option>
              </select>
              {errs.industry && <div className="error">{errs.industry}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="currency">Currency</label>
              <select id="currency" name="currency" defaultValue={(state as any)?.job?.currency || 'LKR'}>
                <option value="LKR">LKR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="salary_min">Salary Min</label>
              <input type="number" id="salary_min" name="salary_min" defaultValue={(state as any)?.job?.salary_min || ''} />
            </div>
            <div className="form-group">
              <label htmlFor="salary_max">Salary Max</label>
              <input type="number" id="salary_max" name="salary_max" defaultValue={(state as any)?.job?.salary_max || ''} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input type="text" id="location" name="location" defaultValue={(state as any)?.job?.location || ''} required />
              {errs.location && <div className="error">{errs.location}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="job_type">Job Type</label>
              <select id="job_type" name="job_type" defaultValue={(state as any)?.job?.job_type || ''}>
                <option value="">Same as industry</option>
                {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="work_type">Work Type</label>
              <select id="work_type" name="work_type" defaultValue={(state as any)?.job?.work_type || 'On-Site'}>
                <option value="On-Site">On-Site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="posted_date">Posted Date *</label>
              <input type="date" id="posted_date" name="posted_date" defaultValue={(state as any)?.job?.posted_date || new Date().toISOString().split('T')[0]} required />
              {errs.posted_date && <div className="error">{errs.posted_date}</div>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="roles">Roles & Responsibilities (Markdown)</label>
            <textarea id="roles" name="roles" style={{ minHeight: 200 }} defaultValue={(state as any)?.job?.roles || ''} />
            <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>Use ### for headings, - for bullet points, plain text for paragraphs</div>
          </div>

          <div className="form-group">
            <label htmlFor="pre_requisites">Pre Requisites (Markdown)</label>
            <textarea id="pre_requisites" name="pre_requisites" style={{ minHeight: 150 }} defaultValue={(state as any)?.job?.pre_requisites || ''} />
            <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>Use ### for headings, - for bullet points, plain text for paragraphs</div>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <button type="submit" className="btn btn-primary">Create Job</button>
            <a href="/admin/jobs" className="btn btn-outline">Cancel</a>
          </div>
        </form>
      </div>
    </>
  )
}
