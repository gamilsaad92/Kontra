import { Request, Response, NextFunction } from 'express'
export function orgContext(req: Request, _res: Response, next: NextFunction){
  ;(req as any).orgId = req.header('x-org-id') || 'demo-org'
  next()
}
