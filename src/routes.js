import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
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
=======
import App from "./App";
import Page404 from "./Components/Page404/index";
import { TrilhaDinamica } from "./Components/TrilhaDinamica/Trilha-dinamica.jsx";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/:rota" component={TrilhaDinamica} exact />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};
>>>>>>> 808ff06772d4beab1fe7bcffee79593d6054f04c
