import React, { createContext, useContext } from "react";
import { UAStore } from "./UAStore";
import { useRouter } from "../router/router";


export const UserAgentContext = createContext(null);

export const userAgentStore = new UAStore();

export const useUserAgent = () => useContext(UserAgentContext);

const setUserAgentStoreRouter = (navigateTo) => {
  userAgentStore.setRouter(navigateTo);
};

// провайдер пользователя агента
export function UAProvider({ children }) {
  const { navigateTo } = useRouter();
  setUserAgentStoreRouter(navigateTo);

  return (
      <UserAgentContext.Provider value={userAgentStore}>
        {children}
      </UserAgentContext.Provider>
  );
}
