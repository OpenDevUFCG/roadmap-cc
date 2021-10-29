import React from 'react';


import d3Driver from "./d3-script"

class TrilhaInfra extends React.Component {
    render() { 
        return (
            <>
                <section id="infra">
                    <div id="tree-container"></div>
                </section>
            </> 
            
        )
    }
    componentDidMount() {
        d3Driver.initD3()
    }
}

 
export default TrilhaInfra;