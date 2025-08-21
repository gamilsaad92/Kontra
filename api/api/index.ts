import serverless from 'serverless-http'
import app from '../src/app'

export const config = { runtime: 'nodejs' } // serverless Node runtime
export default serverless(app)
