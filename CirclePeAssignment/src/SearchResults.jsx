import React from 'react';
import NavBar from './Footer';
import Filterimage from "./icons/filter.png";
import image1 from "./icons/img2.png";
import house2 from "./icons/house2.jpeg"
import image3 from "./icons/img3.jpeg";
import backicon from "./icons/back.png";
import { Link } from 'react-router-dom';


function SearchResults() {
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

  return (
    <>
    <div className="p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          {/* Back button */}
          <button className="px-5 py-3 bg-blue-200 rounded-full">
            <img src={backicon} className='w-4 py-2'/>
          </button>

          <h1 className="text-lg font-semibold">Search results</h1>
          {/* Filter Button */}
          <button className="px-5 py-3 bg-blue-200 rounded-full">
            <img src={Filterimage} className='w-4 py-2'/>
          </button>
        </div>
        {/* Search Bar */}
        <div className="relative mb-4">
        <label className="input input-bordered flex items-center gap-2 bg-blue-200 border-none rounded-2xl py-8">
          <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          
        </div>
        {/* Cards */}
        {properties.map((property) => (
          <div
            key={property.id}
            className="h-50 bg-blue-200 p-4 rounded-3xl mb-4 flex items-cente md:py-4"
          >
            <img
              src={property.image}
              alt={property.name}
              className="h-auto w-32 md:w-36 rounded-lg mr-4"
            />
            <div className="flex-1 text-left">
              <h2 className="text-lg font-semibold">
              <Link to="/transaction">
              {property.name}
              </Link></h2>
              <p className="text-xs text-gray-500">{property.rating} ★</p>
              <p className="text-xs text-gray-500">{property.location}</p>
              <div className="text-lg font-semibold mt-4">{property.price}<span className='text-xs'>/month</span></div>
                
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <NavBar/>
    </div>
    </>
  );
}

export default SearchResults;
