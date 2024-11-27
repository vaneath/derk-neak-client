import React from "react";
import { IoNotifications } from "react-icons/io5";

const HomeHeader = () => {
  return (
    <div className='home-header flex justify-between px-4 py-10'>
      <div className=''>
        <p className=' font-medium text-sm text-gray-500'>Good morning,</p>
        <h3 className='font-semibold'>Vaneath</h3>
      </div>
      <div className='bg-white size-8 rounded-lg flex justify-center items-center'>
        <IoNotifications className='text-gray-600' />
      </div>
    </div>
  );
};

export default HomeHeader;
