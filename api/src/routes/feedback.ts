import { Router } from 'express'
import { supabase } from '../supabase'

const r = Router()

r.post('/', async (req, res) => {
  const orgId = (req as any).orgId as string
  const { data, error } = await supabase.from('model_feedback').insert({ org_id: orgId, payload: req.body }).select().single()
  if(error) return res.status(500).json({ error: error.message })
  res.json(data)
})

export default r
