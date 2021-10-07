import React, { Component } from 'react';
import data from './data'
import Card from './Card'
import {Link} from 'react-router-dom'

class Trilhas extends React.Component {
    render() { 
        return (
            <>
                <section id="trails">
                    <h2 className="trails__title">Trilhas</h2>
                    <p className="trails__subtitle">Confira as trilhas de estudo que o curso pode oferecer.</p>
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