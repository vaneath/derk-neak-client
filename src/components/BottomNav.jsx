import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200'>
      <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
        <Link to='/'>Index</Link>
        <Link to='/home'>Home</Link>
        <Link to='/setting'>Setting</Link>
        <Link to='/account'>Account</Link>
      </div>
    </div>
  );
};

export default BottomNav;
