import { QueryError } from "mysql2"
import { db } from "../../config/dbconfig"
import Lead from "../../entities/lead.entity"

export interface ILeadRepository{
  findAll(): Promise<Lead[] | undefined>
  deleteLeadById(id: number): Promise<boolean>
  updateLead(lead: Partial<Lead>): Promise<boolean>
  createLead(lead: Partial<Lead>): Promise<boolean>
}