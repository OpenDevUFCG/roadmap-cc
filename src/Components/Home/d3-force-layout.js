import * as d3 from 'd3'

class D3ForceGraph{

    constructor(graphData){
        this.width = 600
        this.height = 700


        this.svg = null
        this.nodes = null
        this.links = null
        this.simulation = null

        this._initSvg()
        this._initSimulation()
        this._addData(graphData)
    }

    _initSvg(){
        this.svg = d3.select("#graph_container")
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
    }

    _initSimulation(){
        this.simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(50).strength(0.3))
            .force("charge", d3.forceManyBody().strength(-50))
            .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    }

    _addData(graphData){

        this.links = this.svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graphData.links)
            .enter().append("line")
            .attr("stroke-width", function(d) { return 1.5 })
            .attr("stroke", "#999");

        this.nodes = this.svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(graphData.nodes)
            .enter().append("circle")
            .attr("r", 13)
            .attr("stroke-width", 1.5)
            .attr("fill", function(d) {
                let nodesColors = {"1": "#FFE4C4", "2":"#347953", "3":"#a6e8c8", "4":"#ff8b52", "5":"#94ff75", "6":"#f9eb39", "7":"#95C623"}
                let group = d.group.toString()
                let nodeColor = nodesColors[group]
                
                return nodeColor
             })
            .call(this._drag());

        this.nodes.append("title")
            .text(function(d) { return d.id; });

        this.simulation
            .nodes(graphData.nodes)
            .on("tick", () => {
                this.links
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });
        
                this.nodes
                    .attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; });
            });

        this.simulation.force("link")
            .links(graphData.links);

    }

    _drag(){
        let _dragstarted = (event) => {
            console.log(this.simulation)
            if (!event.active) this.simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }
    
        let _dragged = (event) => {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }
    
        let _dragended = (event) => {
            if (!event.active) this.simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag()
            .on("start", _dragstarted)
            .on("drag", _dragged)
            .on("end", _dragended);
    }
}

export default D3ForceGraph;

