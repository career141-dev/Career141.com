import { AdminShell } from '../../../../components/admin/admin-shell'
import NewJobPageClient from '../../../../components/admin/new-job-page-client'

export const runtime = 'edge'

export default function AdminNewJobPage() {
  return (
    <AdminShell>
      <NewJobPageClient />
    </AdminShell>
  )
}
