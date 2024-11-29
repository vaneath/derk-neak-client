import React from "react";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const AccountTile = ({ to, icon: Icon, label, color }) => {
  return (
    <NavLink to={to}>
      <div
        className={`flex justify-between items-center border-b border-gray-200 py-4 ${
          color ? `${color}` : ""
        }`}
      >
        <div className='flex items-center space-x-4'>
          <Icon className={`text-2xl ${color ? `text-${color}` : ""}`} />
          <span className={`text-base ${color ? `text-${color}` : ""}`}>
            {label}
          </span>
        </div>
        <GrNext className={`size-4 ${color ? `text-${color}` : ""}`} />
      </div>
    </NavLink>
  );
};

export default AccountTile;
