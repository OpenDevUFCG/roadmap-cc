import React, { Component } from 'react';
import Navbar from '../Navbar'
import data from '../Pt-Br';


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title, 
            subtitle:  this.props.subtitle, 
            text:  this.props.miniText,
            textBtn:  this.props.btnText
        }
    }
    
    render() { 
        return (
            <>  
            <Navbar
                navLink1={data.navLink1}
                navLink2={data.navLink2}
                navLink3={data.navLink3}
            />
            <section className="home">
                <h1 id="home__title">{this.props.title}</h1>
                <p id="home__subtitle">{this.props.subtitle}</p>
                <div className="home__button__wrapper">
                <button id="home__button">{this.props.btnText}</button>
                <p>{this.props.miniText}</p>
                </div>
            </section>
           
        </>

        );
    }
}
 
export default Home;