import React from 'react';
import { Switch, Route} from 'react-router-dom';

import App from './App';
import Frontend from './Components/Trails/Frontend/index'
import Page404 from './Components/Page404/index'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/frontend" component={Frontend} />
            <Route component={Page404} />
        </Switch>
    )
}
