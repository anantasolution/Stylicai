import express from 'express'
import { createContact } from '../controller/contactController.js'

const router = express.Router()


//For Creating new form data
router.post('/',createContact)


export default router