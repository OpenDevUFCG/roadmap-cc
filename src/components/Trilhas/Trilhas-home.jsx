import React, { Component } from 'react';
import {data} from './data'
import Card from '../Card/Card'
import Link from 'next/link';
import styles from './styles.module.css'

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
            <section id={styles.trails}>
                <h2 className={styles.title}>{this.props.title}</h2>
                <p className={styles.subtitle}>{this.props.subtitle}</p>
                <div className={styles.cardsWrapper}>
                    {data.map(trilha => (
                        <Link key={trilha.name} href={trilha.url}>
                            <a>
                                <Card 
                                    name={trilha.name}
                                    description={trilha.description}
                                    color={trilha.color}
                                    />
                            </a>
                        </Link>
                    ))}
                </div>
            </section>
        )
    }
}

export default Trilhas;