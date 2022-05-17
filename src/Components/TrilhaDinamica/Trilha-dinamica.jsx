import React, { useState } from 'react';
import { useParams } from 'react-router';
import { data } from '../Trilhas/data';
import Navbar from '../Navbar';
import styles from './styles.module.css'

export const TrilhaDinamica = () => {

    const { rota } = useParams();

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                {data.map(trilha =>
                    trilha.url === rota && (
                        <div key={trilha.url} className={styles.content}>

                            <h1 className={styles.title}>{trilha.name}</h1><br />
                            <p className={styles.text}>{trilha.text}</p>

                        </div>
                    ))}
            </div>
        </>
    );
}