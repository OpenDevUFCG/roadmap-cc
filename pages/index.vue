<template>
  <section class="container">
    <graphic-visualization />
  </section>
</template>
<script>
import GraphicVisualization from '@/components/GraphicVisualization.vue'
export default {
  components: {
    GraphicVisualization
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
