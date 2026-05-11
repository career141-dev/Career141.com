export const runtime = 'edge'
import { NextRequest, NextResponse } from 'next/server'
import { getAllPremiumJobs } from '@/lib/jobs'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const industry = searchParams.get('industry')
    const search = searchParams.get('search')
    const type = searchParams.get('type')

    let jobs = await getAllPremiumJobs()

    if (industry) {
      jobs = jobs.filter(
        (j) => j.industry.toLowerCase() === industry.toLowerCase()
      )
    }

    if (type) {
      jobs = jobs.filter(
        (j) => j.type.toLowerCase() === type.toLowerCase()
      )
    }

    if (search) {
      const q = search.toLowerCase()
      jobs = jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.industry.toLowerCase().includes(q)
      )
    }

    return NextResponse.json({ jobs })
  } catch (error) {
    console.error('GET /api/jobs error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
}
