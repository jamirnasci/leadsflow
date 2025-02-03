import { RowDataPacket } from "mysql2";

export default interface Usuario extends RowDataPacket{
  UsuarioID: number,
  Nome: string, 
  Email: string, 
  Senha: string, 
  DataCriacao: string
}