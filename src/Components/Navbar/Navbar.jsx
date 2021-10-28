import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo-roadmap.svg'
import openDevLogo from '../../assets/logo/logo-opendev.svg'

function scrollTop(){
    window.scrollTo(500, 0)
}
class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <ul>
                    <div className="navbar__box">
                        <li><img src={logo} alt="Logo Roadmap-cc" id="logo"/></li>
                    </div>
                    <div className="navbar__box__links">
                        <li><Link to="/" onClick={scrollTop()}>Home</Link></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#trails">Trilhas</a></li>
                        <img src={openDevLogo} alt="" id="openDevLogo" />
                    </div>
                </ul>
            </nav>
        );
    }
}

export default Navbar;