import React from "react";
import DestinationHeader from "../components/DestinationHeader";
import SearchResultCard from "../components/SearchResultCard";

const SearchResult = () => {
  return (
    <div className='min-h-screen'>
      {/* Header */}
      <DestinationHeader />

      {/* Search Results */}
      <div className='flex flex-col px-4 space-y-4'>
        <SearchResultCard />
        <SearchResultCard />
      </div>
    </div>
  );
};

export default SearchResult;
