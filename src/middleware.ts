import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.SESSION_SECRET || 'default-secret-change-me-in-production')

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, '')
  if (pathname === '/admin/login') return NextResponse.next()

  const token = request.cookies.get('admin_token')?.value
  if (!token) return NextResponse.redirect(new URL('/admin/login', request.url))

  try {
    await jwtVerify(token, secret)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
}

export const config = {
  matcher: '/admin/:path*',
}
