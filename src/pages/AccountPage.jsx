import React from "react";
import AccountHeader from "../components/account/AccountHeader";
import AccountTile from "../components/account/AccountTile";
import { BiSolidCoupon } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import BottomNav from "../components/core/BottomNav";
import useAuth from "../hooks/useAuth";

const AccountPage = () => {
  const { logout, loading, error, isLoggedIn } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      alert("User logged out successfully");
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

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
        {isLoggedIn && (
          <div
            className='flex justify-between items-center border-b border-gray-200 py-4'
            onClick={handleLogout}
          >
            <div className='flex items-center space-x-4 text-red-600'>
              <CgLogOut className='text-2xl' />
              <span className='text-base'>Logout</span>
              {loading && <span>Loading...</span>}
              {error && <span>Error: {error}</span>}
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default AccountPage;
