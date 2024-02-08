import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import UserRole from "./UserRole";

const PrivateRoute = ({ expectedRoles, element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("userData");
    const areRolesRequired = !!expectedRoles?.length;
    const roles = [UserRole.admin];

    const rolesMatch = areRolesRequired
      ? expectedRoles.some((r) => roles.indexOf(r) >= 0)
      : true;
      
    if (!login || !rolesMatch) {
      navigate("/Login");
    }
  });
  return element;
};

export default PrivateRoute;
