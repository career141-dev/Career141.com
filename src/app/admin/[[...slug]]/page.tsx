import { redirect, notFound } from 'next/navigation'
import { LoginForm } from '../../../components/admin/login-form'
import { EditJobForm } from '../../../components/admin/edit-job-form'
import NewJobPageClient from '../../../components/admin/new-job-page-client'
import JobsPageClient from '../../../components/admin/jobs-page-client'
import { AdminShell } from '../../../components/admin/admin-shell'

export const runtime = 'edge'

export default async function AdminCatchAllPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug || []
  const path = slug.join('/')

  if (path === 'login' || slug[0] === 'login') {
    return <LoginForm />
  }

  if (slug.length === 0) redirect('/admin/jobs')

  if (path === 'jobs' || (slug[0] === 'jobs' && slug.length === 1)) {
    return <AdminShell><JobsPageClient /></AdminShell>
  }

  if (path === 'jobs/new' || (slug[0] === 'jobs' && slug[1] === 'new')) {
    return <AdminShell><NewJobPageClient /></AdminShell>
  }

  if (slug[0] === 'jobs' && slug[2] === 'edit') {
    return <AdminShell><EditJobForm id={slug[1]} /></AdminShell>
  }

  return notFound()
}
