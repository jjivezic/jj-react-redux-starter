import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { PublicRoute } from "./publicRoute";
import { PrivateRoute } from "./privateRoute";
import Landing from "../_pages/landing";
import Login from "../_pages/auth/login";
import Dashboard from "../_pages/dashboard";

const Routes = () => {
    return (
        <Switch>
            <PublicRoute exact path="/" component={Landing} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/app" component={Dashboard} />
        </Switch>
    );
};


export { Routes };
