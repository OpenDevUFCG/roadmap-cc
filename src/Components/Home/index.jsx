import React, { Component } from 'react';
import Navbar from '../Navbar/index'

class Home extends Component {
    render() { 
        return (  
            <>
            <Navbar></Navbar>
            <section className="home">
                <h1 id="home__title">Praesent non porttitor <br/> odio nisl imperdiet.</h1>
                <p id="home__subtitle">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nulla pellentesque enim quis <br/> nisl imperdiet cursus. </p>
                <div className="home__button__wrapper">
                <button id="home__button">Get Started</button>
                <p> PHASELLUS LECTUS <br/> PURUS, CONGUE.</p>
                </div>
            </section>

            </>
        );
    }
}
 
export default Home;