import { verifySession } from '@/lib/admin-auth'
import { redirect } from 'next/navigation'
import { LoginForm } from './login-form'

export default async function LoginPage() {
  if (await verifySession()) redirect('/admin/jobs')

  return <LoginForm />
}
