import { Router } from 'express'
import { db } from '../memdb'
const r = Router()
r.get('/portfolio', (_req, res) => {
  const loans = db.applications.length
  const upb = db.applications.reduce((s,a)=> s + (a.amount||0), 0)
  res.json({
    loans,
    upb,
    delinquency_rate: 0.018,
    wac: 0.061
  })
})
export default r
