import { useRoute } from "../context/RouteContext";
import Dashboard from "../page/Dashboard";
import Header from "../ui/Header";

function AppLayout() {
  const { currentPath } = useRoute();

  return (
    <div>
      {currentPath === "/dashboard" && <Header />}
      <Dashboard />

      <main></main>
    </div>
  );
}

export default AppLayout;
