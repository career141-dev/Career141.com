'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { updateJobAction } from '@/lib/admin-actions'
import type { FormState } from '@/lib/admin-actions'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

export function EditJobForm({ id, job, industries }: { id?: string; job?: Record<string, string | null>; industries: string[] }) {
  const router = useRouter()
  // If id is present, it's an update; otherwise it's a create
  const updateJobWithId = updateJobAction.bind(null, id || 'new')
  const [state, action] = useActionState(updateJobWithId, {} as FormState)

  useEffect(() => {
    if (state?.success) router.push('/admin/jobs')
  }, [state, router])

  const errs = state?.errors || {}
  const vals = state?.job || job

  return (
    <>
      {errs.general && <div className="alert alert-error">{errs.general}</div>}
      <div className="card">
        <form action={action}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input type="text" id="title" name="title" defaultValue={vals.title || ''} required onChange={(e) => {
                const slugField = document.getElementById('slug') as HTMLInputElement
                if (slugField && !slugField.dataset.edited) slugField.value = slugify(e.target.value)
              }} />
              {errs.title && <div className="error">{errs.title}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="slug">Slug *</label>
              <input type="text" id="slug" name="slug" defaultValue={vals.slug || ''} required onChange={(e) => { e.target.dataset.edited = 'true' }} />
              {errs.slug && <div className="error">{errs.slug}</div>}
              <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>Auto-suggested from title. Will be checked for uniqueness on save.</div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="industry">Industry *</label>
              <select id="industry" name="industry" required defaultValue={vals.industry || ''}>
                <option value="">Select industry</option>
                {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                <option value="Other">Other</option>
              </select>
              {errs.industry && <div className="error">{errs.industry}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="currency">Currency</label>
              <select id="currency" name="currency" defaultValue={vals.currency || 'LKR'}>
                <option value="LKR">LKR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="salary_min">Salary Min</label>
              <input type="number" id="salary_min" name="salary_min" defaultValue={vals.salary_min ?? ''} />
            </div>
            <div className="form-group">
              <label htmlFor="salary_max">Salary Max</label>
              <input type="number" id="salary_max" name="salary_max" defaultValue={vals.salary_max ?? ''} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" defaultValue={vals.location || ''} required />
              {errs.location && <div className="error">{errs.location}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="job_type">Job Type</label>
              <select id="job_type" name="job_type" defaultValue={vals.job_type || ''}>
                <option value="">Same as industry</option>
                {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="work_type">Work Type</label>
              <select id="work_type" name="work_type" defaultValue={vals.work_type || 'On-Site'}>
                <option value="On-Site">On-Site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="posted_date">Posted Date</label>
              <input type="date" id="posted_date" name="posted_date" defaultValue={vals.posted_date || ''} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="roles">Roles & Responsibilities (Markdown)</label>
            <textarea id="roles" name="roles" style={{ minHeight: 200 }} defaultValue={vals.roles || ''} />
            <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>Use ### for headings, - for bullet points, plain text for paragraphs</div>
          </div>

          <div className="form-group">
            <label htmlFor="pre_requisites">Pre Requisites (Markdown)</label>
            <textarea id="pre_requisites" name="pre_requisites" style={{ minHeight: 150 }} defaultValue={vals.pre_requisites || ''} />
            <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>Use ### for headings, - for bullet points, plain text for paragraphs</div>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <a href="/admin/jobs" className="btn btn-outline">Cancel</a>
          </div>
        </form>
      </div>
    </>
  )
}
