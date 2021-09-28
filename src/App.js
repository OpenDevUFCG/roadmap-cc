import React from 'react';
import './Styles/Styles.css'
import Home from './Components/Home/Home.js'
import AboutUs from './Components/About'
import Trilhas from './Components/Trilhas/Trilhas-home'
import data from './Components/Pt-Br'


function App() {
  console.log('oi', data)
  return ( 
    <>
    <Home 
      title={data.tituloPrincipal}
      subtitle={data.subtituloPrincipal}
      btnText={data.textoBotaoPrincipal}
      miniText={data.miniTextoPrincipal}
    />
    <AboutUs
      title={data.sobreNosTituloPrincipal}
      text={data.sobreNosTexto}
    /> 
    <Trilhas
      title={data.trilhasTextoPrincipal}
      subtitle={data.trilhasSubtitulo}
    /> 
    </>
  );
}

export default App;
