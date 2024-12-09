import { useAuth } from "../context/AuthContext";
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
