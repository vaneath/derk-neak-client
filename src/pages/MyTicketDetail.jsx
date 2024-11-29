import React from "react";
import NavigationHeader from "../components/shared/NavigationHeader";
import MyTicketCard from "../components/my-ticket/MyTicketCard";

const MyTicketDetail = () => {
  return (
    <div>
      <NavigationHeader title='My Ticket Detail' to='/my-tickets' />
      <div className='flex px-4 items-center justify-start space-x-4 overflow-x-auto'>
        <MyTicketCard />
        <MyTicketCard />
      </div>
    </div>
  );
};

export default MyTicketDetail;
