import { Response, Request } from "express"
import { UsuarioService } from "../services/UsuarioService"
import Usuario from "../model/Usuario"
import jwt from 'jsonwebtoken'

const us: UsuarioService = new UsuarioService()

export async function login(req: Request, res: Response){
  const { email, senha } = req.body
  let usuario: Usuario[] | undefined = await us.findOne(email, senha)
  console.log(email, senha)

  if (usuario != undefined && usuario.length > 0) {
    const token = jwt.sign({ id: usuario[0].UsuarioID }, process.env.SECRET_KEY as string, { expiresIn: '1D' })
    res.cookie('token', token, { httpOnly: true, secure: true })
    res.send(usuario[0])
  } else {
    res.status(401).json({ msg: 'Usuario não encontrado' })
  }
}

export async function logout(req: Request, res: Response) {
  res.clearCookie('token')
  res.status(200).json({msg: 'É necessário fazer login novamente'})
}
