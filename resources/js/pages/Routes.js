import React from "react";
import { getState } from "redux-localstore";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import NewStudent from "./NewStudent";
import EditStudent from "./EditStudent";
import Logout from "./Logout";

const PagesRoute = () => {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const state = getState();
    if (Object.entries(state).length === 0) return <Redirect to="/login" />;
    const { autenticate } = state.auth;

    return (
      <Route
        {...rest}
        render={(props) =>
          autenticate ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/cadastrar" component={NewStudent} />
      <PrivateRoute path="/editar/:id" component={EditStudent} />
      <Route path="/logout" component={Logout} />
      <Route path="/login" component={Login} />
      <Route path="*" component={Login} />
    </Switch>
  );
};

export default PagesRoute;
