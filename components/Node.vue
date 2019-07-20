<template>
  <circle
    v-if="node.x !== undefined"
    r="3"
    fill="red"
    :cx="node.x"
    :cy="node.y"
  ></circle>
</template>

<script>
export default {
  name: 'Node',
  props: {
    node: {
      type: Object,
      default() {
        return undefined
      }
    }
  }
}
</script>
