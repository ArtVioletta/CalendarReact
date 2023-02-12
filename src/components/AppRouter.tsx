import React from 'react';
import { privateRoutes, publicRoutes, RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  console.log(isAuth, 'isAuth')
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
