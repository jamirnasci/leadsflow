import { QueryError } from "mysql2"
import { db } from "../config/dbconfig"
import Lead from "../model/Lead"

export class LeadService{
  findAll(): Promise<Lead[] | undefined>{
    const sql = "SELECT * FROM Leads"
    return new Promise<Lead[] | undefined>((res, rej)=>{
      db.query(sql, (err: QueryError, data: Lead[] | undefined)=>{
        if(err){
          console.log(err)
          rej(err)
        } 
          res(data)
      })
    })
  }
  deleteLeadById(id: number): Promise<boolean>{
    const sql = "DELETE FROM leads WHERE leadid = ?"
    return new Promise<boolean>((res, rej)=>{
      db.query(sql, [id], (err: QueryError | null)=>{
        if(err){
          console.log(err)
          rej(false)
        } 
          res(true)
      })
    })
  }
  updateLead(lead: Partial<Lead>): Promise<boolean>{
    const sql = "UPDATE leads SET nome = ?, email = ?, telefone = ?, status = ? WHERE leadid = ?"
    const values = [
      lead.Nome,
      lead.Email,
      lead.Telefone,
      lead.Status,
      lead.LeadID
    ]
    return new Promise<boolean>((res, rej)=>{
      db.query(sql, values, (err: QueryError | null)=>{
        if(err){
          console.log(err)
          rej(false)
        } 
          res(true)
      })
    })
  }
  createLead(lead: Partial<Lead>): Promise<boolean>{
    const sql = "INSERT INTO leads(nome, email, telefone, status, usuarioid) VALUES(?,?,?,?,?)"
    const values = [
      lead.Nome,
      lead.Email,
      lead.Telefone,
      lead.Status,
      lead.UsuarioID
    ]
    return new Promise<boolean>((res, rej)=>{
      db.query(sql, values, (err: QueryError | null)=>{
        if(err){
          console.log(err)
          rej(false)
        } 
          res(true)
      })
    })
  }
}