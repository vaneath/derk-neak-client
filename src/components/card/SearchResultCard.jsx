import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidBus } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const SearchResultCard = () => {
  return (
    <NavLink to='/search/seats'>
      <div className='hover:bg-gray-100'>
        <div className='flex flex-col space-y-4 p-4 border border-gray-200 rounded-lg'>
          <div>
            <div className='flex space-x-2'>
              <p className='py-1 px-2 bg-orange rounded-md font-semibold text-xs text-white'>
                Direct
              </p>
              <p className='py-1 px-2 bg-green rounded-md font-semibold text-xs text-white'>
                Direct
              </p>
            </div>
          </div>
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
            <div>
              <div className='flex items-center text-gray-600 space-x-1'>
                <span>
                  <BiSolidBus />
                </span>
                <p className='text-sm font-semibold'>Bus - 16 seats</p>
              </div>
              <div className='flex items-center space-x-1 text-gray-600'>
                <p>Departure</p>
                <p className='text-sm font-semibold'>7:15 AM</p>
              </div>
            </div>
            <div>
              <p className='text-sm text-gray-600'>
                <span className='font-bold text-xl text-orange'>27$</span>
                /pax
              </p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default SearchResultCard;
