import React, { Component } from 'react';
import Navbar from '~/components/Navbar/index';
import notFound from '~/assets/img/notFound.svg'
import styles from './404.module.css'

class Home404 extends Component {
 
    render() { 
        return (  
            <>
            <Navbar/>
            <section className={styles.notFound}>
                <img src={ notFound } alt="" />
                <p>Página não <br/> encontrada!</p>
            </section>
            </>
        );
    }
}
 
export default Home404;