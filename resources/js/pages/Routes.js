import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";

const PagesRoute = () => {
    const PrivateRoute = ({ component: Component, ...rest }) => {
        const autenticate = true;

        return (
            <Route
                {...rest}
                render={(props) =>
                    autenticate ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
        );
    };

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="*" component={NotFound} />
        </Switch>
    );
};

export default PagesRoute;
