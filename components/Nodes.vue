<template>
  <g :transform="`translate(${subject.x} , ${subject.y})`">
    <circle :r="subject.r" :fill="color(subject.data.categoria)"></circle>
    <text text-anchor="middle" alignment-baseline="central">{{
      subject.data.sigla
    }}</text>
  </g>
</template>

<script>
export default {
  name: 'Nodes',
  props: {
    subject: {
      type: Object
    },
    color: {
      type: Function
    }
  }
}
</script>
