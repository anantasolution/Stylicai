import React from 'react';
import { Link } from 'react-router-dom';

const Sechdule = () => {

  return (
    <div className='md:py-20 px-8 py-4'>
    <div className="bg-gray-50 shadow p-8 rounded-lg max-w-6xl mx-auto relative my-16">
      {/* Main Content Section */}
      <div className="max-w-2xl">
        <h1 className="text-[#1E335C] text-2xl md:text-4xl font-bold mb-4">
        Walk into the Future of Fashion Imagery with Stylic
        </h1>
        <button className="bg-golden text-white px-8 py-3 rounded-full font-medium hover:bg-[#1E335C] transition-colors">
          <Link to={'/contact'}>Schedule a demo</Link>
        </button>
      </div>

      {/* Achievement Cards */}
       <div className="absolute md:block hidden right-8 -top-16 space-y-4 max-w-xs">
        {/* APJ Card */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
          <p className="text-gray-600">
          Get ready to realise the full potential of product photography, which is both time and cost-effective, not to mention as realistic as possible.
          </p>
        </div>

      </div>
    </div>
    </div>
  );
};


export default Sechdule;