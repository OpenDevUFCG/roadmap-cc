import * as d3 from 'd3'

class GraphD3{
  
    constructor(){
        this.margin = {top: 20, right: 90, bottom: 30, left: 30}
        this.width = 960 - this.margin.left - this.margin.right
        this.height = 500 - this.margin.top - this.margin.bottom
        this.rectNodeSize = { 'width' : 120, 'height' : 45, 'textMargin' : 5 }
        this.i = 0
        const ANIMATIONDURATION = 750

        this.treeFunction = this._setTreeFuncion()

        this.svg = null;
        this.treeRootNode = null;    
        this.treeNodes = null;
        this.treeLinks = null;

        this._initSVG()
    }
  
    _initSVG(){
        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        this.svg = d3.select("#tree-container").append("svg")
            .attr("width", this.width + this.margin.right + this.margin.left)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate("
                + this.margin.left + "," + this.margin.top + ")"); // margem no elemento g
    }
  
    _setTreeFuncion(){
        let treeFunction = d3.tree().size([this.height, this.width])
        return treeFunction
    }
  
    initTree(treeData){
        this.treeRootNode = d3.hierarchy(treeData, function(d) { return d.children; });
        this.treeRootNode.x0 = this.height / 2; // posição do nó inicial
        this.treeRootNode.y0 = 0;
        return this.treeRootNode
    }
  
    collapseTree(treeData) {
        treeData.forEach((d) => {
            if(d.children) {
            d._children = d.children
            d._children.forEach(this.collapseTree)
            d.children = null
            }
        })
    }
  
    setTreeData(source){
        this._treeConfig()
        this.addNodes(source)
        this.addArcs(source)
    }
  
    _treeConfig(){
        let treeData = this.treeFunction(this.treeRootNode) // retorna os dados da árvore
    
        // Compute the new tree layout.
        this.treeNodes = treeData.descendants()
        this.treeLinks = treeData.descendants().slice(1) // array de nó do nível 1

        let rectNodeSize = this.rectNodeSize
        // Normalize for fixed-depth.
        this.treeNodes.forEach(function(d){ d.y = d.depth * (rectNodeSize.width * 1.5)}); // 180 é a distancia entre os níveis da árvore
    
    }
 
    addArcs(source){
        // Update the links...
        let links = this.svg.selectAll('path.link')
            .data(this.treeLinks, function(d) { return d.id})

        // Enter any new links at the parent's previous position.
        let linkEnter = links.enter().insert('path', "g") // insert elmento path dentro de g
            .attr("class", "link")
            .attr('stroke', "black")
            .attr('fill', 'none')
            .attr('d', function(d){
            let o = {x: source.x0, y: source.y0}
            return diagonal(o, o)
            });
            // d é o caminho do arco, do nó 0 para o nó 0 - zera posição

        // UPDATE
        let linkUpdate = linkEnter.merge(links);

        // Transition back to the parent element position
        linkUpdate.transition()
            .duration(this.ANIMATIONDURATION)
            .attr('d', function(d){ let dd = diagonal(d, d.parent); return dd });

        // Remove any exiting links
        let linkExit = links.exit().transition()
            .duration(this.ANIMATIONDURATION)
            .attr('d', function(d) {
            let o = {x: source.x, y: source.y}
            return diagonal(o, o)
            })
            .remove();
        
        
        // Store the old positions for transition.
        this.treeNodes.forEach(function(d){
            d.x0 = d.x;
            d.y0 = d.y;
        });

        // Creates a curved (diagonal) path from parent to the child nodes
        function diagonal(s, d) {
            let rectNodeSize = { 'width' : 120, 'height' : 45, 'textMargin' : 5 }
            let sp = [s.y,  (s.x + (rectNodeSize.height / 2))]
            let dp = [d.y + (rectNodeSize.width) ,  d.x + (rectNodeSize.height / 2)]
            let a1 = [((sp[0] + dp[0])/ 2) , sp[1]]
            let a2 = [((sp[0] + dp[0])/ 2) , dp[1]]
            let path = 'M ' + sp + ' C ' + a1 + ' '+ a2 + ' ' + dp // d="M 0 255 L 180 125"
            return path
        }
    
    }
    
    addNodes(source){
        let nodes = this.svg.selectAll('g.node')
            .data(this.treeNodes, function(d) {return d.id || (d.id = ++this.i) })
          // . data faz um bind entre o que retorna em  svg.selectAll('g.node') e o que tá em "treeNodes" e retorna todos os nós
    
        // Enter any new modes at the parent's previous position.
        let nodeEnter = nodes.enter().append('g')
            .attr('class', 'node')
            .attr("transform", function(d) {
              return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', (d) => {this.click(d)} );
        // enter só retorna os novos nós e neles são aplicadas essas propriedades
    
        // Add rect for the nodes
        nodeEnter.append('rect')
          .attr('rx', 6)
          .attr('ry', 6) // r é da borda
          .attr('width', this.rectNodeSize.width)
          .attr('height', this.rectNodeSize.height)
          .attr('fill', function (d) {return 'blue' })
    
    
        // Add labels for the nodes
        nodeEnter.append('text')
          .attr("dy", ".35em")
          .attr('y', this.rectNodeSize.height / 2)
          .attr('x', (d) => { let xp = (this.rectNodeSize.width / 2) - 30; return xp})
          .attr("text-anchor", function(d) {
            return "start" 
          })
          .text(function(d) { return d.data.name; });
        
    
        // merge
        let allNodesSet = nodeEnter.merge(nodes); // junta todos os nós com os novos nós
    
        // Transition to the proper position for the node - animação de expansão dos nós
        allNodesSet.transition()
          .duration(this.ANIMATIONDURATION)
          .attr("transform", function(d) { 
              return "translate(" + d.y + "," + d.x + ")";
          });
    
    
        // Remove any exiting nodes
        let nodeExit = nodes.exit().transition()
          .duration(this.ANIMATIONDURATION)
          .attr("transform", function(d) {
              return "translate(" + source.y + "," + source.x + ")";
          })
          .remove();
    
        // On exit reduce the opacity of text labels
        nodeExit.select('text')
          .style('fill-opacity', 1e-6);
    
    }

    
    click(d) {

        if (d.children) {
            d._children = d.children;
            d.children = null;
        }
        else {
            d.children = d._children;
            d._children = null;
        }
        this.setTreeData.bind(this);
        this.setTreeData(d)
    }
}

export default GraphD3
  