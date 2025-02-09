import { NextFunction, Response, Request } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken'

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies['token']
  if (!token) {
    res.status(401).redirect('/login')
  }
  jwt.verify(token, process.env.SECRET_KEY as string, {}, (err: any, decoded: any) => {
    if (err) {
      res.status(401).redirect('/login')
    }
    (req as any).userId = decoded.id
    next()
  })

}