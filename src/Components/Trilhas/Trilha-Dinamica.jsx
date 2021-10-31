import '../../Styles/Trilha-Dinamica.scss'

import React from 'react';
import { useParams } from 'react-router';
import { data } from './data';
import Navbar from '../Navbar';



export const TrilhaDinamica = () => {

    const { rota } = useParams();

    return (
        <div>

            <Navbar/>

            {data.map(trilha =>
                trilha.url === rota && (
                    <div key={trilha.url} className='cardTrilha'>

                        <h1>{trilha.name}</h1><br />
                        <h3>{trilha.description}</h3><br />
                        <p>{trilha.text}</p>

                    </div>
                ))}
        </div>
    );
}
