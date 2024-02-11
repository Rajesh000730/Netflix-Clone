import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "./Authprovider"
export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    // Check if the user is authenticated
    if (false) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/login" />;
    }
  
    // If authenticated, render the child routes
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
  };
  