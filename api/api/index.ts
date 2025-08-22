import serverless from 'serverless-http'
import app from '../src/app'

// ✅ Correct runtime string for Vercel Functions
export const config = { runtime: 'nodejs' }

export default serverless(app)
