import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

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