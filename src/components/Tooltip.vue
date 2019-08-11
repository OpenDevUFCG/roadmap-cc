<template>
  <div
    v-if="isActive"
    :class="classObj"
    :style="{ top: node.y + 'px', left: node.x + 3 + 'px'}"
  >
    <p>{{ node.nome | addSigla(node.sigla) }}</p>
    <p v-if="node.areas !== ''">Trilha: {{ node.areas }}</p>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    node: {
      type: Object,
      default: null,
    },
  },
  computed: {
    isActive() {
      return this.node !== null;
    },
    classObj() {
      return {
        tooltip: true,
        active: this.isActive,
      };
    },
  },
  filters: {
    addSigla(nome, sigla) {
      return sigla !== '' ? `${nome} - ${sigla}` : nome;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Blinker&display=swap');

.tooltip {
  position: absolute;
  text-align: center;
  width: auto;
  height: auto;
  padding: 5px 20px;
  font: 12px sans-serif;
  font-family: 'Blinker', sans-serif;
  background: rgb(80, 122, 177);
  border: 0px;
  border-radius: 8px;
  pointer-events: none;
  visibility: hidden;
  -webkit-transition: opacity 1s; /* For Safari 3.1 to 6.0 */
  transition: opacity 1s;
  transition-timing-function: ease-out;
  opacity: 0;
}
.active {
  background: orange;
  opacity: 1;
  visibility: visible;
}
</style>
