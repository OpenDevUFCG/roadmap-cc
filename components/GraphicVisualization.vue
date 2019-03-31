<template>
  <div class="graph">
    <svg :width="width" :height="height" v-if="subjects.length != 0">
      <nodes
        v-for="subject in pack.children"
        :subject="subject"
        :color="color()"
        :key="subject.data.codigo"
      />
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import Nodes from '@/components/Nodes.vue'

export default {
  name: 'GraphicVisualization',
  components: {
    Nodes
  },
  data() {
    return {
      width: 0,
      height: 0,
      subjects: []
    }
  },
  computed: {
    pack() {
      return d3
        .pack()
        .size([this.width - 2, this.height - 2])
        .padding(1)(
        d3.hierarchy({ children: this.subjects }).sum(d => d.creditos)
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
    color() {
      return d3.scaleOrdinal(
        this.subjects.map(d => d.categoria),
        d3.schemeCategory10
      )
    },
    async getSubjects() {
      await this.$axios
        .get('https://laguinho.opendevufcg.org/v1/subjects')
        .then(response => (this.subjects = response.data))
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
