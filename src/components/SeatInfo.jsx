import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidBus } from "react-icons/bi";

const SeatInfo = () => {
  return (
    <div className='flex flex-col space-y-4 p-4 border border-gray-200 rounded-lg mx-4 shadow-md'>
      <div className='flex justify-between items-center space-x-1'>
        <div className='flex space-x-2 items-center'>
          <span className='text-orange text-lg'>
            <FaDotCircle />
          </span>
          <div>
            <p className='text-xs text-gray-600'>Station 1</p>
            <p className=' text-sm font-semibold'>Phnom Penh</p>
          </div>
        </div>
        <div className='px-2 py-1 rounded-lg border border-gray-200'>
          <p className='text-xs font-semibold text-gray-600'>Est. 6h</p>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-green text-lg'>
            <FaLocationDot />
          </span>
          <div>
            <p className='text-xs text-gray-600'>Station 1</p>
            <p className=' text-sm font-semibold'>Koh Kong</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-1 text-gray-600'>
          <p>Departure</p>
          <p className='text-sm font-semibold'>7:15 AM</p>
        </div>
        <div>
          <p className='text-sm text-gray-600'>
            <span className='font-bold text-xl text-orange'>27$</span>
            /pax
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeatInfo;
