import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import NavigationButton from "../components/shared/NavigationButton";

const BookingSuccess = () => {
  return (
    <div className='flex flex-col justify-center mt-20 items-center'>
      <IoCheckmarkCircle className='text-primary size-28' />
      <div className='flex flex-col items-center text-center mx-10 space-y-3 mt-10'>
        <h4 className='text-base font-medium'>Booking Successful</h4>
        <p className='text-sm text-gray-600'>
          You have booked successfully, please check your ticket below.
        </p>
      </div>
      <NavigationButton text='Go home' to='/' />
    </div>
  );
};

export default BookingSuccess;
