import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const TravelSearchForm = () => {
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="max-w-lg mx-auto">
      <div className='p-4 bg-[#f2f2f2] rounded-2xl shadow-md'>
        <div className='space-y-4'>
          {/* Current Location */}
          <div className='flex items-center space-x-2'>
            <span className='text-orange text-lg'>
              <FaDotCircle />
            </span>
            <input
              type='text'
              placeholder='Your current location'
              className='w-full bg-transparent border-b border-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          {/* Destination */}
          <div className='flex items-center space-x-2'>
            <span className='text-green text-lg'>
              <FaLocationDot />
            </span>
            <input
              type='text'
              placeholder='Search for a destination'
              className='w-full p-2 bg-transparent border-b border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          {/* Passengers */}
          <div className='flex items-center space-x-2'>
            <span className='text-gray-500 text-lg'>👤</span>
            <input
              type='number'
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className='w-full p-2 bg-transparent border-b border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              min='1'
            />
          </div>

          {/* Dates */}
          <div className='flex items-center space-x-2'>
            <span className='text-red-500 text-lg mr-2'>📅</span>
            <div className='w-full'>
              <div className='flex space-x-2 justify-start items-center'>
                <p className='text-gray-600'>Departure:</p>
                <input
                  type='date'
                  className='w-full p-2 bg-transparent border-b border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>
              <div className='flex space-x-2 justify-start items-center'>
                <p className='text-gray-600'>Return:</p>
                <input
                  type='date'
                  className='w-full p-2 bg-transparent border-b border-gray-200 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Button */}
      <NavLink
        className='w-full mt-10 bg-primary text-white p-2 rounded-lg block text-center'
        to='results'
      >
        Search
      </NavLink>
    </div>
  );
};

export default TravelSearchForm;
