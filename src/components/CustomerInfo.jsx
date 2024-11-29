import React from "react";
import { FiEdit } from "react-icons/fi";

const CustomerInfo = () => {
  return (
    <div className='max-w-lg mx-auto px-4'>
      <h4 className='text-sm font-semibold'>Customer Information</h4>
      <div className='flex flex-col space-y-1 border border-gray-200 rounded-lg p-4 mt-4'>
        <div className='flex justify-between'>
          <p className='text-sm font-medium'>Vaneath</p>
          <FiEdit className='size-5 text-gray-500' />
        </div>
        <p className='text-sm text-gray-500'>vaneathzz@gmail/com</p>
        <p className='text-sm text-gray-500'>42543 328523495</p>
      </div>
    </div>
  );
};

export default CustomerInfo;
