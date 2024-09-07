import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import house1 from "./icons/img2.png";
import backicon from "./icons/back.png";
import image1 from "./icons/img2.png";
import house2 from "./icons/house2.jpeg";
import image3 from "./icons/img3.jpeg";
import RentOffer from './RentOffer';

const periods = [
  { label: '3 months', value: 3 },
  { label: '6 months', value: 6 },
  { label: '9 months', value: 9 },
];

const properties = [
  {
    id: 1,
    name: "Sky Dandelions Apartment",
    location: "Sector 28, Gurgaon",
    price: "₹ 22,000",
    rating: "4.9",
    image: image1,
  },
  {
    id: 2,
    name: "Wings Tower",
    location: "Sector 27, Gurgaon",
    price: "₹ 17,000",
    rating: "4.9",
    image: house2,
  },
  {
    id: 3,
    name: "Wayside Modern House",
    location: "MG road, Gurgaon",
    price: "₹ 18,000",
    rating: "4.4",
    image: image3,
  },
];

const TransactionReview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(6);
  const [isSlideVisible, setIsSlideVisible] = useState(false); // State to control the sliding effect

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
  };

  const monthlyPayment = 22020;
  const totalAmount = selectedPeriod * monthlyPayment;

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-lg mt-3 relative">
      <div className="flex items-center mb-4">
        {/* Back button */}
        <button className="px-5 py-3 bg-blue-200 rounded-full">
          <Link to="/"><img src={backicon} className='w-4 py-2' /></Link>
        </button>
        <h1 className="ml-2 text-lg font-semibold">Transaction Review</h1>
      </div>

      <div className="h-50 bg-blue-200 p-2 rounded-3xl mb-4 flex items-center">
        <img
          src={image1}
          alt="Apartment"
          className="h-36 w:auto md:w-36 rounded-lg mr-4"
        />
        <div className="flex-1 text-left">
          <h2 className="text-lg font-semibold">Sky Dandelions Apartment</h2>
          <p className="text-xs text-gray-500">Sector 28, Gurgaon</p>
          <div className="w-28 bg-white rounded-full p-2 self-end text-center text-lg font-semibold mt-4">₹22,000</div>
        </div>
      </div>
      <div className='shadow-xl rounded-3xl p-6'>
        <h3 className="text-left text-lg mb-2 font-bold">Select Period</h3>
        <div className="flex justify-around mb-4 text-sm">
          {periods.map((period) => (
            <button
              key={period.value}
              onClick={() => handlePeriodSelect(period.value)}
              className={`py-2 px-4 rounded-2xl border ${selectedPeriod === period.value
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border-blue-500'
                } transition-all`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>
      <h3 className="mt-6 text-left text-xl mb-2 font-bold">Payment Detail</h3>
      <div className="rounded-2xl shadow shadow-lg border">
        <div className="flex justify-between text-sm text-gray-600 py-2 ml-4 mr-4 mt-3">
          <span>Period time</span>
          <span>{selectedPeriod} months</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 py-2 ml-4 mr-4">
          <span>Monthly payment</span>
          <span>₹ {monthlyPayment}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 py-2 ml-4 mr-4">
          <span>Security deposit</span>
          <span>₹ 0</span>
        </div>
        <div className="bg-blue-200 flex justify-between mt-2 text-lg font-bold rounded-b-2xl p-4">
          <span>Total</span>
          <span>₹ {totalAmount}</span>
        </div>
      </div>
      
      <button
        className="mt-6 w-40 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition-colors"
        onClick={() => setIsSlideVisible(true)}
      >
        Pay with Circle
      </button>

      {/* Sliding Section */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isSlideVisible ? 'h-2/3' : 'h-0'
        }`}
      >
        <div className="p-4">
          <RentOffer />
          <button
            onClick={() => setIsSlideVisible(false)}
            className="mt-4 text-blue-500 px-4 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionReview;