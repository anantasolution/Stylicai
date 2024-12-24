import React, { useState } from "react";

import axios from 'axios'

//Importing icons
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contactus = () => {

  const [formData,setFormData] = useState({
    name:'',
    contactno:'',
    email:'',
    message:'',
  })

  const [errors,setErrors] = useState({})

  const handleChange = (e) =>{
      const {name,value} = e.target
      setFormData((prevData)=>({...prevData,[name]:value}))
  }


  const validateData = () =>{
      const emailRegax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      let newErrors = {}
      if(!formData.name) newErrors.name="Name is required."
      if(!formData.contactno) newErrors.contact='Contact number is required.'
      if(!emailRegax.test(formData.email)) newErrors.email ='Email address is not valid.'
      if(!formData.email) newErrors.email ='Email addres is required.'
      if(!formData.message) newErrors.message = 'Message is required'

      setErrors(newErrors)
      return Object.keys(newErrors).length===0
  }

  console.log(errors)

  const handleSubmit = async ()=>{
       if(validateData()){
         try{
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/contact`,formData)
            setFormData({})
            console.log("Succesfully form filling")
         }catch(err){
           console.log(err)
         }
       }
  }
 

  return (
    <div className="py-28 md:py-32 flex bg-[#FEFBEC] justify-center items-center">

        <div className="flex flex-col md:flex-row gap-6 md:w-9/12 w-11/12 items-center">
           <div className="md:flex-1 p-4 flex flex-col gap-6">
              <h1 className="text-5xl leading-[3rem] mb-3">Get in touch <br></br> dolor sit</h1>
              <div className="flex items-center gap-4">
                 <span className="text-golden"><PlaceIcon style={{fontSize:'1.8rem'}}></PlaceIcon></span>
                 <div className="flex flex-col gap-.5">
                    <span className="font-semibold">Our Address:</span>
                    <span>Shangrila Arcade, Shyamal Cross Road, Ahmedabad - 380058.</span>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-golden"><EmailIcon style={{fontSize:'1.8rem'}}></EmailIcon></span>
                 <div className="flex flex-col gap-.5">
                    <span className="font-semibold">Our Email:</span>
                    <span>anantasoluotion@gmail.com</span>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-golden"><CallIcon style={{fontSize:'1.8rem'}}></CallIcon></span>
                 <div className="flex flex-col gap-.5">
                    <span className="font-semibold">Our Phone:</span>
                    <span>+91 89898 28728</span>
                 </div>
              </div>
              <div className="m-auto w-full flex items-center mt-2 gap-2">
                 <span className="text-black hover:text-golden"><InstagramIcon style={{fontSize:'1.3rem'}}></InstagramIcon></span>
                 <span className="text-black hover:text-golden"><FacebookOutlinedIcon style={{fontSize:'1.3rem'}}></FacebookOutlinedIcon></span>
                 <span className="text-black hover:text-golden"><LinkedInIcon style={{fontSize:'1.3rem'}}></LinkedInIcon></span>
              </div>
           </div>
           <div className="md:flex-1 w-full p-4 flex flex-col gap-4">
             <div className="flex flex-col gap-.5">
                <input onChange={(e)=>handleChange(e)} name="name" value={formData.name} className="bg-[#F3F2D2] outline-none text-[#8B8780] placeholder-[#8B8780] p-2.5" type="text" placeholder="Name *"></input>
                {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
             </div>
             <div className="flex flex-col gap-.5">
                <input onChange={(e)=>handleChange(e)} name="contactno" value={formData.contactno} className="bg-[#F3F2D2] outline-none text-[#8B8780] placeholder-[#8B8780] p-2.5" type="text" placeholder="Contact Number *"></input>
                {errors.contact && <span className="text-sm text-red-500">{errors.contact}</span>}
             </div>
             <div className="flex flex-col gap-.5">
                <input onChange={(e)=>handleChange(e)} name="email" value={formData.email} className="bg-[#F3F2D2] outline-none text-[#8B8780] placeholder-[#8B8780] p-2.5" type="email" placeholder="Email *"></input>
                {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
             </div>
             <div className="flex flex-col gap-.5">
               <textarea onChange={(e)=>handleChange(e)} name="message" value={formData.message} placeholder="Message *" rows={8} title="message" className="resize-none p-2.5 bg-[#F3F2D2] outline-none text-[#8B8780] placeholder-[#8B8780]"></textarea>
               {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
             </div>
             <button onClick={handleSubmit} className="bg-[#B0AA5C] p-1 text-white">SUBMIT</button>
           </div>
        </div>
        
    </div>
  );
};

export default Contactus;
