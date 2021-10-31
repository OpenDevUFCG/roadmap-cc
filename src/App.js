import React from 'react';
import './Styles/Styles.css'
import Home from './Components/Home/Home.js'
import About from './Components/About'
import Trilhas from './Components/Trilhas/Trilhas-home'
import {dataHome} from './Components/Pt-Br'


function App() {
  return ( 
    <>
    <Home 
      title={dataHome.tituloPrincipal}
      subtitle={dataHome.subtituloPrincipal}
      btnText={dataHome.textoBotaoPrincipal}
      miniText={dataHome.miniTextoPrincipal}
    />
    <About
      title={dataHome.sobreNosTituloPrincipal}
      text={dataHome.sobreNosTexto}
    /> 
    <Trilhas
      title={dataHome.trilhasTextoPrincipal}
      subtitle={dataHome.trilhasSubtitulo}
    /> 
    </>
  );
}

export default App;
