import { Router } from 'express'

const r = Router()

r.get('/portfolio', (_req, res) => {
  // Placeholder figures
  res.json({
    loans: 124,
    upb: 173_000_000,
    delinquency_rate: 0.014,
    wac: 0.068
  })
})

export default r
