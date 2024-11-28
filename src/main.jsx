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
import Ticket from "./pages/Ticket.jsx";
import Search from "./pages/Search.jsx";
import Promotion from "./pages/Promotion.jsx";
import Account from "./pages/Account.jsx";
import Home from "./pages/Home.jsx";
import SearchResult from "./pages/SearchResult.jsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Default />}>
      <Route index element={<Home />} />
      <Route path='/promotions' element={<Promotion />} />
      <Route path='/account' element={<Account />} />
      <Route path='/tickets' element={<Ticket />} />,
    </Route>,
    <Route path='/search'>
      <Route index element={<Search />} />,
      <Route path='results' element={<SearchResult />} />,
    </Route>,
  ])
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If not login, redirect to login page
// If login, redirect to home page

// Get current user
