import { ReactElement } from "react";
import { matchPath, Redirect, Route, Switch } from "react-router-dom";
import { SwitchProps } from "react-router";

interface RouteConfigInterface {
  path: string;
  exact?: boolean;
  main: () => JSX.Element | null;
  renderBackground?: boolean;
}

export const isTargetRoute = (
  currentPath: string,
  routes: RouteConfigInterface[]
): boolean => {
  return routes.some((route) => {
    return !!matchPath(currentPath, { path: route.path, exact: route.exact });
  });
};

export const createRoutesByConfig = (
  routes: RouteConfigInterface[]
): ReactElement<string, any>[] => {
  return routes.map(({ path, exact, renderBackground, ...rest }) => (
    <Route key={path} path={path} exact={exact}>
      {renderBackground && <div className="scene-bg" />}
      <rest.main />
    </Route>
  ));
};

export const createSwitchByConfig = (
  routes: RouteConfigInterface[],
  defaultRedirect?: string
): ReactElement<SwitchProps, any> => (
  <Switch>
    {createRoutesByConfig(routes)}
    {defaultRedirect && <Redirect to={defaultRedirect} />}
  </Switch>
);
