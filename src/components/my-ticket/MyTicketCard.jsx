import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MyTicketCard = () => {
  const [showQR, setShowQR] = useState(true);

  return (
    <div className='min-w-80 bg-white shadow-lg'>
      {/* Image Section */}
      <img
        src='https://www.triplekangkor.com/wp-content/uploads/2023/08/Angkor-Wat.png' // Use the imported image
        alt='Bus Destination'
        className='w-full h-48 object-cover rounded-t-xl'
      />
      {/* Ticket Info Section */}
      <div className='p-4'>
        <div className='grid grid-cols-2 text-sm text-black'>
          {/* Left Column for Labels */}
          <div className='text-left'>
            <p className='font-medium'>Date & Time</p>
            <p className='font-medium'>Destination</p>
            <p className='font-medium'>Ticket Type</p>
          </div>
          {/* Right Column for Values */}
          <div className='text-right'>
            <p>14 Nov 2024 | 7AM</p>
            <p>Koh Kong</p>
            <p>Normal</p>
          </div>
        </div>
      </div>

      <hr className='border-gray-200' />
      {/* QR Code Section */}
      <div className='p-4 text-center'>
        <p className='text-sm text-gray-600 mb-2'>
          This QR code is for Individual check-in
        </p>
        <p className='text-lg font-bold text-black'>Seat. A05</p>
        <div className={`mx-auto mt-4 w-24 h-24 ${!showQR ? "blur-md" : ""}`}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg'
            alt='QR Code'
            className='w-full h-full'
          />
        </div>
        <div className='flex justify-center items-center'>
          <button
            onClick={() => setShowQR(!showQR)}
            className='mt-4 flex justify-center items-center text-black bg-white rounded-lg hover:bg-white'
          >
            {showQR ? (
              <FaEyeSlash className='mr-2' />
            ) : (
              <FaEye className='mr-2' />
            )}
            {showQR ? "Hide QR" : "Show QR"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTicketCard;
