<template>
  <div class='graph'>
    <svg v-if='nodes.length != 0' :viewBox='`0 0 ${width} ${height}`'>
    </svg>
    <tooltip :node="nodeActive" />
  </div>
</template>

<script>
/* eslint-disable */
import * as d3 from 'd3';
import medianQuantidadeVagas from '../utils/math.js'
import Tooltip from './Tooltip.vue';

export default {
  name: 'GraphicVisualization',
  components: {
    Tooltip,
  },
  data() {
    return {
      width: 0,
      height: 0,
      nodes: [],
      edges: [],
      nodeActive: null
    };
  },
  computed: {
    areas() {
      return [...new Set(this.nodes.map(e => e.areas))]
    },
    drag() {
      const { simulation } = this;
      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
      return d3
        .drag()
        .on('start', dragstarted)
        .on('end', dragended)
        .on('drag', dragged);
    },
    group() {
      return this.svg.append('g').attr('class', 'everything');
    },
    links() {
      return this.group
        .append('g')
        .attr('class', 'link')
        .selectAll('line')
        .data(this.edges)
        .enter()
        .append('line')
        .attr('stroke', '#AAA');
    },
    simulation() {
      return d3
        .forceSimulation(this.nodes)
        .force('link', d3.forceLink().id(d => d.codigo).links(this.edges))
        .force('charge', d3.forceManyBody().strength(-8))
        .force('collision', d3.forceCollide().radius(d => medianQuantidadeVagas(d) *2))
        .force(
          'x',
          d3.forceX(d => {
            if (d.areas === "") return this.width / 2
            return this.scaleX(this.areas.indexOf(d.areas))
          }
            ).strength(d => {
            if (d.areas === "") return 0.1
            if (d.periodo === '1' || d.periodo === '-') return 1
            return (parseInt(d.periodo) - 1) * -0.01
          })
        )
        .force(
          'y',
          d3
            .forceY(d => this.scaleY(d.periodo !== '-'? d.periodo: '10' ))
            .strength(0.3)
        )
    },
    scaleColor () {
      return d3.scaleOrdinal()
        .domain(this.areas)
        .range(d3.schemePastel1)
    },
    scaleX () {
      return d3.scaleLinear()
        .domain([0, this.areas.filter(e => e.areas !== "").length - 1])
        .range([this.width*0.15, this.width*1]);
    },
    scaleY () {
      return d3.scaleLinear()
        .domain([1, 10])
        .range([this.height*0.1, this.height*0.8]);
    },
    svg() {
      return d3.select('svg');
    },
    title() {
      return this.group
        .append('g')
        .attr('class', 'title')
        .selectAll('circle')
        .data(this.nodes)
        .enter()
        .append('g')
        .append('text')
        .attr('font-size', '8px')
        .attr('x', d => medianQuantidadeVagas(d) + 2)
        .text(d => d.sigla).call(this.drag);
    },
    vertex() {
      const vertex = this.group
        .append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(this.nodes)
        .enter()
        .append('g')
        .call(this.drag);
      const { tooltip } = this;
      vertex.append('circle')
        .attr('fill', d => this.scaleColor(d.areas))
        .attr('stroke', 'grey')
        .attr('stroke-width', 1.5)
        .attr('stroke-dasharray', d => d.categoria === "Obrigatório"? 0: 3)
        .attr('r', d => medianQuantidadeVagas(d))
        .on('mouseover', d => {
            this.nodeActive = d
          })		
        .on("mousemove", () => tooltip.style("top", (event.pageY)+"px").style("left",(event.pageX+10)+"px"))
        .on("mouseout", () => this.nodeActive = null);
        
      return vertex
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
    this.fetchData();
  },
  methods: {
    buildGraphic() {
      const { links, vertex, title, group } = this;
        
      this.simulation.on('tick', function(d){
          //position links
          links
            .attr("x1", d => d.source.x)
            .attr("x2", d => d.target.x)
            .attr("y1", d => d.source.y)
            .attr("y2", d => d.target.y)
        
          //position nodes
          vertex
            .attr("transform", d => `translate(${d.x} , ${d.y})`)
          title
            .attr("transform", d => `translate(${d.x} , ${d.y})`)
        });
    },
    onResize() {
      this.width = this.$el.offsetWidth;
      this.height = this.$el.offsetHeight;
    },
    getForceByLength(length) {
      return 1 - length / (length + 20);
    },
    color(area) {
      return d3.scaleOrdinal(d3.schemeSet3)(area)
    },
    setEdges(edges) {
      this.edges = edges.map(edge => ({
        source: parseInt(edge.cod_pre_requisito, 10),
        target: parseInt(edge.cod_disciplina, 10)
      }));
      this.simulation
        .nodes(this.nodes)
        .force('link')
        .links(this.edges);
    },
    setNodes(nodes) {
      this.nodes = nodes.map(node => ({
        ...node,
        x: 0,
        y: 0,
        codigo: parseInt(node.codigo, 10)
      }));
    },
    ticked(link, node) {
      link
        .attr('x1', d => {
          d.source.x = Math.max(d.source.x, 0);
          return d.source.x;
        })
        .attr('y1', d => {
          d.source.y = Math.max(d.source.y, 0);
          return Math.max(d.source.y, 0);
        })
        .attr('x2', d => {
          d.target.x = Math.max(d.target.x, 0);
          return Math.max(d.target.x, 0);
        })
        .attr('y2', d => {
          d.target.y = Math.max(d.target.y, 0);
          return Math.max(d.target.y, 0);
        });

      node
        .attr('cx', d => {
          d.x = Math.max(d.x, 0);
          return Math.max(d.x, 0);
        })
        .attr('cy', d => {
          d.y = Math.max(d.y, 0);
          return Math.max(d.y, 0);
        });
    },
    async fetchData() {
      this.setNodes(await d3.csv('data/disciplinas-ppc-2017.csv'));
      this.setEdges(
        await d3.csv('data/relacionamentos-disciplinas-ppc2017.csv')
      );
      this.buildGraphic();
    },
    
  }
};
</script>
<style lang="scss" scoped>
.graph {
  width: 100vw;
  height: 100vh;
}

</style>
