import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logout as logoutApi } from "../service/apiAuth";

function Logout({ style }) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      // Attempt to login using the Supabase API
      await logoutApi();
      alert("logout successful");

      // On success, log the user in
      logout();
      navigate("/login");
      setIsLoading(false);
    } catch (err) {
      setError(err.message || "An error occurred during login");
      setIsLoading(false);
    }
  };
  return (
    <div className="popup-item" onClick={handleLogout}>
      {isLoading ? "Logging out..." : "Logout"}
    </div>
  );
}

export default Logout;
