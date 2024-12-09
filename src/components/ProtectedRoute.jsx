import { useAuth } from "../context/AuthContext"; // Assuming you have an AuthContext
import { useRoute } from "../context/RouteContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { navigate } = useRoute();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return children;
};

export default ProtectedRoute;
