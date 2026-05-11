import { AdminShell } from '../../../components/admin/admin-shell'
import JobsPageClient from '../../../components/admin/jobs-page-client'

export const runtime = 'edge'

export default function AdminJobsPage() {
  return (
    <AdminShell>
      <JobsPageClient />
    </AdminShell>
  )
}
