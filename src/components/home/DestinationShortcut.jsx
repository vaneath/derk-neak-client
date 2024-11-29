import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const DestinationShortcut = () => {
  const destinations = [
    "Siem Reap",
    "Phnom Penh",
    "Battambang",
    "Sihanoukville",
    "Kampot",
    "Kep",
    "Koh Kong",
    "Ratanakiri",
  ];

  return (
    <div className='destination-shortcut flex gap-3 px-4 overflow-x-auto whitespace-nowrap'>
      {destinations.map((destination, index) => (
        <div
          key={index}
          className='destination-box inline-block w-32 rounded-lg bg-gray-200 p-2 shrink-0'
        >
          <p className='font-normal text-xs text-gray-600'>Buy ticket to</p>
          <div className='flex gap-1 justify-start items-center space-y-1'>
            <span>
              <FaLocationDot />
            </span>
            <p className='font-semibold text-xs'>{destination}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationShortcut;
