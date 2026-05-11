import { Request, Response, NextFunction } from 'express'
import { config } from './config'

declare module 'express-session' {
  interface SessionData {
    adminLoggedIn: boolean
  }
}

export function login(username: string, password: string): boolean {
  return username === config.adminUsername && password === config.adminPassword
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.adminLoggedIn) {
    return next()
  }
  res.redirect('/admin/login')
}
