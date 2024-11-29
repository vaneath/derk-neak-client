import React from "react";
import { NavLink } from "react-router-dom";

const PaymentNavigation = ({ text, to }) => {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-white rounded-t-xl shadow-[0_-4px_6px_rgba(0,0,0,0.1)]'>
      <div className='p-4 flex justify-between space-x-10'>
        <div>
          <p className='text-sm text-gray-600'>Total</p>
          <p className='text-base font-semibold'>30.00$</p>
        </div>
        <NavLink
          to={to}
          className='w-2/3 inline py-2 h-10 bg-primary text-white text-center font-semibold rounded-md hover:opacity-90 hover:text-white'
        >
          {text}
        </NavLink>
      </div>
    </div>
  );
};

export default PaymentNavigation;
