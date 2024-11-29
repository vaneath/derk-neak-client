import React from "react";
import MyTicketTile from "../components/MyTicketTile";
import BottomNav from "../components/BottomNav";
import NavigationHeader from "../components/NavigationHeader";
import MyTicketFilter from "../components/MyTicketFilter";

const MyTicket = () => {
  return (
    <div>
      <NavigationHeader title='My Tickets' />
      <MyTicketFilter />
      <MyTicketTile
        date='Monday, 20th September 2024'
        isDirect={true}
        departure='10:00 AM'
        price='30.00'
        seats={2}
        station1='Phnom Penh'
        station2='Siem Reap'
        estTime='6h 30m'
      />
      <BottomNav />
    </div>
  );
};

export default MyTicket;
