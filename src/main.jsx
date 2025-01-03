import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Default from "./layouts/Default.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import Booking from "./pages/Booking.jsx";
import BookingSuccess from "./pages/BookingSuccess.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import MyTicket from "./pages/MyTicket.jsx";
import MyTicketDetail from "./pages/MyTicketDetail.jsx";
import Payment from "./pages/Payment.jsx";
import Register from "./pages/Register.jsx";
import Search from "./pages/Search.jsx";
import SearchResult from "./pages/SearchResult.tsx";
import Seat from "./pages/Seat.jsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/account' element={<AccountPage />} />,
    <Route element={<Default />}>
      <Route index element={<Home />} />
      <Route path='/blogs' element={<BlogPage />} />
    </Route>,
    <Route path='/search'>
      <Route index element={<Search />} />,
      <Route path='results' element={<SearchResult />} />,
      <Route path='seats' element={<Seat />} />,
    </Route>,
    <Route path='/booking'>
      <Route index element={<Booking />} />,
      <Route path='payment' element={<Payment />} />,
      <Route path='success' element={<BookingSuccess />} />
    </Route>,
    <Route path='/my-tickets'>
      <Route index element={<MyTicket />} />
      <Route path=':id' element={<MyTicketDetail />} />
    </Route>,
    <Route path='/login' element={<Login />} />,
    <Route path='/register' element={<Register />} />,
  ])
);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  throw new Error("Root element not found in the HTML.");
}
