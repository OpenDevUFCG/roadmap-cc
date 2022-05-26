import React from 'react';
import './app.css'
import TrilhaInfra from './components/TrilhaInfra/Trilha-infra'
import TrilhaDados from './components/TrilhaDados/Trilha-dados'


function AppTrilhaInfra() {
  return ( 
    <>
    <TrilhaInfra/>
    </>
  );
}


function AppTrilhaDados() {
  return ( 
    <>
    <TrilhaDados/>
    </>
  );
}

export default {AppTrilhaInfra, AppTrilhaDados};
