import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../assets/footer_logo.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";
import { toast } from "react-toastify";


const Footer = () => {
  const [email,setEmail] = useState('')

  const handleSaveEmail = async () =>{
    if(validateEmail()){
      try{
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/email`,{email})
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/mail`,{email})
        setEmail('')
        toast.success("Request submitted successfully.")
      }catch(err){
       toast.error(err.message)
      }
    }
  }

  const validateEmail = () =>{
    let newErrors = {}
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email){
      newErrors.email = "Email address is required."
      toast.error("Email address is required.")
    }
    if(!emailRegex.test(email)){
      newErrors.email = "Invalid email address."
      toast.error("Invalid email address.")
    }
    return Object.keys(newErrors).length===0
  }

  return (
    <div className="py-16 px-4 bg-navyblue text-white  border">
      <div className="h-full flex flex-col items-center md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full text-center">
          {/* Logo and About Section */}
          <div className="flex flex-col gap-6 items-center">
            <div className="w-32 md:w-40">
              <img src={logo} alt="StylicAI Logo" className="object-contain" />
            </div>
            <p className="text-sm md:text-base px-4 md:px-10">
              STYLIC brings innovation to fashion photography with the help of artificial intelligence technology. Make impressive, photorealistic designs with minimal effort, and enhance your commerce enterprise.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://www.facebook.com/stylicai" target="_blank" aria-label="Facebook" className="hover:text-gray-400">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/stylicai/" target="_blank" aria-label="Instagram" className="hover:text-gray-400">
                <InstagramIcon />
              </a>
              {/* <a href="#" aria-label="Twitter" target="_blank" className="hover:text-gray-400">
                <TwitterIcon />
              </a> */}
              <a href="https://www.linkedin.com/company/stylicai/" aria-label="LinkedIn" target="_blank" className="hover:text-gray-400">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-semibold text-4xl">Newsletter</h2>
            <p className="text-md md:text-base leading-relaxed px-4 lg:px-6">
              Subscribe to our newsletter to receive updates on the latest news!
            </p>
            <div className="flex justify-center flex-row items-center mt-6 w-full">
              <input
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
                className="px-2 py-2 rounded-l-md  md:rounded-r-none border-[#1b345c] bg-white text-[#1b345c] placeholder-[#1b345c] focus:outline-none focus:ring-2 focus:ring-[#1b345c] w-[60%] md:w-auto"
              />
              <button onClick={handleSaveEmail} className="bg-golden text-white W-[30%] px-6 py-2 rounded-r-md cursor-pointer transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-semibold">Contacts</h2>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Contact</p>
              <p className="text-base flex gap-2 items-center">
                <CallIcon />
                +91 63566 65365
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Mail us</p>
              <p className="text-sm flex gap-2 items-center">
                <EmailIcon />
                info@stylic.ai
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-golden font-bold">STYLIC</span>. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;