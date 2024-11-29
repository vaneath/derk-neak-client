import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const NavigationHeader = ({ title, to }) => {
  return (
    <div className='flex items-center space-x-4 p-4 border-b border-gray-200 mb-6'>
      {to && (
        <NavLink to={to}>
          <SlArrowLeft className='size-4' />
        </NavLink>
      )}
      <h1 className='text-base font-semibold'>{title}</h1>
    </div>
  );
};

export default NavigationHeader;
