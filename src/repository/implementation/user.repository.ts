import { QueryError } from "mysql2";
import { db } from "../../config/dbconfig";
import Usuario from "../../entities/usuario.entity";
import { IUsuarioRepository } from "../interfaces/user.interface";

export class UsuarioRepository implements IUsuarioRepository{
  findOne(email: string, senha: string): Promise<Usuario[] | undefined>{
    return new Promise<Usuario[] | undefined>((res, rej)=>{
      db.query("SELECT * FROM Usuarios WHERE Email = ? AND Senha = ?", [email, senha], (err: QueryError | null, data: Usuario[])=>{
        if(err) rej(err)
        res(data)
      })
    })  
  }
}