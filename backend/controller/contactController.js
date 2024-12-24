import CONTACT from "../models/CONTACT.js"

export const createContact = async (req, res, next)=>{
    try{
        const {name,email,contactno,message} = req.body
        if(!name || !email || !contactno || !message) return res.status(400).json({message:"input field is required."})
        
        const newContact = new CONTACT({name,email,contactno,message})
        await newContact.save()

        res.status(200).json({message:"successfully new contact created."})
    } catch(err){
         next(err)
    }
}