import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { TrilogyProviderStyledMangled } from "@trilogy-ds/react/context/providerStyledMangled";
import { Router } from "./router";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TrilogyProviderStyledMangled>
      <HashRouter>
        <Router />
      </HashRouter>
    </TrilogyProviderStyledMangled>
  </React.StrictMode>
);
