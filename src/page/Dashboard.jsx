import React from "react";
import Todo from "../components/Todo";
import "../styles/dashboard.css"; // Import the external CSS file

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Todo />
    </div>
  );
}

export default Dashboard;
