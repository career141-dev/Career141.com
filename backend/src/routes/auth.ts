import { Router, Request, Response } from 'express'
import { login } from '../auth'

const router = Router()

router.get('/login', (_req: Request, res: Response) => {
  if (_req.session?.adminLoggedIn) {
    return res.redirect('/admin')
  }
  res.render('login', { layout: false, error: null })
})

router.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body || {}

  if (!username || !password) {
    return res.render('login', { layout: false, error: 'Please enter username and password' })
  }

  if (login(username, password)) {
    req.session.adminLoggedIn = true
    return res.redirect('/admin')
  }

  res.render('login', { layout: false, error: 'Invalid credentials' })
})

router.all('/logout', (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.redirect('/admin/login')
  })
})

export default router
