import React from "react";
import TravelSearchForm from "../components/TravelSearchForm";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <div className='py-10 px-4'>
      <div className='search-form-header mb-12'>
        <div className='flex items-center space-x-2 mb-1'>
          <NavLink to='/' className='text-black'>
            <IoIosArrowBack className='size-6' />
          </NavLink>
          <h1 className='text-lg font-semibold'>Search for Routes</h1>
        </div>
      </div>
      <TravelSearchForm />
    </div>
  );
};

export default Search;
