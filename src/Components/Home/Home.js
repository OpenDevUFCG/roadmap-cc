import React from 'react';
import Navbar from '../Navbar'
import data from '../Pt-Br'
import D3ForceGraph from "./d3-force-layout"
import graphData from './miserables'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title, 
            subtitle: this.props.subtitle, 
            text: this.props.miniText,
            textBtn: this.props.btnText
        }
    }
    
    render() { 
        return (
            <>  
            <Navbar
                navLink1={data.navLink1}
                navLink2={data.navLink2}
                navLink3={data.navLink3}
            />
            <section className="home">

                <div className="home_container">
                    <h1 id="home__title">{this.props.title}</h1>
                    <p id="home__subtitle">{this.props.subtitle}</p>
                    <div className="home__button__wrapper">
                        <button id="home__button">{this.props.btnText}</button>
                        <p>{this.props.miniText}</p>
                    </div>
                </div>

                <div className="grafo_container" id="graph_container">
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
