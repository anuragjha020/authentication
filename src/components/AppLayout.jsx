import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import "../styles/AppLayout.css";
import Sidebar from "../ui/Sidebar";

function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
      <Sidebar />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
