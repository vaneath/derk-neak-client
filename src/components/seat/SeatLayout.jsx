import React, { useState } from "react";
import steer from "./../../assets/steer.svg";
import NavigationButton from "../shared/NavigationButton";
import SeatColumn from "./SeatColumn";
import SeatDeckToggle from "./SeatDeckToggle";

const SeatLayout = () => {
  const [selectedDeck, setSelectedDeck] = useState("LOWER");

  const [seatStates, setSeatStates] = useState({
    LOWER: {
      A: ["booked", "available", "available", "booked"],
      B: ["available", "available", "booked", "booked"],
      C: ["selected", "booked", "available", "available"],
    },
    UPPER: {
      D: ["available", "available", "booked", "selected"],
      E: ["booked", "booked", "available", "available"],
    },
  });

  const handleToggle = (deck) => {
    setSelectedDeck(deck);
  };

  const handleSeatStateChange = (column, seatIndex, newState) => {
    setSeatStates((prevState) => {
      const updatedDeck = { ...prevState[selectedDeck] };
      const updatedColumn = [...updatedDeck[column]];
      updatedColumn[seatIndex] = newState;
      updatedDeck[column] = updatedColumn;

      return { ...prevState, [selectedDeck]: updatedDeck };
    });
  };

  const currentDeckSeats = seatStates[selectedDeck];

  return (
    <div>
      <div className='border border-gray-200 rounded-lg shadow-md mt-6 p-4 mx-4'>
        <div className='flex justify-evenly items-center'>
          <div className='flex items-center space-x-1'>
            <div className='size-5 rounded-md bg-secondary'></div>
            <p>Booked</p>
          </div>
          <div className='flex items-center space-x-1'>
            <div className='size-5 rounded-md bg-gray-300'></div>
            <p>Available</p>
          </div>
          <div className='flex items-center space-x-1'>
            <div className='size-5 rounded-md bg-primary'></div>
            <p>Your seat</p>
          </div>
        </div>

        {/* Toggle Between Decks */}
        <div className='p-4 mt-8 relative'>
          <img src={steer} alt='steer' className='relative left-1/3' />
          <div className='flex justify-center space-x-20'>
            {Object.entries(currentDeckSeats).map(([label, states]) => (
              <SeatColumn
                key={label}
                label={label}
                seatCount={states.length}
                seatStates={states}
                onSeatStateChange={handleSeatStateChange}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Component */}
      <SeatDeckToggle selectedDeck={selectedDeck} onToggle={handleToggle} />

      <NavigationButton text='Next' to='/booking' />
    </div>
  );
};

export default SeatLayout;
