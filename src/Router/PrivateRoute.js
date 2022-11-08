import React, { useContext } from "react";
import { FaCog } from "react-icons/fa";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-[83vh] container flex items-center justify-center">
        <FaCog className="animate-spin text-5xl text-white"></FaCog>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoute;
