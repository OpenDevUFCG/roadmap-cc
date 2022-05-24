import React from 'react';
import Home from './Components/Home/Home.js'
import About from './Components/About'
import Trilhas from './Components/Trilhas/Trilhas-home'
import {dataHome} from './Components/Pt-Br'
import Navbar from './Components/Navbar/index.js';
import './app.css';


function App() {
  return ( 
    <>
    <Navbar/>
    <Home 
      title={dataHome.tituloPrincipal}
      subtitle={dataHome.subtituloPrincipal}
      btnText={dataHome.textoBotaoPrincipal}
      miniText={dataHome.miniTextoPrincipal}
      id="home"
    />
    <About
      title={dataHome.sobreNosTituloPrincipal}
      text={dataHome.sobreNosTexto}
      id="about"
    /> 
    <Trilhas
      title={dataHome.trilhasTextoPrincipal}
      subtitle={dataHome.trilhasSubtitulo}
      id="trails"
    /> 
    </>
  );
}

export default App;
