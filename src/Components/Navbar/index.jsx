import React, { Component } from 'react';
import './styles.css'
import logo from '../../assets/logo.svg'
import openDevLogo from '../../assets/logo-opendev.svg'



class Navbar extends Component {
    render() { 
        return (  
            <nav className="navbar">
                <ul className="navbar__wrapper">
                    <div className="navbar__box">
                    <li className="navbar__item"><img src={ logo } alt="Logo Roadmap-cc" id="logo"/></li>
                    </div>
                    <div className="navbar__box__links">
                    <li className="navbar__item hvr-underline-from-left"><a href="#">Sobre</a></li>
                    <li className="navbar__item hvr-underline-from-left"><a href="#">Trilhas</a></li>
                    <li className="navbar__item hvr-underline-from-left"><a href="#">Contato</a></li>
                    <li className="navbar__item"><img src={ openDevLogo } alt="" id="openDevLogo" /></li>
                    </div>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;