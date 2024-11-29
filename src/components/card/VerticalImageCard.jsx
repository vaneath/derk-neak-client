import React from "react";

const VerticalImageCard = ({imageUrl, title}) => {
  return (
    <div className='w-28 h-44 shrink-0'>
      <img
        src={imageUrl}
        alt={title}
        className='w-full h-full object-cover rounded-lg'
      />
    </div>
  );
};

export default VerticalImageCard;
