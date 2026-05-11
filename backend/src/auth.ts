import { Request, Response, NextFunction } from 'express'
import { supabaseAuth } from './supabase'

declare module 'express-session' {
  interface SessionData {
    adminLoggedIn: boolean
  }
}

export async function loginWithSupabase(email: string, password: string) {
  const { error } = await supabaseAuth.auth.signInWithPassword({ email, password })
  return { success: !error, error: error?.message || null }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.adminLoggedIn) {
    return next()
  }
  res.redirect('/admin/login')
}
