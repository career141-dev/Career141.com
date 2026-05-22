'use client'

import { useState, FormEvent, useEffect } from 'react'

function MarkdownToolbar({ targetId }: { targetId: string }) {
  function insertMarkdown(syntax: 'heading' | 'bold' | 'bullet') {
    const el = document.getElementById(targetId) as HTMLTextAreaElement | null
    if (!el) return
    const start = el.selectionStart
    const end = el.selectionEnd
    const before = el.value.substring(0, start)
    const selected = el.value.substring(start, end)
    const after = el.value.substring(end)

    let insertion = ''
    let cursorPos = start

    switch (syntax) {
      case 'heading':
        insertion = '### '
        cursorPos = start + insertion.length
        break
      case 'bold':
        if (selected) {
          insertion = `**${selected}**`
          cursorPos = start + insertion.length
        } else {
          insertion = '****'
          cursorPos = start + 2
        }
        break
      case 'bullet':
        insertion = '- '
        cursorPos = start + insertion.length
        break
    }

    el.value = before + insertion + after
    el.focus()
    el.selectionStart = el.selectionEnd = cursorPos
    el.dispatchEvent(new Event('input', { bubbles: true }))
  }

  const btnStyle: React.CSSProperties = {
    background: '#f0f0f0', border: '1px solid #ddd', borderRadius: 4,
    padding: '4px 10px', cursor: 'pointer', fontSize: 13, fontWeight: 600,
    fontFamily: 'monospace', lineHeight: 1, marginRight: 4,
  }

  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>
      <button type="button" style={btnStyle} onClick={() => insertMarkdown('heading')} title="Heading">H</button>
      <button type="button" style={btnStyle} onClick={() => insertMarkdown('bold')} title="Bold"><b>B</b></button>
      <button type="button" style={btnStyle} onClick={() => insertMarkdown('bullet')} title="Bullet list">•</button>
      <span style={{ fontSize: 12, color: '#999', marginLeft: 8, alignSelf: 'center' }}>
        ### heading, **bold**, - bullet
      </span>
    </div>
  )
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

export function EditJobForm({ id, job: initialJob, industries: initialIndustries }: { id?: string; job?: Record<string, string | null>; industries?: string[] }) {
  const [state, setState] = useState<{ success?: boolean; errors?: Record<string, string>; job?: Record<string, string> }>({})
  const [jobData, setJobData] = useState<Record<string, any> | null>(initialJob || null)
  const [industries, setIndustries] = useState<string[]>(initialIndustries || [])
  const [loading, setLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(!initialIndustries || (!!id && !initialJob))

  useEffect(() => {
    async function loadData() {
      try {
        const [industriesRes, jobRes] = await Promise.all([
          initialIndustries ? Promise.resolve(null) : fetch('/api/admin/industries'),
          (id && !initialJob) ? fetch(`/api/admin/jobs/${id}`) : Promise.resolve(null),
        ])
        if (industriesRes) {
          const data = await industriesRes.json()
          setIndustries(data.industries || [])
        }
        if (jobRes) {
          const data = await jobRes.json()
          setJobData(data.job || null)
        }
      } catch {
        setState({ errors: { general: 'Failed to load form data' } })
      } finally {
        setPageLoading(false)
      }
    }
    loadData()
  }, [id, initialJob, initialIndustries])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setState({})
    const formData = new FormData(e.currentTarget)
    try {
      const url = id ? `/api/admin/jobs/${id}` : '/api/admin/jobs'
      const res = await fetch(url, { method: 'POST', body: formData })
      const data = await res.json()
      if (data.success) {
        window.location.href = '/admin/jobs'
      } else {
        setState(data)
      }
    } catch {
      setState({ errors: { general: 'Network error. Please try again.' } })
    } finally {
      setLoading(false)
    }
  }

  if (pageLoading) return <div>Loading...</div>

  const errs = state?.errors || {}
  const vals = (state?.job || jobData || {}) as Record<string, any>
  
  const today = new Date().toISOString().split('T')[0]
  const defaultDate = vals.posted_date || (id ? '' : today)

  return (
    <>
      {errs.general && <div className="alert alert-error">{errs.general}</div>}
      <div className="card">
        <form onSubmit={handleSubmit}>
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
                <option value="BDT">BDT</option>
                <option value="SAR">SAR</option>
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
              <input type="date" id="posted_date" name="posted_date" defaultValue={defaultDate} />
            </div>
          </div>

          <MarkdownToolbar targetId="roles" />
          <div className="form-group">
            <label htmlFor="roles">Roles & Responsibilities (Markdown)</label>
            <textarea id="roles" name="roles" style={{ minHeight: 200 }} defaultValue={vals.roles || ''} />
          </div>

          <MarkdownToolbar targetId="pre_requisites" />
          <div className="form-group">
            <label htmlFor="pre_requisites">Pre Requisites (Markdown)</label>
            <textarea id="pre_requisites" name="pre_requisites" style={{ minHeight: 150 }} defaultValue={vals.pre_requisites || ''} />
          </div>

          <MarkdownToolbar targetId="additional_benefits" />
          <div className="form-group">
            <label htmlFor="additional_benefits">Additional Benefits (Markdown)</label>
            <textarea id="additional_benefits" name="additional_benefits" style={{ minHeight: 150 }} defaultValue={vals.additional_benefits || ''} />
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Saving...' : 'Save Changes'}</button>
            <a href="/admin/jobs" className="btn btn-outline">Cancel</a>
          </div>
        </form>
      </div>
    </>
  )
}
