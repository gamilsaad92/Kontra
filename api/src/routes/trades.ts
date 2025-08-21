import { Router } from 'express'
import { z } from 'zod'
import { isEnabled } from '../featureFlags'

const r = Router()

const tradeSchema = z.object({
  type: z.enum(['loan_sale','participation','repo','securitization']),
  notional: z.number().positive(),
  counterparty: z.string()
})

r.post('/', (req, res) => {
  if(!isEnabled('trading')) return res.status(404).json({ error: 'Trading module disabled' })
  const parse = tradeSchema.safeParse(req.body)
  if(!parse.success) return res.status(400).json(parse.error.flatten())

  // TODO: persist to DB, emit webhook
  res.json({ id: 't_'+Date.now(), status: 'accepted', ...parse.data })
})

r.post('/webhook', (req, res) => {
  // validate signature in production
  console.log('[trades webhook]', req.body)
  res.json({ ok: true })
})

export default r
