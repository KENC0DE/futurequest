import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = () => {
  const { user, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <p></p>;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
