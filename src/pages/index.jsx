import React, {useEffect} from 'react';
import Home from '../components/Home/Home.js'
import About from '../components/About'
import Trilhas from '../components/Trilhas/Trilhas-home'
import {dataHome} from '../components/Pt-Br'
import Router from "next/router";

export default function Index() {

  useEffect(() => {
    if (Router.pathname === "/home") {
      Router.push("/");
    }
  }, []);

  return ( 
    <>
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
