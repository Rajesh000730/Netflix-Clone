import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "./Authprovider"
import { useEffect, useState } from "react";
export const ProtectedRoute = () => {
   const { token } = useAuth();
    // Check if the user is authenticated
    if (!token) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/login" />;
    }
  
    // If authenticated, render the child routes
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    );
  };
  