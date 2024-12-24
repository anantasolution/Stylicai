import React from 'react';
import { useNavigate } from 'react-router-dom';
const Sechdule = () => {
    const navigate = useNavigate();
    const handleSchedule = () => {
      navigate('/'); // Replace '/demo' with your desired route
    };


  return (
    <div className="bg-[#FDF7F1] p-8 rounded-lg max-w-6xl mx-auto relative">
      {/* Main Content Section */}
      <div className="max-w-2xl">
        <h1 className="text-[#1E335C] text-4xl font-bold mb-4">
          Experience AI-Powered Product Photoshoots
        </h1>
        <p className="text-gray-500 text-xl mb-8">
         
        </p>
        <button   onClick={handleSchedule} className="bg-[#1E335C] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
          Schedule a demo
        </button>
      </div>

      {/* Achievement Cards */}
      <div className="absolute right-8 top-8 space-y-4 max-w-xs">
        {/* APJ Card */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-[#1E335C] font-bold text-lg mb-2">
            fgawjehgfi8kea3knkyuw54eijgl5ea7ih
          </h3>
          <p className="text-gray-600">
            eezasrgrdtgrdshrsdh
          </p>
        </div>

        {/* Top 50 Card */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-[#1E335C] font-bold text-lg mb-2">
           wfegedrgrsdhtrf
          </h3>
          <p className="text-gray-600">
           grhtdjtd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sechdule;