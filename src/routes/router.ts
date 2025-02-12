import {Router} from 'express'
import { login, logout } from '../controller/login.controller'
import { verifyToken } from '../middlewares/VerifyToken'
import { createLead, deleteLead, getAllLeads, updateLead } from '../controller/lead.controller'

const router: Router = Router()

router.post('/login', login)
router.post('/leads', verifyToken, getAllLeads)
router.post('/createLead', verifyToken, createLead)
router.post('/deleteLead', verifyToken, deleteLead)
router.post('/updateLead', verifyToken, updateLead)
router.get('/logout', verifyToken, logout)

export default router