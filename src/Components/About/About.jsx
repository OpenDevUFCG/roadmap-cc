import React, { Component } from 'react';
import logo from '../../assets/logo/logo-roadmap-simple.svg'

class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title, 
            text:  this.props.text,      
        }
    }
    render() { 
        return (  
            <>
            <section id="about">
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
                <img src={ logo } alt=""/>
            </section>
            </>
        );
    }
}

export default About;
