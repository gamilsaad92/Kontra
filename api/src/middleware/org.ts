import { Request, Response, NextFunction } from 'express'

export function orgContext(req: Request, res: Response, next: NextFunction){
  const orgId = req.header('x-org-id') || 'demo-org'
  ;(req as any).orgId = orgId
  next()
}
