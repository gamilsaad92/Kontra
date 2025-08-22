// Kontra/api/api/index.ts
import serverless from 'serverless-http'
import app from '../src/app'

// Use Node 18 runtime
export const config = { runtime: 'nodejs18.x' }

export default serverless(app)
