import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { verifySession } from '@/lib/admin-auth'
import { getIndustries, getJob } from '@/lib/admin-actions'

// Import the consolidated components
import { LoginForm } from '../../../components/admin/login-form'
import { EditJobForm } from '../../../components/admin/edit-job-form'
import NewJobPageClient from '../../../components/admin/new-job-page-client'
import JobsPageClient from '../../../components/admin/jobs-page-client'

export const runtime = 'edge'

const AdminLayoutStyles = () => (
  <style>{`
    .layout { display: flex; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f7fa; color: #333; }
    .sidebar { width: 240px; background: #0F221B; color: white; padding: 24px 0; flex-shrink: 0; }
    .sidebar h1 { font-size: 18px; padding: 0 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 16px; }
    .sidebar a { display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: background 0.2s; }
    .sidebar a:hover { background: rgba(255,255,255,0.1); color: white; }
    .main { flex: 1; padding: 24px 32px; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .header h2 { font-size: 24px; font-weight: 600; }
    .header .user-info { font-size: 14px; color: #666; }
    .card { background: white; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid #eee; font-size: 14px; }
    th { background: #f9fafb; font-weight: 600; color: #555; }
    .btn { display: inline-block; padding: 8px 16px; border-radius: 6px; font-size: 14px; text-decoration: none; border: none; cursor: pointer; font-weight: 500; }
    .btn-primary { background: #11593f; color: white; }
    .btn-danger { background: #d63637; color: white; }
    .btn-sm { padding: 4px 10px; font-size: 12px; }
    .btn-outline { background: transparent; border: 1px solid #ddd; color: #333; }
    .form-group { margin-bottom: 16px; }
    .form-group label { display: block; margin-bottom: 4px; font-weight: 500; font-size: 14px; }
    .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .alert { padding: 12px 16px; border-radius: 6px; margin-bottom: 16px; font-size: 14px; }
    .alert-error { background: #fef2f2; border: 1px solid #fecaca; color: #b91c1c; }
    .badge { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 500; }
    .badge-industry { background: #e0f2fe; color: #0369a1; }
  `}</style>
)

export default async function AdminCatchAllPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug || []
  const path = slug.join('/')
  const session = await verifySession()

  // 1. Handle Login Page
  if (path === 'login' || slug[0] === 'login') {
    if (session) redirect('/admin/jobs')
    return <LoginForm />
  }

  // 2. Protect all other admin routes
  if (!session) redirect('/admin/login')

  // 3. Admin Root -> Redirect to Jobs
  if (slug.length === 0) redirect('/admin/jobs')

  // Helper to wrap dashboard routes in the layout
  const wrap = (children: React.ReactNode) => (
    <div className="layout">
      <AdminLayoutStyles />
      <nav className="sidebar">
        <h1>Career141 Admin</h1>
        <Link href="/admin/jobs">Premium Jobs</Link>
        <form action="/api/admin/logout" method="POST">
          <button type="submit" style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 20px', background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 14, marginTop: 16, fontFamily: 'inherit' }}>
            Logout
          </button>
        </form>
      </nav>
      <div className="main">
        <div className="header">
          <h2>Dashboard</h2>
          <div className="user-info">
            Admin
            <form action="/api/admin/logout" method="POST" style={{ display: 'inline' }}>
              <button type="submit" style={{ background: 'none', border: 'none', color: '#d63637', cursor: 'pointer', marginLeft: 8, fontSize: 14, fontFamily: 'inherit' }}>Logout</button>
            </form>
          </div>
        </div>
        {children}
      </div>
    </div>
  )

  // 4. Jobs List: /admin/jobs
  if (path === 'jobs' || slug[0] === 'jobs' && slug.length === 1) {
    return wrap(<JobsPageClient />)
  }

  // 5. New Job: /admin/jobs/new
  if (path === 'jobs/new' || (slug[0] === 'jobs' && slug[1] === 'new')) {
    return wrap(<NewJobPageClient />)
  }

  // 6. Edit Job: /admin/jobs/[id]/edit
  if (slug[0] === 'jobs' && slug[2] === 'edit') {
    const id = slug[1]
    const [job, industries] = await Promise.all([getJob(id), getIndustries()])
    if (!job) redirect('/admin/jobs')
    return wrap(<EditJobForm id={id} job={job as any} industries={industries} />)
  }

  return notFound()
}
