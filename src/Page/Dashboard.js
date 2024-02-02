import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Logout from "../Login/Logout";
import UserPage from "./User/UserPage";
import Order from "./Order/Order";
import Booking from "./Booking/Booking";
import ProductShow from "./Product/ProductShow";
import '../App.css'
const Dashboard = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/UserPage" element={<UserPage />}></Route>
          <Route path="/Order" element={<Order />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
          <Route path="/ProductShow" element={<ProductShow />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
