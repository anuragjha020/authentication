import React, { useEffect } from "react";
import { useRoute } from "../context/RouteContext";
import { useAuth } from "../context/AuthContext";
import Login from "../page/Login";
import Signup from "../page/Signup";
import ForgotPassword from "../page/ForgotPassword";
import PageNotFound from "../page/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "./AppLayout";

const Routes = () => {
  const { currentPath, navigate } = useRoute();
  const { isAuthenticated } = useAuth();

  // Automatically redirect to dashboard if user is authenticated and trying to access login or signup
  useEffect(() => {
    if (
      (currentPath === "/login" || currentPath === "/signup") &&
      isAuthenticated
    ) {
      navigate("/dashboard");
    }
  }, [currentPath, isAuthenticated, navigate]);

  const renderRoute = () => {
    switch (currentPath) {
      case "/":
        return <Login />;
      case "/login":
        return <Login />;
      case "/signup":
        return <Signup />;
      case "/forgot-password":
        return <ForgotPassword />;
      case "/dashboard":
        return (
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        );
      default:
        return <PageNotFound />;
    }
  };

  return <div>{renderRoute()}</div>;
};

export default Routes;
