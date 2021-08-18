import React, { Component } from 'react';
import logo from '../../assets/logo/logo-cc.svg'

class About extends Component {
    render() { 
        return (  
            <>
            <section id="about">
                <h2 className="title__about">Sobre nós</h2>
                <p className="text__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque enim quis nisl imperdiet cursus.</p>
                <img src={ logo } alt="" id="logo__roadmap"/>
            </section>
            </>
        );
    }
}
 
export default About;