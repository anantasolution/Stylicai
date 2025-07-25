import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../assets/footer_logo.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import { toast } from "react-toastify";
import { LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const handleSaveEmail = async () => {
    if (!validateEmail()) return;
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/subscribe`, { email });
      setEmail("");
      toast.success("Request submitted successfully.");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return toast.error("Email address is required.");
    if (!emailRegex.test(email)) return toast.error("Invalid email address.");
    return true;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="pt-16 pb-6 px-4 bg-navyblue text-white border"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {/* Logo and About Section */}
        <div className="flex flex-col gap-6 items-center">
          <img src={logo} alt="StylicAI Logo" className="w-32 md:w-40 object-contain" />
          <p className="text-sm md:text-base px-4 md:px-10">
            STYLIC brings innovation to fashion photography with AI technology.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/stylicai" target="_blank" aria-label="Facebook" className="text-golden">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/stylicai/" target="_blank" aria-label="Instagram" className="text-golden">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/stylicai/" target="_blank" aria-label="LinkedIn" className="text-golden">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-semibold text-4xl">Newsletter</h2>
          <p className="text-md md:text-base px-4 lg:px-6">Subscribe for updates!</p>
          <div className="flex w-full justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-2 py-2 rounded-l-md border-[#1b345c] bg-white text-[#1b345c] placeholder-[#1b345c] focus:outline-none focus:ring-2 focus:ring-[#1b345c] w-[60%] md:w-auto"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSaveEmail}
              className="bg-golden text-white px-6 py-2 rounded-r-md transition duration-300"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : "Subscribe"}
            </motion.button>
          </div>
        </div>

        {/* Contacts Section */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">Contact Us</h2>
          <p className="flex items-center gap-2">
            <CallIcon />
            <a href="tel:+916356665365" className="hover:underline">+91 63566 65365</a>
          </p>
          <p className="flex items-center gap-2">
            <EmailIcon />
            <a href="mailto:info@stylic.ai" className="hover:underline">info@stylic.ai</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-6 mt-8 text-center text-sm border-t border-gray-600">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} STYLIC. All Rights Reserved.</p>
          <span className="hidden md:block"> | </span>
          <Link to="/terms-and-condition" className="text-golden hover:underline">Terms & Conditions</Link>
          <span className="hidden md:block"> | </span>
          <Link to="/privacy-policy" className="text-golden hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;