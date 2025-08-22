import serverless from 'serverless-http'
import app from '../src/app'

export const config = { runtime: 'nodejs' }
export default serverless(app)
