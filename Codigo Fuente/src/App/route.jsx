import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";

import RegisterTravel from "./modules/Travels/register-trip/RegisterTravelComponent";
import Home from "./modules/layout/components/welcome-message-component/WelcomeMessageComponent";

const Routes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/Home"
                component={Home}
            />
            <Route
                exact
                path="/Travel/RegisterTravel/:id"
    component={RegisterTravel}
            />
            <Redirect to="/Home" />
        </Switch>
    );
}

export default Routes
