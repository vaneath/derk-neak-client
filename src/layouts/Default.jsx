import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const Default = () => {
  return (
    <>
      <BottomNav />
      <Outlet />
    </>
  );
};

export default Default;
