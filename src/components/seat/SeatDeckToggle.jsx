import React from "react";

const SeatDeckToggle = ({ selectedDeck, onToggle }) => {
  return (
    <div className='flex items-center justify-center mt-4'>
      <div className='flex border border-gray-400 rounded-lg text-sm'>
        <button
          className={`px-4 py-1 ${
            selectedDeck === "LOWER"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          } rounded-l-lg`}
          onClick={() => onToggle("LOWER")}
        >
          LOWER
        </button>
        <button
          className={`px-4 py-1 ${
            selectedDeck === "UPPER"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          } rounded-r-lg`}
          onClick={() => onToggle("UPPER")}
        >
          UPPER
        </button>
      </div>
    </div>
  );
};

export default SeatDeckToggle;
