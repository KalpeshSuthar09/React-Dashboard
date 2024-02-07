import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("userData");
    if (!login) {
      navigate("/Login");
    }
  });
  return element;
};

export default PrivateRoute;
