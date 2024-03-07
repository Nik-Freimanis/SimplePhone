"use client";

import s from "./styles.module.css";
import {LoginPage} from "../src/pages/Login";
import { useRouter } from "../app/router/router";
import { HOME_PAGE, LOGIN_PAGE, CALL_PAGE, INCOMING_PAGE } from "../app/router/routes";
import { HomePage } from "../src/pages/Home";
import { useEffect } from "react";
import UAStore from "../app/store/UAStore";
import {CallPage} from "../src/pages/Call/CallPage";
import {IncomingPage} from "../src/pages/Incoming";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const userLoginInfoString = sessionStorage.getItem("userLoginInfo");
    if (userLoginInfoString) {
      const userLoginInfo = JSON.parse(userLoginInfoString);
      UAStore.registerUserAgent(userLoginInfo);
    }
  }, []);

  return (
    <div className={s.pageContainer}>
      {router.currentRoute === LOGIN_PAGE && <LoginPage />}
      {router.currentRoute === HOME_PAGE && <HomePage />}
      {router.currentRoute === CALL_PAGE && <CallPage />}
      {router.currentRoute === INCOMING_PAGE && <IncomingPage />}
    </div>
  );
}
