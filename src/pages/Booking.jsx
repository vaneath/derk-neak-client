import React from "react";
import NavigationHeader from "../components/shared/NavigationHeader";
import BookingInfoCard from "../components/card/BookingInfoCard";
import SectionDivider from "../components/shared/SectionDivider";
import CustomerInfo from "../components/CustomerInfo";
import PaymentDetail from "../components/payment/PaymentDetail";

const Booking = () => {
  return (
    <div>
      <NavigationHeader title='Booking Information' to='/seats' />
      <BookingInfoCard />
      <SectionDivider />
      <CustomerInfo />
      <SectionDivider />
      <PaymentDetail />
    </div>
  );
};

export default Booking;
