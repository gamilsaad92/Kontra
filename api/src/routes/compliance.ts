import { Router } from 'express'

const r = Router()

r.post('/scan', (req, res) => {
  // TODO: PCI/GDPR scans, redaction, etc.
  res.json({ ok: true, findings: [] })
})

export default r
