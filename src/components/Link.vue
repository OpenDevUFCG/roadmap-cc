<template>
  <path
    v-if="edge.source.x != undefined"
    :d="path"
    fill="orange"
    stroke="black"
    stroke-width="1"
  />
</template>

<script>
export default {
  name: 'Link',
  props: {
    edge: {
      type: Object,
    },
  },
  computed: {
    path() {
      const { edge } = this;
      return `M ${edge.source.x} ${edge.source.y} L ${edge.target.x} ${
        edge.target.y
      }`;
    },
  },
};
</script>
<style>
#link {
  fill: none;
  stroke: #000000;
  stroke-width: 1px;
}
</style>
