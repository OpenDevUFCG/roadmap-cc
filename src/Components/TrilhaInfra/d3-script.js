 
import * as d3 from 'd3'


let treeData =
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
    ],
    "name2":"top level 2",
    "children2":[ { "name": "Level 3: B" }]
  };


function initD3(){
    // Set the dimensions and margins of the diagram
  let margin = {top: 20, right: 90, bottom: 30, left: 30},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin


  let svg = d3.select("#tree-container").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate("
        + margin.left + "," + margin.top + ")"); // margem no elemento g 

  let i = 0
  var treeRoot;

  const TIMEDURATION = 750


  // declares a tree layout and assigns the size
  let treemap = d3.tree().size([height, width]); // declara a ávore

  // Assigns parent, children, height, depth
  treeRoot = d3.hierarchy(treeData, function(d) { return d.children; }); // retorna o nó raiz da árvore e monta a árvore com os dados
  treeRoot.x0 = height / 2; // posição do nó inicial
  treeRoot.y0 = 0;

  // Collapse after the second level
  treeRoot.children.forEach(collapse); // inicia colapsado a partir do 2 nível

  // Collapse the node and all it's children
  function collapse(d) {
    if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
    }
  }

  update(treeRoot);

  function update(source) {

    // Assigns the x and y position for the nodes
    let treeData = treemap(treeRoot); // retorna os dados da árvore

    // Compute the new tree layout.
    let treeNodes = treeData.descendants(),
        treeLinks = treeData.descendants().slice(1); // array de nó do nível 1
    
    let rectNodeSize = { width : 120, height : 45, textMargin : 5 }

    // Normalize for fixed-depth.
    treeNodes.forEach(function(d){ d.y = d.depth * (rectNodeSize.width * 1.5)}); // 180 é a distancia entre os níveis da árvore


    // ****************** Nodes section ***************************

    // Update the nodes...
    let nodes = svg.selectAll('g.node')
        .data(treeNodes, function(d) {return d.id || (d.id = ++i); }); // ele nomeou node errado, era pra ser new+oldnodes
      // . data tá fazendo um bind entre o que retorna em  svg.selectAll('g.node') e o que tá em "nodes" e retorna todos os nós
    
    
    // Enter any new modes at the parent's previous position.
    let nodeEnter = nodes.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function(d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on('click', click);
    // enter só retorna os novos nós e neles são aplicadas essas propriedades


    // Add rect for the nodes
    nodeEnter.append('rect')
      .attr('dy', 10)
      .attr('dx', 10)
      .attr('rx', 6)
      .attr('ry', 6) // r é da borda
      .attr('x', (d) => { let xp = (d.data.lvl != undefined) ? 0: 0; return xp})
      .attr('width', rectNodeSize.width)
      .attr('height', rectNodeSize.height)
      .attr('fill', function (d) {return 'blue' })


    // Add labels for the nodes
    nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr('y', rectNodeSize.height / 2)
      .attr('x', (d) => { let xp = (d.data.lvl != undefined) ? (rectNodeSize.width / 2) - 30: (rectNodeSize.width / 2) - 30; return xp})
      .attr("text-anchor", function(d) {
        return "start" //d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; });

    // UPDATE
    let allNodesSet = nodeEnter.merge(nodes); // junta todos os nós com os novos nós

    // Transition to the proper position for the node - animação de expansão dos nós
    allNodesSet.transition()
      .duration(TIMEDURATION)
      .attr("transform", function(d) { 
          return "translate(" + d.y + "," + d.x + ")";
      });


    // Remove any exiting nodes
    let nodeExit = nodes.exit().transition()
      .duration(TIMEDURATION)
      .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();


    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);



    // ****************** links section ***************************

    // Update the links...
    let links = svg.selectAll('path.link')
      .data(treeLinks, function(d) { return d.id; });

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
      .duration(TIMEDURATION)
      .attr('d', function(d){ let dd = diagonal(d, d.parent); return dd });

    // Remove any exiting links
    let linkExit = links.exit().transition()
      .duration(TIMEDURATION)
      .attr('d', function(d) {
        let o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      .remove();
    
    
    // Store the old positions for transition.
    treeNodes.forEach(function(d){
      d.x0 = d.x;
      d.y0 = d.y;
    });


    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {
        let sp = [s.y,  (s.x + (rectNodeSize.height / 2))]
        let dp = [d.y + (rectNodeSize.width) ,  d.x + (rectNodeSize.height / 2)]
        let a1 = [((sp[0] + dp[0])/ 2) , sp[1]]
        let a2 = [((sp[0] + dp[0])/ 2) , dp[1]]
        let path = 'M ' + sp + ' C ' + a1 + ' '+ a2 + ' ' + dp // d="M 0 255 L 180 125"

        return path
    }

    // Toggle children on click.
    function click(event, d) {
      if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
      update(d);
    }

  }
}

// colocar esquema de funções/classe e exportar a função init

export default {initD3}

