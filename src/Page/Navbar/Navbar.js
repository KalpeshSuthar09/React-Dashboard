import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Navbar
      </Link>
      <ul>
        <Link to="/Logout">Logout</Link>
        <Link to="/Order">Order</Link>
        <Link to="/Booking">Booking</Link>
        <Link to="/Product">Product</Link>
        <Link to="/CurrentUser">CurrentUser</Link>
        <Link to="/Login">Login</Link>
        <Link to="/UserPage">UserPage</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
