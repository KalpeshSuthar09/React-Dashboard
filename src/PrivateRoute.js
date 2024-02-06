import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

const PrivateRoute = () => {
    const user = JSON.parse(localStorage.getItem("userData"));
  return user ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoute;