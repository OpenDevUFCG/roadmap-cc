<template>
  <g v-if="edge.source.x != undefined">
    <path
      id="link"
      :d="
        `M ${edge.source.x}, ${edge.source.y} L ${edge.target.x}, ${
          edge.target.y
        }`
      "
    />
  </g>
</template>

<script>
export default {
  name: 'Link',
  props: {
    edge: {
      type: Object
    }
  }
}
</script>
<style>
#link {
  fill: none;
  stroke: #000000;
  stroke-width: 1px;
}
</style>
