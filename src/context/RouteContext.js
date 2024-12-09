import React, { createContext, useState, useContext, useEffect } from "react";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <RouteContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
