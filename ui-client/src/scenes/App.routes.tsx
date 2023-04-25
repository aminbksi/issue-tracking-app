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
const GithubIssues = lazy(
  () =>
    import(
      "./Github/pages/UserHomePage/components/GithubRepositories/components/GithubIssues/GithubIssues"
    )
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
  {
    path: ROUTES.issues,
    exact: true,
    main: () => <GithubIssues />,
  },
];
