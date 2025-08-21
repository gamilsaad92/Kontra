import { Router } from 'express'
import { z } from 'zod'
import { supabase } from '../supabase'
import { audit } from '../utils/audit'

const r = Router()

const appSchema = z.object({
  borrower_name: z.string(),
  amount: z.number(),
  property_address: z.string().optional(),
  metadata: z.record(z.any()).optional()
})

r.post('/', async (req, res) => {
  const orgId = (req as any).orgId as string
  const parse = appSchema.safeParse(req.body)
  if(!parse.success) return res.status(400).json(parse.error.flatten())

  const { data, error } = await supabase.from('loan_applications').insert({
    org_id: orgId,
    ...parse.data
  }).select().single()

  if(error) return res.status(500).json({ error: error.message })
  await audit('application.created', data, orgId)
  res.json(data)
})

r.get('/', async (req, res) => {
  const orgId = (req as any).orgId as string
  const { data, error } = await supabase.from('loan_applications')
    .select('*').eq('org_id', orgId).order('created_at', { ascending: false })
  if(error) return res.status(500).json({ error: error.message })
  res.json(data)
})

export default r
