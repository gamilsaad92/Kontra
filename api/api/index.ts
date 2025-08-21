// api/api/index.ts
import serverless from 'serverless-http'
import app from '../src/app'

// Vercel runtime config
export const config = { runtime: 'nodejs' }

// Wrap the Express app with serverless-http so Vercel can run it
export default serverless(app)
