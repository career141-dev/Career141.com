import express from 'express'
import session from 'express-session'
import path from 'path'
import expressLayouts from 'express-ejs-layouts'
import { config } from './config'
import { requireAuth } from './auth'
import authRoutes from './routes/auth'
import jobRoutes from './routes/jobs'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(expressLayouts)
app.set('layout', 'layouts/admin')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
  })
)

app.use('/admin', authRoutes)
app.use('/admin/jobs', requireAuth, jobRoutes)

app.get('/admin', requireAuth, (_req, res) => {
  res.redirect('/admin/jobs')
})

app.get('/', (_req, res) => {
  res.redirect('/admin/login')
})

app.listen(config.port, () => {
  console.log(`Admin panel running at http://localhost:${config.port}`)
  console.log(`Login at http://localhost:${config.port}/admin/login`)
})
