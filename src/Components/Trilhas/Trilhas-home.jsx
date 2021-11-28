import React, { Component } from 'react';
import {data} from './data'
import Card from './Card'
import { Link } from 'react-router-dom'

class Trilhas extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title, 
            subtitle: this.props.subtitle, 
        }
    }

    render() {
        return (
            <section id="trails">
                <h2 className="trails__title">{this.props.title}</h2>
                <p className="trails__subtitle">{this.props.subtitle}</p>
                <div className="trails__card__wrapper">
                    {data.map(trilha => (
                        <Link key={trilha.name} to={trilha.url} style={{ color: 'black' }}>
                            <Card 
                                name={trilha.name}
                                description={trilha.description}
                                color={trilha.color}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        )
    }
}

export default Trilhas;