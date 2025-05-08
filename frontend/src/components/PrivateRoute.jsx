import React from "react";
import { Navigate } from "react-router-dom";


//if page contained within privateroute, it will not show (go to home page) if user is not authenticated
export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" replace />; //replace history so back button doesn't go back to private route url
}
