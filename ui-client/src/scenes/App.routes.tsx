import React, { lazy } from "react";
import { ROUTES } from "core";

export interface RouteConfigInterface {
  path: string;
  exact?: boolean;
  main: () => JSX.Element | null;
  renderBackground?: boolean;
}

const Home = lazy(() => import("./Home/Home"));
const UserHomePage = lazy(
  () => import("./Github/pages/UserHomePage/UserHomePage")
);

export const PUBLIC_ROUTES: RouteConfigInterface[] = [
  {
    path: ROUTES.base,
    exact: true,
    main: () => <Home />,
  },
  {
    path: ROUTES.user,
    exact: true,
    main: () => <UserHomePage />,
  },
];
