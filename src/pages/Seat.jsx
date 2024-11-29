import React from "react";
import DestinationHeader from "../components/shared/DestinationHeader";
import SeatInfo from "../components/seat/SeatInfo";
import SeatLayout from "../components/seat/SeatLayout";

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
