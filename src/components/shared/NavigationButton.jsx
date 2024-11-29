import React from "react";
import { NavLink } from "react-router-dom";

const NavigationButton = ({ text, to }) => {
  return (
    <div className='mt-32'>
      <div className='fixed bottom-0 left-0 w-full bg-white rounded-t-xl shadow-[0_-4px_6px_rgba(0,0,0,0.1)]'>
        <div className='p-4'>
          <NavLink
            to={to}
            className='w-full block py-2 h-10 bg-primary text-white text-center font-medium rounded-md hover:opacity-90 hover:text-white'
          >
            {text}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationButton;
