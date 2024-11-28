import React from "react";
import SearchResultHeader from "../components/SearchResultHeader";
import SeatInfo from "../components/SeatInfo";
import SeatLayout from "../components/SeatLayout";

const Seat = () => {
  return (
    <div>
      <SearchResultHeader />
      <SeatInfo />
      <SeatLayout />
    </div>
  );
};

export default Seat;
