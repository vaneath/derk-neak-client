import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const TravelSearchForm = () => {
  const [passengers, setPassengers] = useState(1);

  return (
    <div>
      <div className='p-4 bg-[#f2f2f2] rounded-lg shadow-md'>
        <div className='space-y-4'>
          {/* Current Location */}
          <div className='flex items-center space-x-2'>
            <span className='text-orange-600 text-lg'>
              <FaDotCircle />
            </span>
            <input
              type='text'
              placeholder='Your current location'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          {/* Destination */}
          <div className='flex items-center space-x-2'>
            <span className='text-green-600 text-lg'>
              <FaLocationDot />
            </span>
            <input
              type='text'
              placeholder='Search for a destination'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          {/* Passengers */}
          <div className='flex items-center space-x-2'>
            <span className='text-gray-500 text-lg'>👤</span>
            <input
              type='number'
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              min='1'
            />
          </div>

          {/* Dates */}
          <div className='flex items-center space-x-2'>
            <span className='text-red-500 text-lg'>📅</span>
            <div className='w-full'>
              <input
                type='date'
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              />
              <input
                type='date'
                className='w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Search Button */}
      <button className='w-full mt-10 bg-primary text-white p-2 rounded-lg'>
        Search
      </button>
    </div>
  );
};

export default TravelSearchForm;
