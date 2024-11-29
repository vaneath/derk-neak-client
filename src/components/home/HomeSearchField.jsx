import React from "react";
import { NavLink } from "react-router-dom";

const HomeSearchField = () => {
  return (
    <NavLink to='/search' className='block w-full max-w-lg mx-auto'>
      <div className='p-4'>
        <div className='w-full py-2 px-4 border border-gray-300 rounded-lg bg-white '>
          <p className='text-gray-600'>Where are you going today?</p>
        </div>
      </div>
    </NavLink>
  );
};

export default HomeSearchField;
