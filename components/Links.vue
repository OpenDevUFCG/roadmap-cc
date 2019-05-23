<template>
  <g>
    <path
      id="link"
      :d="`M ${source.x}, ${source.y} L ${target.x}, ${target.y}`"
    />
  </g>
</template>

<script>
export default {
  name: 'Link',
  props: {
    target: {
      type: Object
    },
    source: {
      type: Object
    },
    id: {
      type: String
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
