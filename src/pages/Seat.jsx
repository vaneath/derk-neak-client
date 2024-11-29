import React from "react";
import DestinationHeader from "../components/DestinationHeader";
import SeatInfo from "../components/SeatInfo";
import SeatLayout from "../components/SeatLayout";

const Seat = () => {
  return (
    <div>
      <DestinationHeader />
      <SeatInfo />
      <SeatLayout />
    </div>
  );
};

export default Seat;
