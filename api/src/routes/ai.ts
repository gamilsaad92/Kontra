import { Router } from 'express'
const r = Router()

r.post('/ingest', (req, res) => {
  const { file_name } = req.body || {}
  // pretend queued
  res.json({ ok: true, file: file_name || 'document' })
})

r.post('/recommend', (_req, res) => {
  res.json({ ok: true, score: Math.round(Math.random()*100), reason: 'Demo recommendation' })
})

export default r
