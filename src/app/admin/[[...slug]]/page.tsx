import { redirect, notFound } from 'next/navigation'
import { verifySession } from '@/lib/admin-auth'
import { getJobs, getIndustries, getJob } from '@/lib/admin-actions'

// Import the existing form components
import { LoginForm } from '@/app/admin/(auth)/login/login-form'
import { EditJobForm } from '@/app/admin/(dashboard)/jobs/[id]/edit/edit-form'
import NewJobPageClient from '@/app/admin/(dashboard)/jobs/new/page-client'
import JobsPageClient from '@/app/admin/(dashboard)/jobs/page-client'
import AdminLayout from '@/app/admin/(dashboard)/layout'

export const runtime = 'edge'

export default async function AdminCatchAllPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug || []
  const path = slug.join('/')
  const session = await verifySession()

  // 1. Handle Login Page (Separate Layout)
  if (path === 'login') {
    if (session) redirect('/admin/jobs')
    return <LoginForm />
  }

  // 2. Protect all other admin routes
  if (!session) redirect('/admin/login')

  // 3. Admin Root -> Redirect to Jobs
  if (slug.length === 0) redirect('/admin/jobs')

  // Helper to wrap dashboard routes in the AdminLayout
  const wrap = (children: React.ReactNode) => <AdminLayout>{children}</AdminLayout>

  // 4. Jobs List: /admin/jobs
  if (path === 'jobs') {
    return wrap(<JobsPageClient />)
  }

  // 5. New Job: /admin/jobs/new
  if (path === 'jobs/new') {
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
