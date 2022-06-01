import React from 'react';
import { MapsPoint } from '~/components/MapsPoint';
import styles from './styles.module.css';

export default function Card({
    name,
    description,
    color
}

){
    return (
        <>
            <div className={styles.cardWrapper}>
                <MapsPoint className={styles.point}/>
                <div className={styles.card}>
                    <div style={{backgroundColor: color}} className={styles.borderColor}></div>  
                    <div className={styles.textWrapper}>
                        <h3 style={{color: color}}>{name}</h3>
                        <p>{description}</p>
                    </div>         
                </div>
            </div>
        </>
    )
}