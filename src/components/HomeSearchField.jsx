import React from "react";

const HomeSearchField = () => {
  return (
    <div className='p-4'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Where are you going today?'
          className='w-full py-2 px-4 border border-gray-300 rounded-lg'
        />
      </div>
    </div>
  );
};

export default HomeSearchField;
