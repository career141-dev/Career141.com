export const runtime = 'edge'
import { NextRequest, NextResponse } from 'next/server'
import {
  getPremiumJobBySlug,
  getJobDetailsBySlug,
} from '@/lib/jobs'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const [job, details] = await Promise.all([
      getPremiumJobBySlug(slug),
      getJobDetailsBySlug(slug),
    ])

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    return NextResponse.json({ job, details })
  } catch (error) {
    console.error('GET /api/jobs/[slug] error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch job' },
      { status: 500 }
    )
  }
}
