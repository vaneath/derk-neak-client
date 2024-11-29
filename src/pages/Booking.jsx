import React from "react";
import NavigationHeader from "../components/NavigationHeader";
import BookingInfoCard from "../components/BookingInfoCard";
import SectionDivider from "../components/SectionDivider";
import CustomerInfo from "../components/CustomerInfo";
import PaymentDetail from "../components/PaymentDetail";

const Booking = () => {
  return (
    <div>
      <NavigationHeader title='Booking Information' />
      <BookingInfoCard />
      <SectionDivider />
      <CustomerInfo />
      <SectionDivider />
      <PaymentDetail />
    </div>
  );
};

export default Booking;
