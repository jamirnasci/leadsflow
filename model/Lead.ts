import { RowDataPacket } from "mysql2";

export default interface Lead extends RowDataPacket{
  LeadID: number
  Nome: string
  Email: string 
  Telefone: string
  Status: string
  UsuarioID: number
  DataCriacao: string
}