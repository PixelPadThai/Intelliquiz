// src/components/ProtectedRoute.jsx
import { useFirebase } from "../src/context/Firebase";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoggedIn } = useFirebase();

  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/signUp" replace />;
  }

  // Otherwise render child routes
  return <Outlet />;
}
