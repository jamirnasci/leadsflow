import { QueryError } from "mysql2";
import { db } from "../config/dbconfig";
import Usuario from "../model/Usuario";

export class UsuarioService{
  findOne(email: string, senha: string): Promise<Usuario[] | undefined>{
    return new Promise<Usuario[] | undefined>((res, rej)=>{
      db.query("SELECT * FROM Usuarios WHERE Email = ? AND Senha = ?", [email, senha], (err: QueryError | null, data: Usuario[])=>{
        if(err) rej(err)
        res(data)
      })
    })  
  }
}