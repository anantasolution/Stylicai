import React from "react";
import Navbar from "../Navbar/Navbar";
import {Link} from 'react-router-dom'

import i5 from "../../assets/banner/1/1.webp"
import i6 from "../../assets/banner/1/2.webp"
import i7 from "../../assets/banner/1/3.webp"
import i8 from "../../assets/banner/1/4.webp"
const ImageCard = ({ src, alt }) => (
  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
    <img src={src} alt={alt} className="w-full h-64 object-cover" />
  </div>
);

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container  mx-auto px-6 pt-24 pb-20 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Section */}
          <div className="w-full flex flex-col gap-3 lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl text-navyblue leading-relaxed sm:text-5xl md:text-6xl font-bold mb-6">
              Fashion Photography<br></br>No Models,
              <span className="text-golden"> AI Magics. </span> 
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
             Revolutionize Fashion Visuals with AI
            </p>
            <Link to={'/contact'}>
             <button className="bg-golden text-white px-6 py-2 rounded-full hover:bg-navyblue  transition duration-300">
              Contact Us
             </button>
            </Link>
          </div>

          {/* Image Grid */}
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-2 gap-y-4 md:gap-y-6">
              <div className="h-72">
                <img
                  className="w-full h-full object-contain"
                  src={i5}
                  alt="Autumn leaves illustration"
                />
              </div>
              <div className="overflow-hidden h-72 rounded-md">
                <img
                  className="w-full h-full object-contain"
                  src={i6}
                  alt="Autumn leaves illustration"
                />
              </div>
              <div className="overflow-hidden h-72 rounded-md">
                <img
                  className="w-full h-full object-contain"
                  src={i7}
                  alt="Autumn leaves illustration"
                />
              </div>
              <div className="overflow-hidden h-72 rounded-md">
                <img
                  className="w-full h-full object-contain"
                  src={i8}
                  alt="Autumn leaves illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
