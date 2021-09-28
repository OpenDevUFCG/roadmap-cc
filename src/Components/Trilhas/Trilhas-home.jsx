import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import data from './data'
import Card from './Card'
import * as FontAwesome from 'react-icons/fa'

const icons = FontAwesome

class Trilhas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title, 
            subtitle:  this.props.text,  
        }
    }
    render() { 
        return (
            <>
                <section id="trails">
                    <h2 className="trails__title">{this.props.title}</h2>
                    <p className="trails__subtitle">{this.props.subtitle}</p>
                    <div className="trails__card__wrapper">
                        {data.map(trilha => (
                            <Link to={trilha.url} style={{ color: 'black' }}>
                            <Card key={trilha.name}
                                
                                name={trilha.name}
                                description={trilha.description}
                                color={trilha.color}
                                
                            />
                            </Link>
                        ))}
                    </div>

                </section>
            </>
        )
    }
}
 
export default Trilhas;