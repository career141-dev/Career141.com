import { AdminShell } from '../../../../../components/admin/admin-shell'
import { EditJobForm } from '../../../../../components/admin/edit-job-form'

export const runtime = 'edge'

export default async function AdminEditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <AdminShell>
      <EditJobForm id={id} />
    </AdminShell>
  )
}
