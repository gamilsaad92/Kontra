import { Router } from 'express'
import { db, uid } from '../memdb'
const r = Router()

r.get('/', (_req, res) => res.json(db.applications))

r.post('/', (req, res) => {
  const { borrower_name, amount, property_address } = req.body || {}
  if(!borrower_name || typeof amount !== 'number') return res.status(400).json({ error: 'invalid payload' })
  const now = new Date().toISOString()
  const app = { id: uid('app_'), borrower_name, amount, property_address, created_at: now }
  db.applications.unshift(app)
  res.json(app)
})

export default r
