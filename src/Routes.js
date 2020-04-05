import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Login, NotFound } from "./containers";
import { PrivateRoute } from "./components/PrivateRoute";
export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home}></PrivateRoute>
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}
