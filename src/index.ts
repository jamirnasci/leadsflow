import bodyParser from 'body-parser'
import express, {Express, Request, Response} from 'express'
import cookieParser from 'cookie-parser'
import {login, logout} from './controller/login.controller'
import dotenv from 'dotenv'
import { createLead, deleteLead, getAllLeads, updateLead } from './controller/lead.controller'
import { verifyToken } from './middlewares/VerifyToken'
import router from './routes/router'

dotenv.config()

const app: Express = express()
const PORT = 4000
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api', router)

app.listen(PORT, _ => console.log(`server on ${PORT}`))