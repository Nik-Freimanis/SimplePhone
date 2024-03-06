import { createContext, useContext, useState } from "react";
import { LOGIN_PAGE } from "./routes";

const RouterContext = createContext(null);

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(LOGIN_PAGE);

  const navigateTo = (route) => {
    setCurrentRoute(route);
  };

  const value = {
    currentRoute,
    navigateTo,
  };

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};
