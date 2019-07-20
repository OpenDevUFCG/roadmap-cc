<template>
  <circle r="3" fill="red"></circle>
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
