// api/src/index.ts
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { env } from './env'
import { auth } from './middleware/auth'
import { orgContext } from './middleware/org'
import health from './routes/health'
import openapi from './routes/openapi'
import applications from './routes/applications'
import escrows from './routes/escrows'
import trades from './routes/trades'
import ai from './routes/ai'
import analytics from './routes/analytics'
import compliance from './routes/compliance'
import feedback from './routes/feedback'

const app = express()
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(morgan('tiny'))
app.use(auth)
app.use(orgContext)

app.use('/health', health)
app.use('/openapi.json', openapi)
app.use('/applications', applications)
app.use('/escrows', escrows)
app.use('/trades', trades)
app.use('/ai', ai)
app.use('/analytics', analytics)
app.use('/compliance', compliance)
app.use('/feedback', feedback)

app.listen(env.PORT, () => {
  console.log(`[api] listening on http://localhost:${env.PORT}`)
})
