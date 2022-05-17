import * as d3 from 'd3'


class GraphD3v2{
    constructor(graphData, layoutConfig){
        this.layoutConfig = layoutConfig
        this.levelRadius = this.layoutConfig['levelRadius'] || 115
        this.forceCollide = this.layoutConfig['forceCollide'] || 60
        this.size = 1000
        this.margin = 50
        this.rectWidht = 100
        this.rectHeight = 50

        this.nodes = null
        this.links = null

        this._setNodesLevel = this._setNodesLevel.bind(this)
        this._initLinks = this._initLinks.bind(this)

        this.data = graphData

        this._initSVG()
        this._setNodesLevel()
        this.initNodes()
        this._initLinks()

        this._initSimulation()
        

        this.drawNodes()
        this.drawLinks()

    }

    _initSVG(){
        this.svg = d3
        .select("#tree-container")
        .append("svg")
        .attr("width", this.size + 2 * this.margin)
        .attr("height", this.size + 2 * this.margin)
        .append("g")
        //.attr("transform", "translate(" + [this.margin, this.margin] + ")")
        .attr("transform", "translate(" + [this.margin, this.margin + this.size] + ") rotate(-90)")  // rotate todo o grafo em -90°

        //define o formato da seta dos arcos
        this.svg.append('defs')
            .append('marker')
            .attr('id', 'start-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 0)
            .attr('refY', 0)
            .attr('stroke', 'gray')
            .attr('fill', 'gray')
            .attr('markerWidth', 12)
            .attr('markerHeight', 12)
            .attr('orient', 'auto')
            .attr('class', 'arrow')
            .append('path')
            .attr('d', 'M 0 -5 L 10 0 L 0 5');
            

    }

    _initSimulation(){
        this.simulation = d3.forceSimulation(this.nodes)
        .force("link", d3.forceLink(this.links).id(d => d.id))
        .force("collide", d3.forceCollide(this.forceCollide))
        .force("x", d3.forceX()
            .x((d) =>
                this.size / 2
            )
            .strength(this.layoutConfig['forceX'] || 0.2)
        )
        .force("y", d3.forceY()
            .y((d) =>
                d.dy
            )
            .strength(5)
        );
        // Run the simulation once, even before rendering anything
        this.simulation.tick(100)
        
    }

    _setNodesLevel(){
        this.data.forEach((d, i) => {
            
            d.level = d.parents.length ?
              this.data.find(function(p) {
                return p.child === d.parents[0]
              }).level + 1 : 0
          
            // Desired y level, otherwise try for sensible defaults
            d.dy = d.y = d.level * this.levelRadius * 2
            d.x = this.size / 2 - i * this.levelRadius
        })
    }

    initNodes(){
        this.nodes = this.data
    }

    _initLinks(){
        this.links = [];
        this.nodes.forEach((node) => {
            node.parents.forEach((parentId) => {
                let parentNode = this.nodes.find((d) => d.child === parentId)

                this.links.push({
                id: parentNode.child + " - " + node.child,
                source: parentNode,
                target: node,
                });
            });
        });
    }

    drawLinks(){
        let linkPath = d3.linkVertical()
                    .source((d) => {
                        return [d.source.x, d.source.dy + this.rectHeight];
                    })
                    .target( (d) => {
                        let xDistance = d.target.x - d.source.x
                        // Quando o nó está diretamente a frente do outro
                        // a posição X do filho deve ser exatamente a psição X do pai
                        // a linha abaixo define que se o nó filho está alinhado com o nó pai, então o alinhamento deve ser exato
                        // o valor 10 é completamente experimental
                        let nodePosition = (xDistance >  0 && xDistance <=  10) ? [d.source.x, d.target.dy - (this.rectWidht / 1.4)] : [d.target.x, d.target.dy - (this.rectWidht / 1.4)]
                        return nodePosition;
                    });

        let link = this.svg.append("g").selectAll("path")
        .data(this.links)
        .enter()
        .append("path")
        .attr('marker-end', `url(#start-arrow)`)
        .attr('stroke', "gray")
        .attr('fill', 'none')
        .attr("d", linkPath);
    }

    drawNodes(){

        this.tooltip = d3.select("#tree-container")
        .append("div")
        .style("position", "absolute")
        .style("background-color", "white")
        .style("z-index", 1000000)
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")

        let node = this.svg
        .selectAll(".node")
        .data(this.nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => {
            // Use d.dy to snap the node to the level that we want it at
            return "translate(" + [d.x + (this.rectHeight / 2), d.dy - this.rectHeight] + ") rotate(90)";
        })
        .on("mouseover", (event, d) => {return this.showToolTip(event, d)})
        .on("mouseout", () => {return this.tooltip.style("visibility", "hidden");});
        
        node.append("rect")
        .attr('fill', function (d) {return 'cyan' })
        .attr('rx', 6)
        .attr('ry', 6) // r é da borda
        .attr('width', this.rectWidht) // 60
        .attr('height', this.rectHeight) // 30
        
        node.append("text")
        //.attr("dominant-baseline", "middle")
        .attr("dy", "0em")
        .attr("transform", (d) => "translate(" + [4,  20] +")")
        .text(function(d) {
            return d.child;
        });
    }

    showToolTip(event, d){
        this.tooltip
        .style("visibility", "visible")
        .style("top", (event.pageY)+"px")
        .style("left",(event.pageX + 10)+"px")
        .html(
            "<p>"+`${d.nome}`+"</p> <br>" +
            "<p>"+`${d.categoria}`+"</p>" +
            "<p>"+`Período: ${d.periodo}`+"</p>" +
            "<p>"+`<a href="${d.dica}">Dica</a>`+"</p>")
        
        return this.tooltip
    }
}

export default GraphD3v2;