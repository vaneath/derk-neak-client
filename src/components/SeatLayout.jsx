import React, { useState } from "react";
import steer from "../assets/steer.svg";
import { NavLink } from "react-router-dom";
import NavigationButton from "./NavigationButton";

const SeatLayout = () => {
  const [selectedDeck, setSelectedDeck] = useState("LOWER");

  const handleToggle = (deck) => {
    setSelectedDeck(deck);
  };

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
        {selectedDeck === "LOWER" && (
          <div className='p-4 mt-8 relative lower-deck'>
            <img src={steer} alt='steer' className='relative left-1/3' />
            <div className='flex justify-center space-x-20'>
              <div className='flex space-x-4'>
                <div className='flex flex-col items-center space-y-4'>
                  <p>A</p>
                  <div className='size-10 rounded-md bg-secondary'></div>
                  <div className='size-10 rounded-md bg-secondary'></div>
                  <div className='size-10 rounded-md bg-secondary'></div>
                  <div className='size-10 rounded-md bg-secondary'></div>
                </div>
                <div className='flex flex-col items-center space-y-4'>
                  <p>B</p>
                  <div className='size-10 rounded-md bg-secondary'></div>
                  <div className='size-10 rounded-md bg-secondary'></div>
                  <div className='size-10 rounded-md bg-secondary'></div>
                  <div className='size-10 rounded-md bg-secondary'></div>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-4'>
                <p>C</p>
                <div className='size-10 rounded-md bg-secondary'></div>
                <div className='size-10 rounded-md bg-secondary'></div>
                <div className='size-10 rounded-md bg-secondary'></div>
                <div className='size-10 rounded-md bg-secondary'></div>
              </div>
            </div>
          </div>
        )}

        {selectedDeck === "UPPER" && (
          <div className='p-4 mt-8 relative upper-deck'>
            <img src={steer} alt='steer' className='relative left-1/3' />
            <div className='flex justify-center space-x-20'>
              <div className='flex flex-col items-center space-y-4'>
                <p>D</p>
                <div className='size-10 rounded-md bg-secondary'></div>
                <div className='size-10 rounded-md bg-secondary'></div>
                <div className='size-10 rounded-md bg-secondary'></div>
                <div className='size-10 rounded-md bg-secondary'></div>
              </div>
              <div className='flex flex-col items-center space-y-4'>
                <p>E</p>
                <div className='size-10 rounded-md bg-secondary'></div>
                <div className='size-10 rounded-md bg-secondary'></div>
                <div className='size-10 rounded-md bg-secondary'></div>
                <div className='size-10 rounded-md bg-secondary'></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Buttons */}
      <div className='flex items-center justify-center mt-4'>
        <div className='flex border border-gray-400 rounded-lg text-sm'>
          <button
            className={`px-4 py-1 ${
              selectedDeck === "LOWER"
                ? "bg-primary text-white"
                : "bg-white text-primary"
            } rounded-l-lg`}
            onClick={() => handleToggle("LOWER")}
          >
            LOWER
          </button>
          <button
            className={`px-4 py-1 ${
              selectedDeck === "UPPER"
                ? "bg-primary text-white"
                : "bg-white text-primary"
            } rounded-r-lg`}
            onClick={() => handleToggle("UPPER")}
          >
            UPPER
          </button>
        </div>
      </div>

      <NavigationButton title='Next' to='/booking' />
    </div>
  );
};

export default SeatLayout;
