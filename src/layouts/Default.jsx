import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import backgroundImage from "../assets/maps.svg";

const Default = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "fit",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='mx-auto max-w-[375px] w-full'>
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default Default;
