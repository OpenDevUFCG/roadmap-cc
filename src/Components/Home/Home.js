import React from 'react';
import styles from './styles.module.css'
import Navbar from '../Navbar'
import miniLogo from '../../assets/img/miniGraph.svg'
import {dataHome} from '../Pt-Br'
import {Vega} from 'react-vega'
import myData from './vis-home.json'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title, 
            subtitle: this.props.subtitle, 
            textBtn: this.props.btnText
        }
    }
    render() { 
        return (
            <>  
            <section className={styles.home}>

                <div className={styles.container}>
                    <h1 className={styles.title}>{this.props.title}</h1>
                    <p className={styles.subtitle}>{this.props.subtitle}</p>
                </div>
                <div className={styles.webGraphWrapper}>
                    <Vega spec={myData} id={styles.graphWeb}/> 
                </div>
            </section>     
        </>
        );
    }
}
export default Home;