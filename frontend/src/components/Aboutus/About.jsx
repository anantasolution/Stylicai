import React from "react";
import { Check, Video } from "lucide-react";
import VID from "../../assets/nature.mp4";

export default function About() {
  const features = [
    "Save time and money by replacing expensive photoshoots.",
    "Our AI ensures stunning, realistic representations of garments, enhancing the shopping experience.",
    "Easily integrate AI-generated photos into your marketing campaigns, e-commerce platform.",
  ];

  return (
    <div className="bg-gray-50 py-20 px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Images */}
        <div className="flex justify-center items-center gap-4">
          <video
            src={VID}
            autoPlay
            muted
            loop
            className="w-full h-[500px]"
          ></video>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div>
            <p className="text-golden font-medium mb-4">ABOUT US</p>
            <p className="text-3xl text-navyblue lg:text-4xl font-bold mb-6">
              Revolutionizing Fashion Imagery with AI-Driven Innovation
            </p>
            <p className="text-gray-600 text-base mb-8">
              At Stylic.ai, we are transforming the way fashion brands showcase
              their collections by replacing traditional photoshoots with
              cutting-edge AI technology.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-golden rounded-full p-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-gray-800">{feature}</p>
              </div>
            ))}
          </div>

          <button className="bg-golden text-white px-8 py-3 rounded-full font-medium hover:bg-navyblue transition-colors">
            About us
          </button>
        </div>
      </div>
    </div>
  );
}
