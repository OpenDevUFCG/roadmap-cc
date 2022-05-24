import React from 'react';
import './app.css'
import TrilhaInfra from './Components/TrilhaInfra/Trilha-infra'
import TrilhaDados from './Components/TrilhaDados/Trilha-dados'


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