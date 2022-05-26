import React from 'react';

import GraphD3v2 from "~/d3-graph2"
import dataAPI from "~/dataAPI"


class TrilhaDados extends React.Component {

    constructor(props) {
        super(props);
        
        this.treeGraph= null;
        this.state = { isToggleOn: true };

        // a configuração do layout do grafo de cada trilha é única
        // pois cada trilha possui um desenho único
        // para desenvolver uma nova trilha basta experimentar o melhor valor para os dados abaixo
        this.graphLayoutConfig = {
            "levelRadius": 0,
            "forceCollide": 70,
            "forceX": 0.09
        }

    }

    render() { 
        return (
            <>
                <section id="dados">
                    <div id="tree-container"></div>
                    <div id="tooltip-container"></div>
                </section>
            </> 
            
        )
    }

    componentDidMount() {
        //this.treeGraph  = new d3Classe()
        this.aa = new GraphD3v2(dataAPI.ciencDadosData, this.graphLayoutConfig)
    }
}

export default TrilhaDados;
