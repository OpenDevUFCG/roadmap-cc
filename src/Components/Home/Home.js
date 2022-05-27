import React from 'react';
import styles from './styles.module.css'
import Navbar from '~/components/Navbar'
import miniLogo from '~/assets/img/miniGraph.svg'
import data from '~/components/Pt-Br'
import D3ForceGraph from "./d3-force-layout"
import graphData from './miserables'

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
                    <button id={styles.button}>Começar</button>
                </div>
                <div className="grafo_container" id="graph_container">
                <div className="grafo__container">
                </div>
                </div>
            </section>
            
            
           
        </>
        );
    }

    componentDidMount() {
        this.ForceGraph = new D3ForceGraph(graphData.graphData) 
    }
}
 
export default Home;