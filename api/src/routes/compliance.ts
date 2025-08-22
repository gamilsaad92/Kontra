import { Router } from 'express'
const r = Router()
r.post('/scan', (_req, res) => {
  res.json({ ok: true, findings: [], ran_at: new Date().toISOString() })
})
export default r
