import { Suspense } from "react";
import { GlobalStyles } from "./App.styled";
import AppLayer from "./AppLayer";
import { ROUTES, createSwitchByConfig, isTargetRoute } from "core";
import { PUBLIC_ROUTES } from "./App.routes";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation<{ pathname: string }>();

  if (isTargetRoute(pathname, PUBLIC_ROUTES)) {
    return (
      <Suspense fallback={false}>
        <GlobalStyles />
        <AppLayer>{createSwitchByConfig(PUBLIC_ROUTES, ROUTES.base)}</AppLayer>
      </Suspense>
    );
  }

  // TODO: Add private routes here
  return (
    <Suspense fallback={false}>
      <GlobalStyles />
      <AppLayer>{createSwitchByConfig(PUBLIC_ROUTES, ROUTES.base)}</AppLayer>
    </Suspense>
  );
}

export default App;
