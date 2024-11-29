import React, { useState } from "react";

const MyTicketFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className='px-4'>
      {/* <!-- Filter --> */}
      <div className='flex items-center justify-between space-x-4 mb-6'>
        <div className='flex items-center space-x-4'>
          {["All", "Upcoming", "Past"].map((filter) => (
            <p
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`cursor-pointer px-4 py-2 rounded-lg font-medium ${
                selectedFilter === filter
                  ? "bg-primary text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              {filter}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTicketFilter;
