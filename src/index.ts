import bodyParser from 'body-parser'
import express, {Express, Request, Response} from 'express'
import cookieParser from 'cookie-parser'
import {login, logout} from '../controller/LoginController'
import dotenv from 'dotenv'
import { createLead, deleteLead, getAllLeads, updateLead } from '../controller/LeadController'
import { verifyToken } from '../middlewares/VerifyToken'

dotenv.config()

const app: Express = express()
const PORT = 4000
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.post('/login', login)
app.post('/leads', verifyToken, getAllLeads)
app.post('/createLead', verifyToken, createLead)
app.post('/deleteLead', verifyToken, deleteLead)
app.post('/updateLead', verifyToken, updateLead)
app.get('/logout', verifyToken, logout)

app.listen(PORT, _ => console.log(`server on ${PORT}`))