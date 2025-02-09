import { QueryError } from "mysql2";
import { db } from "../config/dbconfig";
import Usuario from "../entities/usuario.entity";
import { UsuarioRepository } from "../repository/implementation/user.repository";

const ur: UsuarioRepository = new UsuarioRepository() 

export class UsuarioService{
  findOne(email: string, senha: string): Promise<Usuario[] | undefined>{
    return ur.findOne(email, senha)
  }
}