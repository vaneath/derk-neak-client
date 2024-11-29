import React from "react";
import AccountHeader from "../components/account/AccountHeader";
import AccountTile from "../components/account/AccountTile";
import { BiSolidCoupon } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import BottomNav from "../components/core/BottomNav";

const AccountPage = () => {
  return (
    <div>
      <AccountHeader />
      <div className='px-4 mt-5'>
        <AccountTile to='/account' icon={BiSolidCoupon} label='Coupon' />
        <AccountTile to='/account' icon={FaBookOpen} label='Booking' />
        <AccountTile to='/account' icon={FaStar} label='Rate our app' />
        <AccountTile
          to='/account'
          icon={MdContactSupport}
          label='Customer support'
        />
        <AccountTile
          color='text-red-600'
          to='/account'
          icon={CgLogOut}
          label='Logout'
        />
      </div>
      <BottomNav />
    </div>
  );
};

export default AccountPage;
