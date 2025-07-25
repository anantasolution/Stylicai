import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import i5 from "../../assets/hearders_images/i1.webp";
import i6 from "../../assets/hearders_images/i2.webp";
import i7 from "../../assets/hearders_images/i3.webp";
import i8 from "../../assets/hearders_images/i4.webp";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto md:px-20 px-4 pt-32 pb-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col gap-2 lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1 
              className="text-3xl text-navyblue leading-10 sm:text-5xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your day with AI here now!
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-lg md:text-xl mb-4 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Upgrade your fashion brand with Stylic's state-of-the-art AI solutions and get life-like visual representations of garments for your online store.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to={"/contact-us"}>
                <button className="bg-golden text-white px-6 py-2 rounded-full hover:bg-navyblue transition duration-300">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full lg:w-2/5"
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-y-4 md:gap-x-4">
              {[i5, i6, i7, i8].map((image, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden md:h-72 h-60 rounded-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                >
                  <img className="w-full h-full object-contain" src={image} alt="Fashion AI representation" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}