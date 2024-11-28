import React from "react";
import { BiSolidBus } from "react-icons/bi";
import { FaDotCircle } from "react-icons/fa";

const BookingInfoCard = () => {
  return (
    <div className='max-w-lg mx-4 sm:mx-auto p-4 bg-white rounded-xl shadow-md border border-gray-200'>
      {/* Header */}
      <div className='text-gray-800 mb-4'>
        <div className=' text-sm font-medium'>Mon, 19 November 2024</div>
        <div className='flex items-center gap-2 mt-1'>
          <div className='flex items-center text-gray-600'>
            <span className='material-icons text-gray-600 mr-1'>
              <BiSolidBus />
            </span>
            <span className='font-medium'>Bus 01</span>
          </div>
          <span className='text-gray-500 text-sm'>
            Arrival in 12:30 at Phsar Toch
          </span>
        </div>
      </div>

      {/* Badge */}
      <span className='py-1 px-2 bg-orange rounded-md font-semibold text-xs text-white'>
        Direct
      </span>

      {/* Divider */}
      <hr className='border-dashed border-gray-300 my-4' />

      {/* Stations */}
      <div>
        {/* Station 1 */}
        <div className='flex items-start gap-4 mb-6'>
          <div className='flex flex-col items-center'>
            <FaDotCircle className='text-orange text-lg' />
            <div className='h-8 border-l border-dashed border-gray-300'></div>
          </div>
          <div>
            <div className='font-medium text-gray-700'>Station 1</div>
            <div className='font-semibold text-gray-900'>Phnom Penh</div>
            <div className='mt-1 inline-block text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1'>
              Est. 4 hours
            </div>
          </div>
        </div>

        {/* Stop */}
        <div className='flex items-start gap-4 mb-6'>
          <div className='flex flex-col items-center'>
            <FaDotCircle className='text-orange text-lg' />
            <div className='h-8 border-l border-dashed border-gray-300'></div>
          </div>
          <div>
            <div className='font-semibold text-gray-900'>Kampong Thom</div>
            <div className='mt-1 inline-block text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1'>
              Est. 2 hours
            </div>
          </div>
        </div>

        {/* Station 2 */}
        <div className='flex items-start gap-4'>
          <FaDotCircle className='text-orange text-lg' />
          <div>
            <div className='font-medium text-gray-700'>Station 2</div>
            <div className='font-semibold text-gray-900'>Siem Reap</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoCard;
