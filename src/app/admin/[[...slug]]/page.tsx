import { redirect, notFound } from 'next/navigation'
import { verifySession } from '@/lib/admin-auth'
import { getJobs, getIndustries, getJob } from '@/lib/admin-actions'

// Import the existing form components
import { LoginForm } from '../(auth)/login/login-form'
import { EditJobForm } from '../(dashboard)/jobs/[id]/edit/edit-form'
import NewJobPageClient from '../(dashboard)/jobs/new/page-client' // I will create this
import JobsPageClient from '../(dashboard)/jobs/page-client' // I will create this

export const runtime = 'edge'

export default async function AdminCatchAllPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug || []
  const path = slug.join('/')
  const session = await verifySession()

  // 1. Handle Login Page
  if (path === 'login') {
    if (session) redirect('/admin/jobs')
    return <LoginForm />
  }

  // 2. Protect all other admin routes
  if (!session) redirect('/admin/login')

  // 3. Admin Root -> Redirect to Jobs
  if (slug.length === 0) redirect('/admin/jobs')

  // 4. Jobs List: /admin/jobs
  if (path === 'jobs') {
    // We will move the logic from the old JobsPage here or into a component
    return <JobsPageClient />
  }

  // 5. New Job: /admin/jobs/new
  if (path === 'jobs/new') {
    return <NewJobPageClient />
  }

  // 6. Edit Job: /admin/jobs/[id]/edit
  if (slug[0] === 'jobs' && slug[2] === 'edit') {
    const id = slug[1]
    const [job, industries] = await Promise.all([getJob(id), getIndustries()])
    if (!job) redirect('/admin/jobs')
    return <EditJobForm id={id} job={job as any} industries={industries} />
  }

  return notFound()
}
