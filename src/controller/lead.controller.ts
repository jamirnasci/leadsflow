import { Request, Response } from "express";
import { LeadService } from "../services/lead.service";
import Lead from "../entities/lead.entity";

const ls: LeadService = new LeadService()

export async function getAllLeads(req: Request, res: Response) {
  try {
    let leads: Lead[] | undefined = await ls.findAll()
    if (leads != undefined && leads.length > 0) {
      res.send(leads)
    }
  } catch (error) {
    res.status(404).json({ msg: 'Não foi possível buscar leads' })
  }
}

export async function createLead(req: Request, res: Response) {
  try {
    const lead: Partial<Lead> = req.body
    lead.UsuarioID = (req as any).userId
    let result = await ls.createLead(lead)
    res.status(200).json({msg: 'Lead criado com sucesso'})
  } catch (error) {
    res.status(500).json({msg: 'Falha ao criar Lead'})
  }
}

export async function deleteLead(req: Request, res: Response) {
  try {
    const {LeadID} = req.body
    let result = await ls.deleteLeadById(LeadID)
    res.status(200).json({msg: 'Lead removido com sucesso'})
  } catch (error) {
    res.status(500).json({msg: 'Falha ao remover Lead'})
  }
}

export async function updateLead(req: Request, res: Response) {
  try {
    const lead: Partial<Lead> = req.body
    lead.UsuarioID = (req as any).userId
    let result = await ls.updateLead(lead)
    res.status(200).json({msg: 'Lead atualizado com sucesso'})
  } catch (error) {
    res.status(500).json({msg: 'Falha ao atualizar Lead'})
  }
}