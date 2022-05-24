import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import App from './App';
import AppTrilhas from './AppTrilhas';
import Page404 from './Components/Page404/index'


export const Routes = ({
}) => {
    return (
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/infra" component={AppTrilhas.AppTrilhaInfra} exact/>
            <Route path="/dados" component={AppTrilhas.AppTrilhaDados} exact/>
            <Route component={Page404} />
        </Switch>
    )
}

