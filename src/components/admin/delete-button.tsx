'use client'

import { deleteJobAction } from '@/lib/admin-actions'
import { useRouter } from 'next/navigation'

export function DeleteButton({ jobId }: { jobId: string }) {
  const router = useRouter()

  return (
    <button
      type="button"
      className="btn btn-sm btn-danger"
      onClick={async () => {
        if (!confirm('Delete this job?')) return
        const result = await deleteJobAction(jobId)
        if (result.success) router.refresh()
        else alert(result.error)
      }}
    >
      Delete
    </button>
  )
}
