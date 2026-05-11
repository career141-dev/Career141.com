'use client'

export function DeleteButton({ jobId }: { jobId: string }) {
  return (
    <button
      type="button"
      className="btn btn-sm btn-danger"
      onClick={async () => {
        if (!confirm('Delete this job?')) return
        const res = await fetch(`/api/admin/jobs/${jobId}`, { method: 'DELETE' })
        const result = await res.json()
        if (result.success) window.location.reload()
        else alert(result.error || 'Failed to delete')
      }}
    >
      Delete
    </button>
  )
}
