import { FaBus, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MyTicketTile = ({
  date,
  isDirect,
  departure,
  price,
  seats,
  station1,
  station2,
  estTime,
}) => {
  return (
    <NavLink to='/my-tickets/1'>
      <div className='p-4 mx-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100'>
        {/* Date Row */}
        <div className='flex justify-between items-center pb-3 border-b border-dashed border-gray-300'>
          <p className='text-lg font-semibold text-black'>{date}</p>
          {isDirect && (
            <span
              className='px-3 py-1 text-sm font-semibold text-white rounded-md'
              style={{ backgroundColor: "#DC6803" }}
            >
              Direct
            </span>
          )}
        </div>

        {/* Stations and Estimated Time */}
        <div className='flex justify-between items-center pt-3 pb-3 border-b border-dashed border-gray-300'>
          {/* Station 1 */}
          <div className='flex items-center gap-2'>
            <FaMapMarkerAlt style={{ color: "#DC6803" }} />
            <div>
              <p className='text-sm font-medium text-[#475467]'>Station 1</p>
              <p className='text-base font-bold text-black'>{station1}</p>
            </div>
          </div>

          {/* Estimated Time (Gray Border Box with Spacing) */}
          <div className='mx-4 px-2 py-0.5 text-xs text-[#475467] border border-gray-300 bg-gray-100 rounded-md'>
            Est. {estTime}
          </div>

          {/* Station 2 */}
          <div className='flex items-center gap-2'>
            <FaMapMarkerAlt style={{ color: "#16B364" }} />
            <div>
              <p className='text-sm font-medium text-[#475467]'>Station 2</p>
              <p className='text-base font-bold text-black'>{station2}</p>
            </div>
          </div>
        </div>

        {/* Bus Details and Pricing */}
        <div className='flex justify-between items-center pt-3'>
          {/* Left: Bus Info */}
          <div>
            <p className='text-sm flex items-center gap-2 text-[#475467]'>
              <FaBus /> Bus - {seats} seats
            </p>
            <p className='mt-1 text-sm font-medium text-[#475467]'>
              Departure:{" "}
              <span className='font-bold text-[#475467]'>{departure}</span>
            </p>
          </div>

          {/* Right: Price 475467*/}
          <div className='flex items-center'>
            <p className='text-xl font-bold' style={{ color: "#DC6803" }}>
              {price}$
            </p>
            <span className='ml-1 text-sm' style={{ color: "#475467" }}>
              /pax
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MyTicketTile;
