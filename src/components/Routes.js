import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "../page/Login";
import Signup from "../page/Signup";
import ForgotPassword from "../page/ForgotPassword";
import PageNotFound from "../page/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "./AppLayout";
import Dashboard from "../page/Dashboard";
import Todo from "../components/Todo";
import Home from "../ui/Home";
import User from "../ui/User";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />
      <Route
        path="/signup"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Signup />
        }
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="todo" element={<Todo />} />
        <Route path="user" element={<User />} />
      </Route>

      {/* Catch-All Route for 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
