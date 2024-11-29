import React from "react";
import NavigationHeader from "../components/shared/NavigationHeader";
import MyTicketCard from "../components/my-ticket/MyTicketCard";
import ticket from "../data/ticket.js";

const MyTicketDetail = () => {
  const kohkong = ticket.kohkong;
  return (
    <div>
      <NavigationHeader title='My Ticket Detail' to='/my-tickets' />
      <div className='flex px-4 items-center justify-start space-x-4 overflow-x-auto'>
        {kohkong.items.map((ticket, index) => (
          <MyTicketCard ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default MyTicketDetail;
