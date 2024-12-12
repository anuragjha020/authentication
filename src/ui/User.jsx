import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../service/apiAuth";
import { useNavigate } from "react-router-dom";
import "../styles/user.css";

function User() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          setUser(userData);
        } else {
          navigate("/login");
        }
      } catch (err) {
        setError(err.message);
      }
    }
    fetchUser();
  }, [navigate]);

  if (error) return <p className="error">{error}</p>;

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-container">
      <h1>Welcome, {user.user_metadata?.userName || "User"}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default User;
