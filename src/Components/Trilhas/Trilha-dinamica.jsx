import React, { useState } from 'react';
import { useParams } from 'react-router';
import { data } from './data';
import Navbar from '../Navbar';
import Modal from '../Modal'



export const TrilhaDinamica = () => {

    const [show, setShow] = useState(false)

    const { rota } = useParams();

    return (
        <div className="container">

            <Navbar/>

            {data.map(trilha =>
                trilha.url === rota && (
                    <div key={trilha.url} className='cardTrilha'>

                        <h1>{trilha.name}</h1><br />
                        <p>{trilha.text}</p>

                    </div>
                ))}
            <button onClick={() => setShow(true)} className="button">Show Modal</button>
            <Modal onClose={() => setShow(false)} show={show}/>
            
        </div>
    );
}