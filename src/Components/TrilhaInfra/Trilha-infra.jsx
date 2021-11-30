import React from 'react';

import d3Classe from "./d3-graph"


class TrilhaInfra extends React.Component {

    constructor(props) {
        super(props);
        
        this.treeGraph= null;
        this.state = { isToggleOn: true };

        this.grafo1 = this.grafo1.bind(this);
        this.grafo2 = this.grafo2.bind(this);

    }

    render() { 
        return (
            <>
                <section id="infra">
                    <div id="tree-container"></div>
                    <button onClick={() => this.grafo1()} name="button">Grafo 1</button>
                    <br></br>
                    <hr></hr>
                    <button onClick={() => this.grafo2()} name="button">Grafo 2</button>
                </section>
            </> 
            
        )
    }

    grafo1(){
        let treeData1 =
            {
                "name": "Top Level",
                "lvl":0,
                "children": [
                    { 
                        "name": "Level 2: A",
                        "children": [
                        { "name": "Son of A" },
                        { "name": "Daughter of A" }
                        ]
                    },
                    { "name": "Level 2: B" }
                ]
            };
        let treeRootNode = this.treeGraph.initTree(treeData1)
        this.treeGraph.setTreeData(treeRootNode)
    }

    grafo2(){
        let treeData2 =
        {
            "name": "Outros dados",
            "lvl":0,
            "children": [
                { "name": "Level 2: B" },
                { 
                    "name": "Level 2: A",
                    "children": [
                    { "name": "Son of A" },
                    { "name": "Daughter of A" }
                    ]
                }
            ]
        };
        let treeRootNode2 = this.treeGraph.initTree(treeData2)
        this.treeGraph.setTreeData(treeRootNode2)
    }

    componentDidMount() {
        this.treeGraph  = new d3Classe()
    }
}

export default TrilhaInfra;
