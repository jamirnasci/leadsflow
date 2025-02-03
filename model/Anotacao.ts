import { RowDataPacket } from "mysql2";

export default interface Anotacao extends RowDataPacket{
  AnotacaoID: number 
  LeadID: number 
  UsuarioID: number 
  Conteudo: string 
  DataCriacao: string
}