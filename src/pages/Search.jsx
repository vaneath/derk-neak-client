import React from "react";
import TravelSearchForm from "../components/shared/TravelSearchForm";
import NavigationHeader from "../components/shared/NavigationHeader";

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
