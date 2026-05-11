export const runtime = 'edge'
import { deleteJobAction } from '@/lib/admin-actions'
import { redirect } from 'next/navigation'

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const result = await deleteJobAction(id)
  if (result.error) redirect(`/admin/jobs?error=${encodeURIComponent(result.error)}`)
  redirect('/admin/jobs')
}
