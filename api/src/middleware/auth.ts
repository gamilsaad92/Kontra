import { Request, Response, NextFunction } from 'express'

// Placeholder: in production validate a JWT and populate req.user
export function auth(req: Request, _res: Response, next: NextFunction){
  // Accept demo auth by default
  (req as any).user = { id: 'demo-user', roles: ['admin'] }
  next()
}

// Simple RBAC guard
export function requireRole(role: string){
  return (req: Request, res: Response, next: NextFunction) => {
    const roles: string[] = (req as any).user?.roles || []
    if(!roles.includes(role)) return res.status(403).json({ error: 'Forbidden' })
    next()
  }
}
