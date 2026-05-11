import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  
  if (!supabaseUrl || !serviceRoleKey) {
    // Only throw error at runtime, not during build
    if (process.env.NODE_ENV === 'production' && !process.env.CI) {
      console.error('Supabase environment variables are missing')
    }
  }

  return createClient(supabaseUrl, serviceRoleKey || supabaseAnonKey, {
    auth: { persistSession: false },
  })
}

export function createBrowserClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}
