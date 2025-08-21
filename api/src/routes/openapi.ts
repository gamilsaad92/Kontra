import { Router } from 'express'
import spec from '../openapi.json' assert { type: 'json' }

const r = Router()
r.get('/', (_req, res) => res.json(spec))
export default r
