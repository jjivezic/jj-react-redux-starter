import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { PublicRoute } from "./publicRoute";
import { PrivateRoute } from "./privateRoute";
import Landing from "../_pages/landing/landing";
import Login from "../_components/auth/loginComponent/login";
import Dashboard from "../_pages/dashboard/dashboard";

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
