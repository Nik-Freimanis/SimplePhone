import JsSIP from "jssip";
import { makeAutoObservable } from "mobx";
import { HOME_PAGE } from "../router/routes";

export class UAStore {
  userAgent = null;
  errorMessage = '';
  navigate = null;
  #userLoginInfo = null;

  constructor() {
    makeAutoObservable(this);
  }

  setRouter(navigate) {
    this.navigate = navigate;
  }

  #setUserAgent(userAgent) {
    this.userAgent = userAgent;
  }

  #clearError() {
    this.errorMessage = '';
  }

  registerUserAgent({ login, password, server, remember }) {
    this.#clearError();

    this.#userLoginInfo = { login, password, server, remember };

    const socket = new JsSIP.WebSocketInterface('wss://' + server, {
      requestParams: {
        tlsOptions: {
          rejectUnauthorized: false
        }
      }
    });

    const configuration = {
      sockets: [socket],
      uri: `sip:${login}@${server}`,
      password,
    };

    let userAgent = null;
    try {
      userAgent = new JsSIP.UA(configuration);
    } catch {
      this.errorMessage = "Login error occurred.";
      return;
    }

    userAgent.on('connected', this.#handleConnected);
    userAgent.on('disconnected', this.#handleDisconnected);
    userAgent.on('registered', this.#handleRegistered);
    userAgent.on('registrationFailed', this.#handleRegistrationFailed);

    this.#setUserAgent(userAgent);
    this.userAgent.start();
  }

  #handleConnected = (e) => {
    console.log("Connected to SIP server", e);
  };

  #handleDisconnected = (e) => {
    if (e.error) {
      this.errorMessage = "Login error occurred.";
      this.userAgent.stop();
    }
    console.log("Disconnected from SIP server", e);
  };

  #handleRegistered = (e) => {
    console.log("Registered with SIP server", e);
    if (this.#userLoginInfo?.remember) {
      sessionStorage.setItem(
          "userLoginInfo",
          JSON.stringify(this.#userLoginInfo)
      );
    }
    this.navigate(HOME_PAGE);
  };

  #handleRegistrationFailed = (e) => {
    this.errorMessage = "Login error occurred.";
    console.log("Login failed with SIP server", e);
  };
}