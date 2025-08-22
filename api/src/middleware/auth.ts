import { Request, Response, NextFunction } from 'express'
export function auth(_req: Request, _res: Response, next: NextFunction){
  // TODO: plug real auth/SSO
  return next()
}
