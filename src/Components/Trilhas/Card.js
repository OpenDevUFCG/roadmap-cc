import React from 'react';
import {Link} from 'react-router-dom'

export default function Card({
    name,
    description,
    color,
    url
}

){
    return (
            <div className="trails__card">
                <div style={{backgroundColor: color}} id="border__color"></div>  
                <div className="card__text__wrapper">
                    <h3 style={{color: color}}>{name}</h3>
                    <p>{description}</p>
                </div>         
            </div>
    )
}