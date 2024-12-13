import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {" "}
      <div class="hero">
        <h1>
          Welcome to <span>Alohabid</span>
        </h1>
        <p>Transform the way you want with ease and efficiency.</p>
        <div class="buttons">
          <button>Get Started</button>
          <button class="secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
