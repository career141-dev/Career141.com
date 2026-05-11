import { createClient } from '@supabase/supabase-js'
import { config } from './config'

export const supabase = createClient(
  config.supabaseUrl,
  config.supabaseServiceRoleKey,
  { auth: { persistSession: false } }
)

export const supabaseAuth = createClient(
  config.supabaseUrl,
  config.supabaseAnonKey,
  { auth: { persistSession: false } }
)
