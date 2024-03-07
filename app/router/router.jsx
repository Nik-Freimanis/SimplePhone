import { createContext, useContext, useEffect, useState } from "react";
import { CALL_PAGE, HOME_PAGE, INCOMING_PAGE, LOGIN_PAGE } from "./routes";
import UAStore from "../store/UAStore";
import { AgentStatus } from "../store/agentStatus";
import { observer } from "mobx-react-lite";

const RouterContext = createContext(null);

export const useRouter = () => useContext(RouterContext);

const routeMap = {
  [AgentStatus.CALL_INCOMING]: INCOMING_PAGE,
  [AgentStatus.CALL_CONNECTING]: CALL_PAGE,
  [AgentStatus.CALL_IN_PROGRESS]: CALL_PAGE,
  [AgentStatus.CALL_CONFIRMED]: CALL_PAGE,
  [AgentStatus.CALL_TERMINATED]: CALL_PAGE,
  [AgentStatus.DEFAULT]: HOME_PAGE,
  [AgentStatus.UNREGISTERED]: LOGIN_PAGE,
};


export const RouterProvider = observer(({ children }) => {

  const [currentRoute, setCurrentRoute] = useState(LOGIN_PAGE);


  const navigateTo = (route) => {
    setCurrentRoute(route);
  };

  useEffect(() => {
    navigateTo(routeMap[UAStore?.agentStatus]);
  }, [UAStore?.agentStatus]);

  const value = {
    currentRoute,
    navigateTo,
  };

  return (
      <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
});
