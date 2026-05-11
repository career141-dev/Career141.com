import { getJob, getIndustries } from '@/lib/admin-actions'
import { redirect } from 'next/navigation'
import { EditJobForm } from './edit-form'

export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [job, industries] = await Promise.all([getJob(id), getIndustries()])

  if (!job) redirect('/admin/jobs')

  return <EditJobForm id={id} job={job as unknown as Record<string, string>} industries={industries} />
}
