import React, { lazy } from "react";
import { ROUTES } from "core";

export interface RouteConfigInterface {
  path: string;
  exact?: boolean;
  main: () => JSX.Element | null;
  renderBackground?: boolean;
}

const Home = lazy(() => import("./Home/Home"));

export const PUBLIC_ROUTES: RouteConfigInterface[] = [
  {
    path: ROUTES.base,
    exact: true,
    main: () => <Home />,
  },
];
