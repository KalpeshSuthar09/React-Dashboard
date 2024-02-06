import React from "react";
import "./navbar.css";
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Navbar
      </Link>
      <ul>
          <Link to="/logout">Logout</Link>
          <Link to="/Order">Order</Link>
          <Link to="/Booking">Booking</Link>
          <Link to="/UserPage">User</Link>
         <Link to="/Product">Product</Link> 
          <Link to="/CurrentUser">CurrentUser</Link>
          <Link to="/Login">Login</Link>
      
      </ul>
    </nav>
  );
};



export default Navbar;
