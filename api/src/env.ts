import 'dotenv/config'

export const env = {
  PORT: parseInt(process.env.PORT || '8080', 10),
  SUPABASE_URL: process.env.SUPABASE_URL || '',
  SUPABASE_SERVICE_ROLE: process.env.SUPABASE_SERVICE_ROLE || '',
  JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY || '',
  JWT_AUDIENCE: process.env.JWT_AUDIENCE || 'kontra',
  JWT_ISSUER: process.env.JWT_ISSUER || 'https://auth.kontra.local',
  FEATURE_FLAGS: (process.env.FEATURE_FLAGS || '').split(',').map(s => s.trim()).filter(Boolean)
}

if(!env.SUPABASE_URL) console.warn('[env] SUPABASE_URL not set')
if(!env.SUPABASE_SERVICE_ROLE) console.warn('[env] SUPABASE_SERVICE_ROLE not set')
