import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserHistory } from "history";
import "./index.css";
import { App } from "scenes";
import { RootStore } from "stores";
import { StoreProvider } from "shared/hooks";
import { BrowserRouter } from "react-router-dom";

const history = createBrowserHistory({});
const rootStore = RootStore.create({}, { history });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
