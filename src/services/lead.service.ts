import { QueryError } from "mysql2"
import { db } from "../config/dbconfig"
import Lead from "../entities/lead.entity"
import { LeadRepository } from "../repository/implementation/lead.repository"

const lr: LeadRepository = new LeadRepository()

export class LeadService{
  findAll(): Promise<Lead[] | undefined>{
    return lr.findAll()
  }
  deleteLeadById(id: number): Promise<boolean>{
    return lr.deleteLeadById(id)
  }
  updateLead(lead: Partial<Lead>): Promise<boolean>{
    return lr.updateLead(lead)
  }
  createLead(lead: Partial<Lead>): Promise<boolean>{
    return lr.createLead(lead)
  }
}