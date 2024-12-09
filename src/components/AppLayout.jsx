import { useRoute } from "../context/RouteContext"; // Import the useRoute hook
import Dashboard from "../page/Dashboard";
import Header from "../ui/Header";

function AppLayout() {
  const { currentPath } = useRoute(); // Get the current path from context

  return (
    <div>
      {/* Conditionally render Header based on the current path */}
      {currentPath === "/dashboard" && <Header />}
      <Dashboard />

      <main></main>
    </div>
  );
}

export default AppLayout;
