import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const DestinationHeader = () => {
  return (
    <div className='border-b border-gray-200 mb-6'>
      <div className='flex items-center space-x-2 justify-between p-4'>
        <div className='flex items-center space-x-4 grow'>
          {/* Back Arrow */}
          <NavLink to='/'>
            <IoIosArrowBack className='size-6' />
          </NavLink>
          <div className='flex space-x-2 items-center bg-gray-100 py-2 px-3 rounded-lg grow'>
            <span className='text-green text-lg'>
              <FaLocationDot />
            </span>
            <div>
              <h2 className=' text-sm font-semibold'>Koh Kong</h2>
              <p className=' text-sm text-gray-500'>
                Express way + National 4 road
              </p>
            </div>
          </div>
        </div>
        <div className='p-2 flex justify-center items-center rounded-lg border border-gray-300'>
          <VscSettings className='size-6' />
        </div>
      </div>
    </div>
  );
};

export default DestinationHeader;
