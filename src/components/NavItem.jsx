import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center ${
          isActive ? "text-primary" : "text-gray-500"
        }`
      }
    >
      <Icon className='text-2xl' />
      <span className='text-xs'>{label}</span>
    </NavLink>
  );
};

export default NavItem;
