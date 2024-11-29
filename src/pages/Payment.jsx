import React, { useState } from "react";
import DestinationHeader from "../components/shared/DestinationHeader";
import bakongIcon from "../assets/bakong_icon.svg";
import visaIcon from "../assets/visa_icon.svg";
import cards from "../assets/cards.svg";
import Divider from "../components/shared/Divider";
import PaymentNavigation from "../components/payment/PaymentNavigation";
import { IoCheckmarkCircle } from "react-icons/io5";

const Payment = () => {
  // State to keep track of the selected payment method
  const [selectedPayment, setSelectedPayment] = useState("");

  // Function to handle selecting a payment method
  const handleSelectPayment = (method) => {
    setSelectedPayment(method);
  };

  return (
    <div>
      <DestinationHeader />
      <div className='payment-options px-4'>
        <h3 className='text-base font-medium mb-4'>Choose a payment method</h3>
        <div className='flex flex-col space-y-4'>
          {/* Bakong Payment Option */}
          <div
            className='flex justify-between items-center space-x-3 cursor-pointer'
            onClick={() => handleSelectPayment("Bakong")}
          >
            <div className='flex items-center space-x-3'>
              <img src={bakongIcon} alt='bakongIcon' />
              <div>
                <p className='text-sm font-medium'>Bakong</p>
                <p className='text-xs text-gray-600'>Pay with Bakong</p>
              </div>
            </div>
            {selectedPayment === "Bakong" && (
              <IoCheckmarkCircle className='text-primary text-2xl' />
            )}
          </div>
          <Divider />
          {/* Credit/Debit Card Payment Option */}
          <div
            className='flex justify-between items-center space-x-3 cursor-pointer'
            onClick={() => handleSelectPayment("Credit/Debit Card")}
          >
            <div className='flex items-center space-x-3'>
              <img src={visaIcon} alt='visaIcon' />
              <div>
                <p className='text-sm font-medium'>Credit/Debit Card</p>
                <img src={cards} alt='cards' />
              </div>
            </div>
            {selectedPayment === "Credit/Debit Card" && (
              <IoCheckmarkCircle className='text-primary text-2xl' />
            )}
          </div>
        </div>
      </div>
      <PaymentNavigation text='Pay now' to='/booking/success' />
    </div>
  );
};

export default Payment;
