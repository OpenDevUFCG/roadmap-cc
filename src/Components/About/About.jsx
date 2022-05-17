import React, { Component } from 'react';
import logo from '../../assets/logo/logo-roadmap-simple.svg'
import styles from './styles.module.css'

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
            <section id={styles.about}>
                <h2 className={styles.title}>{this.props.title}</h2>
                <p className={styles.text}>{this.props.text}</p>
                <img src={ logo } alt="" id={styles.logoRoadmap}/>
            </section>
            </>
        );
    }
}

export default About;
