import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/logo/logo-roadmap.svg'
import openDevLogo from '../../assets/logo/logo-opendev.svg'
import { Link } from 'react-router-dom'
import MobileMenu from '../HamburguerMenu'

function scrollTop(){
    window.scrollTo(500, 0)
}

export default function Navbar() {
    
        return (
            <nav className={styles.navbar}>
                <div className={styles.container}>
                        <li><img src={logo} onClick={scrollTop()} alt="Logo Roadmap-cc" id={styles.logoRoadmap}/></li>
                    </div>
                <div className={styles.linksWrapper}>    
                            <li><Link to="/" onClick={scrollTop()}>Home</Link></li>
                            <li><Link to="/" >Sobre</Link></li>
                            <li><Link to="/">Trilhas</Link></li>
                        <a href="https://opendevufcg.org/" target="_blank"><img src={openDevLogo} alt="" id={styles.logoOpenDev} /></a>
                    </div>
                    <div id={styles.menuMobile}>
                        <MobileMenu/>
                    </div>
            </nav>
        );
}
