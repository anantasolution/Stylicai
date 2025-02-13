import React, { useState } from "react";

import axios from 'axios'

//Importing icons
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LoaderCircle } from 'lucide-react';
import { toast } from "react-toastify";


const Contactus = () => {

  const [formData,setFormData] = useState({
    name:'',
    contactno:'',
    email:'',
    message:'',
  })
  const [loading,setLoading] = useState(false)
  const [errors,setErrors] = useState({})

  const handleChange = (e) =>{
      const {name,value} = e.target
      setFormData((prevData)=>({...prevData,[name]:value}))
  }


  const validateData = () =>{
      const emailRegax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      let newErrors = {}
      if(!formData.name) newErrors.name="Name is required."
      if(formData.contactno.length!==10) newErrors.contact="Contact number is not valid."
      if(!formData.contactno) newErrors.contactno='Contact number is required.'
      if(!emailRegax.test(formData.email)) newErrors.email ='Email address is not valid.'
      if(!formData.email) newErrors.email ='Email addres is required.'
      if(!formData.message) newErrors.message = 'Message is required'

      setErrors(newErrors)
      return Object.keys(newErrors).length===0
  }

  const handleSubmit = async ()=>{
       if(validateData()){
         try{
            setLoading(true)
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/contact`,formData)
            setFormData({
               name:'',
               contactno:'',
               email:'',
               message:'',
            })
            toast.success("Congratulations !! Our Representative Will Call You Shortly")
         }catch(err){
           toast.error(err.response.data?.message || "Something went wrong.")
           console.log(err)
         } finally{
            setLoading(false)
         }
       }
  }
 

  return (
    <div className="py-28 md:py-32 flex bg-white justify-center items-center">

        <div className="flex flex-col md:flex-row-reverse gap-8 md:w-[89%] w-4/5 items-center">
           <div className="md:flex-1 p-4 flex flex-col gap-6">
              <h1 className="text-5xl leading-[3rem] mb-3">Get In Touch</h1>
              <div className="flex items-center gap-4">
                 <span className="text-golden"><PlaceIcon style={{fontSize:'1.8rem'}}></PlaceIcon></span>
                 <div className="flex flex-col gap-.5">
                    <span className="font-semibold">Communication Address:</span>
                    <span>402, Shangrila Arcade, Shyamal Cross Road, Ahmedabad - 380015.</span>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-golden"><EmailIcon style={{fontSize:'1.8rem'}}></EmailIcon></span>
                 <div className="flex flex-col gap-.5">
                    <span className="font-semibold">Our Email:</span>
                    <span>info@stylic.ai</span>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-golden"><CallIcon style={{fontSize:'1.8rem'}}></CallIcon></span>
                 <div className="flex flex-col gap-.5">
                    <span className="font-semibold">Our Phone:</span>
                    <span>+91 63566 65365</span>
                 </div>
              </div>
              <div className="m-auto w-full  flex items-center mt-2 gap-2">
                 <a href="https://www.instagram.com/stylicai/" target="_blank" aria-label="Instagram" className="text-navyblue hover:text-golden"><InstagramIcon style={{fontSize:'1.3rem'}}></InstagramIcon></a>
                 <a href="https://www.facebook.com/stylicai" target="_blank" aria-label="Facebook" className="text-navyblue hover:text-golden"><FacebookOutlinedIcon style={{fontSize:'1.3rem'}}></FacebookOutlinedIcon></a>
                 <a href="https://www.linkedin.com/company/stylicai/" aria-label="LinkedIn" target="_blank" className="text-navyblue hover:text-golden"><LinkedInIcon style={{fontSize:'1.3rem'}}></LinkedInIcon></a>
              </div>
           </div>
           <div className="md:flex-1 rounded-md w-full border p-4 flex flex-col gap-5">
            <h2 className="font-medium text-4xl md:text-5xl mb-2">Request a Demo</h2>
             <div className="flex flex-col gap-.5">
                <div className="flex flex-col gap-2">
                <label>Name <span className="text-sm text-red-500">*</span></label>
                <input onChange={(e)=>handleChange(e)} name="name" value={formData.name} className="bg-transparent outline-none text-black  border p-2.5" type="text" placeholder="Enter Name "></input>
                </div>
                {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
             </div>
             <div className="flex flex-col gap-.5">
                <div className="flex flex-col gap-2">
                <label>Email <span className="text-sm text-red-500">*</span></label>
                <input onChange={(e)=>handleChange(e)} name="email" value={formData.email} className="bg-transparent outline-none text-black border p-2.5" type="text" placeholder="Enter Email "></input>
                </div>
                {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
             </div>
             <div className="flex flex-col gap-.5">
                <div className="flex flex-col gap-2">
                <label>Contact No <span className="text-sm text-red-500">*</span></label>
                <input  onChange={(e)=>handleChange(e)} name="contactno" value={formData.contactno} className="bg-transparent outline-none text-black border  p-2.5" type="text" placeholder="Enter Contact "></input>
                </div>
                {errors.contactno && <span className="text-sm text-red-500">{errors.contactno}</span>}
             </div>
             <div className="flex flex-col gap-.5">
               <div className="flex flex-col gap-2">
               <label>Message <span className="text-sm text-red-500">*</span></label>
               <textarea onChange={(e)=>handleChange(e)} name="message" value={formData.message} placeholder="Enter Message " rows={8} title="message" className="resize-none border h-24   p-2.5 bg-transparent outline-none"></textarea>
               </div>
               {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
             </div>
             <button onClick={handleSubmit} disabled={loading} className="bg-golden hover:bg-navyblue text-white flex justify-center items-center hover:font-semibold transition-all duration-300 p-2 ">
               {
                  loading ? 
                  <div className="flex items-center gap-2">
                     <span><LoaderCircle className="animate-spin"></LoaderCircle></span>
                     Loading...
                  </div>
                  :<span>SUBMIT</span>
               }
             </button>
           </div>
        </div>
        
    </div>
  );
};

export default Contactus;