import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '..', '.env') })

export const config = {
  port: parseInt(process.env.PORT || '3001', 10),
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  sessionSecret: process.env.SESSION_SECRET || 'default-secret-change-me',
}
