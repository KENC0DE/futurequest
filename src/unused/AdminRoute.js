// AdminRoute.js
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const AdminRoute = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return user && user.is_staff === true ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
