import React, { useState } from "react";

const SeatColumn = ({ label, seatCount, seatStates, onSeatStateChange }) => {
  const getSeatClass = (state) => {
    switch (state) {
      case "booked":
        return "bg-secondary cursor-not-allowed";
      case "available":
        return "bg-gray-300 cursor-pointer";
      case "selected":
        return "bg-primary cursor-pointer";
      default:
        return "bg-gray-300";
    }
  };

  const handleSeatClick = (index) => {
    if (seatStates[index] === "booked") return;

    const newState = seatStates[index] === "selected" ? "available" : "selected";
    onSeatStateChange(label, index, newState);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <p>{label}</p>
      {Array.from({ length: seatCount }).map((_, index) => (
        <div
          key={index}
          className={`size-10 rounded-md ${getSeatClass(
            seatStates[index] || "available"
          )}`}
          onClick={() => handleSeatClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default SeatColumn;
