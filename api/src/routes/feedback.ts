import { Router } from 'express'
import { db, uid } from '../memdb'
const r = Router()
r.post('/', (req, res) => {
  const { message, ts } = req.body || {}
  const row = { id: uid('fb_'), message: message || '', ts: ts || Date.now() }
  db.feedback.push(row)
  res.json({ ok: true })
})
export default r
