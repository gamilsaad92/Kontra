import { Router } from 'express'
import { z } from 'zod'

const r = Router()

r.post('/ingest', (req, res) => {
  const schema = z.object({
    file_name: z.string(),
    mime: z.string().optional(),
    bytes_base64: z.string()
  })
  const parse = schema.safeParse(req.body)
  if(!parse.success) return res.status(400).json(parse.error.flatten())

  // TODO: OCR + classify + extract
  res.json({ status: 'queued', file: parse.data.file_name })
})

r.post('/recommend', (req, res) => {
  const schema = z.object({
    application_id: z.string()
  })
  const parse = schema.safeParse(req.body)
  if(!parse.success) return res.status(400).json(parse.error.flatten())

  // TODO: call model
  res.json({ application_id: parse.data.application_id, recommendation: 'approve_with_conditions' })
})

export default r
