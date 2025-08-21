import { Router } from 'express'
import { z } from 'zod'
import { supabase } from '../supabase'

const r = Router()

const escrowSchema = z.object({
  loan_id: z.string(),
  type: z.enum(['tax', 'insurance']),
  balance: z.number().nonnegative(),
})

r.post('/', async (req, res) => {
  const orgId = (req as any).orgId as string
  const parse = escrowSchema.safeParse(req.body)
  if(!parse.success) return res.status(400).json(parse.error.flatten())

  const { data, error } = await supabase.from('escrows').insert({
    org_id: orgId,
    ...parse.data
  }).select().single()
  if(error) return res.status(500).json({ error: error.message })
  res.json(data)
})

r.get('/:loanId', async (req, res) => {
  const orgId = (req as any).orgId as string
  const { data, error } = await supabase.from('escrows')
    .select('*').eq('org_id', orgId).eq('loan_id', req.params.loanId)
  if(error) return res.status(500).json({ error: error.message })
  res.json(data)
})

export default r
