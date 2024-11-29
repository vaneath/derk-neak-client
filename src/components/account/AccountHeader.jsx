import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

const AccountHeader = () => {
  return (
    <div className='flex justify-between items-center py-10 px-4'>
      <div className='flex items-center space-x-4'>
        <img
          src='https://vaneath.com/images/vaneath.png'
          className='size-20 rounded-full'
          alt=''
        />
        <div className='flex flex-col space-y-2'>
          <h3 className='font-bold text-xl'>Vaneath</h3>
          <p className='font-medium text-sm'>Edit profile</p>
        </div>
      </div>
      <IoSettingsOutline className='size-5' />
    </div>
  );
};

export default AccountHeader;
