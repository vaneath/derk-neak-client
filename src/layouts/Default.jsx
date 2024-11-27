import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import backgroundImage from "../assets/maps.svg";

const Default = () => {
  return (
    <>
      <div
        className='h-40 min-w-full bg-cover bg-top sm:bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className='sm:max-w-5xl w-full mx-auto min-h-screen mb-16'>
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default Default;
