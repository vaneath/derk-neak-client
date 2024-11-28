import React from "react";
import SearchResultHeader from "../components/SearchResultHeader";
import SearchResultCard from "../components/SearchResultCard";

const SearchResult = () => {
  return (
    <div className='min-h-screen'>
      {/* Header */}
      <SearchResultHeader />

      {/* Search Results */}
      <div className='px-4 space-y-4'>
        <SearchResultCard />
        <SearchResultCard />
      </div>
    </div>
  );
};

export default SearchResult;
