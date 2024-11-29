import React from "react";
import TravelSearchForm from "../components/TravelSearchForm";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import NavigationHeader from "../components/NavigationHeader";

const Search = () => {
  return (
    <div>
      <NavigationHeader title='Search your destination' to='/' />
      <div className='py-10 px-4'>
        <TravelSearchForm />
      </div>
    </div>
  );
};

export default Search;
