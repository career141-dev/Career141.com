'use client'

import { useState, FormEvent } from 'react'

export function LoginForm() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch('/api/admin/login', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.success) {
        window.location.href = '/admin/jobs'
      } else {
        setError(data.error || 'Login failed')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', background: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <style>{`
        .login-box { background: white; border-radius: 12px; padding: 40px; width: 400px; box-shadow: 0 4px 24px rgba(0,0,0,0.1); }
        h1 { font-size: 24px; margin-bottom: 8px; color: #0F221B; }
        p { font-size: 14px; color: #666; margin-bottom: 24px; }
        .form-group { margin-bottom: 16px; }
        label { display: block; margin-bottom: 4px; font-weight: 500; font-size: 14px; }
        input { width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; }
        input:focus { outline: none; border-color: #37a65e; }
        button { width: 100%; padding: 10px; background: #11593f; color: white; border: none; border-radius: 6px; font-size: 14px; cursor: pointer; font-weight: 500; }
        button:hover { background: #0d4732; }
        .error { background: #fef2f2; border: 1px solid #fecaca; color: #b91c1c; padding: 10px 14px; border-radius: 6px; margin-bottom: 16px; font-size: 13px; }
      `}</style>
      <div className="login-box">
        <h1>Admin Login</h1>
        <p>Career141 Premium Jobs Management</p>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>
      </div>
    </div>
  )
}
