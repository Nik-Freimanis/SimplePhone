"use client";

import s from "./styles.module.css";
import {LoginPage} from "../src/pages/Login";
import { useRouter } from "../app/router/router";
import { HOME_PAGE, LOGIN_PAGE } from "../app/router/routes";
import { HomePage } from "../src/pages/Home";
import { useEffect } from "react";
import { useUserAgent } from "../app/store/UAProvider";

export default function Home() {
  const router = useRouter();
  const userAgentStore = useUserAgent();

  useEffect(() => {
    const userLoginInfoString = sessionStorage.getItem("userLoginInfo");
    if (userLoginInfoString) {
      const userLoginInfo = JSON.parse(userLoginInfoString);
      userAgentStore.registerUserAgent(userLoginInfo);
    }
  }, []);

  return (
    <div className={s.pageContainer}>
      {router.currentRoute === LOGIN_PAGE && <LoginPage />}
      {router.currentRoute === HOME_PAGE && <HomePage />}
    </div>
  );
}
