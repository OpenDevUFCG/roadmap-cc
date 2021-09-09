import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import notFound from '../../assets/img/notFound.svg'

class Home404 extends Component {
 
    render() { 
        return (  
            <>
            <Navbar/>
            <section className="notFound">
                <img src={ notFound } alt="" />
                <p>Página não <br/> encontrada!</p>
            </section>
            </>
        );
    }
}
 
export default Home404;