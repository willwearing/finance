import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <Auth0Provider
    domain="dev-xdm6nuoo.us.auth0.com"
    clientId="oOKeHSn4DM1uRSFcSZmVAQ26qHvpINfB"
    redirectUri={window.location.origin}
  >
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Auth0Provider>,
  document.getElementById("root")
);
