<template>
  <g
    v-if="node.x !== undefined"
    :transform="`translate(${node.x} , ${node.y})`"
  >
    <circle :r="medianQuantidadeVagas" :fill="color(node.areas)"></circle>
    <text
      text-anchor="middle"
      font-family="Verdana"
      alignment-baseline="central"
      font-size="10"
    >
      {{ node.sigla }}
    </text>
  </g>
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
    },
    color: {
      type: Function,
      default() {
        return undefined
      }
    }
  },
  computed: {
    medianQuantidadeVagas() {
      return (
        this.median(
          this.node.quantidade_vagas
            .split(',')
            .filter(element => element !== '-')
            .map(element => parseInt(element))
        ) *
          0.07 +
        3
      )
    }
  },
  methods: {
    median(values) {
      if (values.length === 0) return 0

      values.sort((a, b) => {
        return a - b
      })

      const half = Math.floor(values.length / 2)

      if (values.length % 2) return values[half]

      return (values[half - 1] + values[half]) / 2.0
    }
  }
}
</script>
