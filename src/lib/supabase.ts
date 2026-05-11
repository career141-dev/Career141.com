import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  
  // If variables are missing (common during Cloudflare builds), 
  // return a mock client to prevent the build from crashing.
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      from: () => ({
        select: () => ({
          order: () => ({
            range: () => ({}),
            maybeSingle: () => ({}),
            single: () => ({}),
          }),
          eq: () => ({
            single: () => ({}),
            maybeSingle: () => ({}),
          }),
          neq: () => ({
            maybeSingle: () => ({}),
          }),
          or: () => ({
            order: () => ({
              range: () => ({}),
            }),
          }),
        }),
        insert: () => ({}),
        update: () => ({ eq: () => ({}) }),
        delete: () => ({ eq: () => ({}) }),
      }),
      auth: { signInWithPassword: () => ({ error: { message: 'Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your Cloudflare Pages environment variables.' } }) }
    } as any
  }

  return createClient(supabaseUrl, serviceRoleKey || supabaseAnonKey, {
    auth: { persistSession: false },
  })
}

export function createBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) return {} as any
  return createClient(supabaseUrl, supabaseAnonKey)
}
