import React from 'react';
import { Link } from 'react-router';
import merchant from '../../../assets/location-merchant.png'

const Merchant = () => {   
  return (
    
    <div className="bg-secondary p-10 md:p-16 rounded-4xl shadow-2xl relative overflow-hidden">

      <div className="absolute opacity-20 pointer-events-none">

      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <div className="md:w-1/2 text-white">
          <h1 className="text-4xl md:text-2xl lg:text-3xl font-extrabold mb-4 leading-tight">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-gray-400 mb-8 text-sm">
            We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            
            <Link to="" className="px-6 py-3 text-lg font-semibold rounded-4xl transition duration-300 ease-in-out bg-[#c4e466] text-black hover:bg-[#b5d35c] text-center whitespace-nowrap">
              Become a Merchant
            </Link>

            <Link to="" className="px-6 py-3 text-lg font-semibold rounded-4xl transition duration-300 ease-in-out border-2 border-[#54805c] text-[#c4e466] hover:bg-[#2e3745] text-center whitespace-nowrap">
              Earn with ZapShift Courier
            </Link>
          </div>
        </div>
        <div>
          <img src={merchant} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Merchant;