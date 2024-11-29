import React from "react";
import NavigationButton from "../shared/NavigationButton";
import Divider from "../shared/Divider";

const PaymentDetail = () => {
  return (
    <div>
      <div className='max-w-lg mx-auto px-4 flex flex-col space-y-4'>
        <h4 className='text-sm font-semibold'>Payment Details</h4>
        <div className='flex flex-col space-y-2'>
          <div className='flex justify-between'>
            <p className='text-sm text-gray-600'>Ticket Price</p>
            <p className='text-sm'>30.00$</p>
          </div>
          <Divider />
          <div className='flex justify-between'>
            <p className='text-sm text-gray-600'>VAT Fee</p>
            <p className='text-sm'>0.00$</p>
          </div>
        </div>
        <div className='flex justify-between'>
          <p className='text-lg font-semibold'>Total Price</p>
          <p className='text-lg font-semibold text-primary'>30.00$</p>
        </div>
      </div>
      <NavigationButton text='Proceed to Payment' to='payment' />
    </div>
  );
};

export default PaymentDetail;
