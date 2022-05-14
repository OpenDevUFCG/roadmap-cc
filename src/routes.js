import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './App';
import App2 from './App2';
import Page404 from './Components/Page404/index'


export const Routes = ({
}) => {
    return (
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/infra" component={App2} exact/>
            <Route component={Page404} />
        </Switch>
    )
}
