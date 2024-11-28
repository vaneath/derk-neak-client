import React from "react";
import NavigationHeader from "../components/NavigationHeader";
import BookingInfoCard from "../components/BookingInfoCard";
import SectionDivider from "../components/SectionDivider";
import CustomerInfo from "../components/CustomerInfo";

const Booking = () => {
  return (
    <div>
      <NavigationHeader title='Booking Information' />
      <BookingInfoCard />
      <SectionDivider />
      <CustomerInfo />
      <SectionDivider />
    </div>
  );
};

export default Booking;
