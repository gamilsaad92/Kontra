import { Router } from 'express'
import { db, uid } from '../memdb'
const r = Router()

r.post('/', (req, res) => {
  const { type, notional, counterparty } = req.body || {}
  const row = { id: uid('trd_'), type, notional: Number(notional||0), counterparty, ts: Date.now() }
  db.trades.unshift(row)
  res.json(row)
})

r.post('/webhook', (_req, res) => res.json({ ok: true }))

export default r
