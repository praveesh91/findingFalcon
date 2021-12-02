import React from "react";
import { Route, Switch } from "react-router-dom";
import { FindFalcon } from "./components/FindFalcon";
import Home from "./components/Home";
import { Success } from "./components/Success";

const routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/find"} component={FindFalcon} />
      <Route exact path={"/success"} component={Success} />
    </Switch>
  );
};
export default routes;
