import React from "react";
import "./navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Navbar
      </Link>
      <ul>
        <CustomLink to="/logout">Logout</CustomLink>
        <CustomLink to="/Order">Order</CustomLink>
        <CustomLink to="/Booking">Booking</CustomLink>
        <CustomLink to="/Product">Product</CustomLink>
        <CustomLink to="/UserPage">User</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}

export default Navbar;
