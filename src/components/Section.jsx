import React from "react";
import { GrNext } from "react-icons/gr";

const Section = ({ children }) => {
  return (
    <div className='section mt-6'>
      <div className='section-header flex justify-between items-center px-4'>
        <div>
          <h3 className='font-bold text-base'>Popular Destinations</h3>
          <p className='font-normal text-xs text-gray-600'>
            Explore the popular destinations
          </p>
        </div>
        <GrNext className='size-4' />
      </div>
      <div className='section-body mt-4 flex justify-start items-center space-x-4 overflow-x-scroll px-4'>
        {children}
      </div>
    </div>
  );
};

export default Section;
