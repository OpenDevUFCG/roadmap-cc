<template>
  <div class="graph">
    <svg :width="width" :height="height">
      <g></g>
    </svg>
  </div>
</template>

<script>
// import * as d3 from 'd3'

export default {
  name: 'GraphicVisualization',
  data() {
    return {
      width: 0,
      height: 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  methods: {
    onResize() {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
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
