import React from 'react';
import tick from './icons/tick.png'
import { Link } from 'react-router-dom';

const RentOfferCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg max-w-xs mx-auto">
      <div className="text-center">
        <p className="text-md font-semibold bg-blue-100 rounded-lg">
          Rent at <span className="text-blue-500">Zero</span> security deposit ✨
        </p>
        <div className="mt-2 flex justify-center">
          <div className="bg-blue-100 rounded-full p-2">
            {/* <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg> */}
            <img src={tick} className='h-20'/>
          </div>
        </div>
        <p className="mt-2 bg-blue-100 rounded-lg text-blue-500 font-semibold">Approved</p>
      </div>
      <ul className="mt-4 space-y-2 font-bold">
        <li className="flex items-center text-md">
          <span className="text-blue-500 mr-2">✔️</span> New Rent Offer: <span className="text-blue-500 ml-1">₹ 20,000</span>
        </li>
        <li className="flex items-center text-md">
          <span className="text-blue-500 mr-2">✔️</span> Zero security deposit <span className="text-blue-500 ml-1">move-in</span>
        </li>
        <li className="flex items-center text-md">
          <span className="text-blue-500 mr-2">✔️</span> 3-Months <span className="text-blue-500 ml-1">salary cover</span>
        </li>
      </ul>
      <div className="mt-6">
        <button className="bg-blue-500 text-white w-full py-3 shadow-2xl rounded-xl flex items-center justify-center hover:bg-blue-600">
        <Link to="/paywithcircle">
          Pay with Circle
        </Link>
        </button>
      </div>
    </div>
  );
};

export default RentOfferCard;