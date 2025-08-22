import { Router } from 'express'
import { db, uid } from '../memdb'
const r = Router()

r.post('/', (req, res) => {
  const { loan_id, type, balance } = req.body || {}
  if(!loan_id || !type) return res.status(400).json({ error: 'invalid payload' })
  const row = { id: uid('esc_'), loan_id, type, balance: Number(balance||0) }
  db.escrows.push(row)
  res.json(row)
})

r.get('/:loanId', (req, res) => {
  const items = db.escrows.filter(e => e.loan_id === req.params.loanId)
  res.json(items)
})

export default r
