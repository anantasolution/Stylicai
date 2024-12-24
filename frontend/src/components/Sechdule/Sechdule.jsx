import React from 'react';
import { Link } from 'react-router-dom';

const Sechdule = () => {

  return (
    <div className="bg-[#FDF7F1] p-8 rounded-lg max-w-6xl mx-auto relative my-16">
      {/* Main Content Section */}
      <div className="max-w-2xl">
        <h1 className="text-[#1E335C] text-4xl font-bold mb-4">
          Experience AI-Powered Product Photoshoots
        </h1>
        <p className="text-gray-500 text-xl mb-8">
         
        </p>
        <button className="bg-[#1E335C] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
          <Link to={'/contact'}>Schedule a demo</Link>
        </button>
      </div>

      {/* Achievement Cards */}
      <div className="absolute right-8 -top-16 space-y-4 max-w-xs">
        {/* APJ Card */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-[#1E335C] font-bold text-lg mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, minus.
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

      </div>
    </div>
  );
};


export default Sechdule;