import { Router, Request, Response } from 'express'
import { loginWithSupabase } from '../auth'

const router = Router()

router.get('/login', (_req: Request, res: Response) => {
  if (_req.session?.adminLoggedIn) {
    return res.redirect('/admin')
  }
  res.render('login', { layout: false, error: null })
})

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body || {}

  if (!email || !password) {
    return res.render('login', { layout: false, error: 'Please enter email and password' })
  }

  const { success, error } = await loginWithSupabase(email, password)

  if (success) {
    req.session.adminLoggedIn = true
    return res.redirect('/admin')
  }

  res.render('login', { layout: false, error: error || 'Invalid credentials' })
})

router.all('/logout', (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.redirect('/admin/login')
  })
})

export default router
