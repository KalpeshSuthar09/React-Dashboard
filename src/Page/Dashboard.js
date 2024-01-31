import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import About from "../components/About";
import Logout from "../Login/Logout";
import AddUser from './User/AddUser'
import UserList from "./User/UserList";

const Dashboard = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/adduser" element={<AddUser />}></Route>
            <Route path="/userlist" element={<UserList />}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
