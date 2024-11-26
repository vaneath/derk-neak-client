import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Default from "./layouts/Default.jsx";
import Ticket from "./pages/Ticket.jsx";
import Search from "./pages/Search.jsx";
import Promotion from "./pages/Promotion.jsx";
import Account from "./pages/Account.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Default />}>
      <Route index element={<Home />} />
      <Route path='/tickets' element={<Ticket />} />
      <Route path='/search' element={<Search />} />
      <Route path='/promotions' element={<Promotion />} />
      <Route path='/account' element={<Account />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
