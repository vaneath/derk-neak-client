import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaSearchLocation } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className='mt-32'>
      <div className='fixed bottom-0 z-50 w-full h-16 bg-white border-t border-gray-200'>
        <div className='relative flex justify-between sm:justify-evenly items-center mx-auto font-medium h-full px-4'>
          {/* Left Side Icons */}
          <div className='flex justify-start sm:justify-evenly gap-8 grow'>
            <NavItem to='/' icon={GoHome} label='Home' />
            <NavItem to='/tickets' icon={HiOutlineTicket} label='My Ticket' />
          </div>

          {/* Center Icon (Buy) */}
          <div className='absolute -top-7 left-1/2 transform -translate-x-1/2'>
            <div className='bg-primary size-14 rounded-full flex justify-center items-center shadow-md'>
              <NavLink to='/search' className='text-white'>
                <FaSearchLocation className='text-2xl' />
              </NavLink>
            </div>
            <span className='text-center text-xs text-gray-500 mt-1 block'>
              Buy
            </span>
          </div>

          {/* Right Side Icons */}
          <div className='flex justify-end sm:justify-evenly gap-8 grow'>
            <NavItem to='/promotions' icon={CiDiscount1} label='Promo' />
            <NavItem to='/account' icon={IoPersonOutline} label='Account' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
