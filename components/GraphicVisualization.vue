<template>
  <div class="graph">
    <svg v-if="nodes.length != 0" :viewBox="`0 0 ${width} ${height}`">
      <Link v-for="edge in edges" :key="edge.index" :edge="edge" />
      <node
        v-for="node in nodes"
        :key="node.codigo"
        :node="node"
        :color="color(node.areas)"
      />
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import Node from '@/components/Node.vue'
import Link from '@/components/Link.vue'

export default {
  name: 'GraphicVisualization',
  components: {
    Node,
    Link
  },
  data() {
    return {
      width: 0,
      height: 0,
      nodes: [],
      edges: []
    }
  },
  computed: {
    simulation() {
      return d3
        .forceSimulation()
        .force(
          'link',
          d3.forceLink().id(d => {
            return d.codigo
          })
        )
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(this.width / 2, this.height / 2))
        .force(
          'x',
          d3.forceX(this.width / 2).strength(this.getForceByLength(this.width))
        )
        .force(
          'y',
          d3
            .forceY(this.height / 2)
            .strength(this.getForceByLength(this.height))
        )
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
    this.getSubjects()
  },
  methods: {
    onResize() {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
    },
    getForceByLength(length) {
      return 1 - length / (length + 80)
    },
    color() {
      return d3.scaleOrdinal(this.nodes.map(d => d.areas), d3.schemeCategory10)
    },
    setNodes(nodes) {
      this.nodes = nodes.map(node => {
        return {
          ...node,
          x: 0,
          y: 0,
          codigo: parseInt(node.codigo)
        }
      })
    },
    setEdges(edges) {
      this.edges = edges.map(edge => {
        return {
          source: parseInt(edge.cod_pre_requisito),
          target: parseInt(edge.cod_disciplina)
        }
      })
      this.simulation
        .nodes(this.nodes)
        .force('link')
        .links(this.edges)
    },
    ticked() {
      this.nodes.forEach(node => {
        node.x = Math.max(node.x, 0)
        node.y = Math.max(node.x, 0)
      })
    },
    async getSubjects() {
      await this.$axios
        .get('https://laguinho.opendevufcg.org/v1/disciplinas')
        .then(response => this.setNodes(response.data))
      await this.$axios
        .get('https://laguinho.opendevufcg.org/v1/disciplinas/relacionamentos')
        .then(response => this.setEdges(response.data))
    }
  }
}
</script>
<style scoped>
.graph {
  width: 100vw;
  height: 100vh;
}
</style>
