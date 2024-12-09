import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { RouteProvider } from "./context/RouteContext";
import Routes from "./components/Routes";

function App() {
  return (
    <AuthProvider>
      <RouteProvider>
        <Routes />
      </RouteProvider>
    </AuthProvider>
  );
}

export default App;
