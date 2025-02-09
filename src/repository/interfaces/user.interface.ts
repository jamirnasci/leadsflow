import Usuario from "../../entities/usuario.entity";

export interface IUsuarioRepository{
  findOne(email: string, senha: string): Promise<Usuario[] | undefined>
}