'use client'

import { useRouter } from 'next/navigation'

export function DeleteButton({ jobId }: { jobId: string }) {
  const router = useRouter()

  return (
    <button
      type="button"
      className="btn btn-sm btn-danger"
      onClick={async () => {
        if (!confirm('Delete this job?')) return
        const res = await fetch(`/api/admin/jobs/${jobId}`, { method: 'DELETE' })
        const result = await res.json()
        if (result.success) router.refresh()
        else alert(result.error || 'Failed to delete')
      }}
    >
      Delete
    </button>
  )
}
