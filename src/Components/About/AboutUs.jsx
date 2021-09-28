import React, { Component } from 'react';
import logo from '../../assets/logos/roadmap-cc.svg'

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
                <h2 className="title__about">{this.props.title}</h2>
                <p className="text__about">{this.props.text}</p>
                <img src={ logo } alt="" id="logo__roadmap"/>
            </section>
            </>
        );
    }
}
 
export default About;