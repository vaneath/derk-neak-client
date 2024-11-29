import React from "react";

const HorizontalImageCard = ({ imageUrl, title }) => {
  return (
    <div className='w-72 h-44 shrink-0'>
      <img
        src={imageUrl}
        alt={title}
        className='w-full h-full object-cover rounded-lg'
      />
    </div>
  );
};

export default HorizontalImageCard;
