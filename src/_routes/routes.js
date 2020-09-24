import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { PublicRoute } from "./publicRoute";
import { PrivateRoute } from "./privateRoute";
import Landing from "../_components/landing/landing";
import Login from "../_components/auth/loginComponent/login";
import Dashboard from "../_components/dashboard/dashboard";

const Routes = () => {
    return (
        <Switch>
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/" component={Landing} exact />
            <PrivateRoute path="/app" component={Dashboard} />
            {/* <Redirect to='/pageNotFound' /> */} */}
        </Switch>
    );
};


export { Routes };
