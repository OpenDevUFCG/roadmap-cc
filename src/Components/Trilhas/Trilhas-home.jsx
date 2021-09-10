import React, { Component } from 'react';
import data from './data'
import Card from './Card'

class Trilhas extends React.Component {
    render() { 
        return (
            <>
                <section id="trails">
                    <h2 className="trails__title">Trilhas</h2>
                    <p className="trails__subtitle">Confira as trilhas de estudo que o curso pode oferecer.</p>
                    <div className="trails__card__wrapper">
                        {data.map(trilha => (
                            <Card key={trilha.name}
                                name={trilha.name}
                                description={trilha.description}
                                color={trilha.color}
                            />
                        ))}
                    </div>
                </section>
            </>
        )
    }
}
 
export default Trilhas;