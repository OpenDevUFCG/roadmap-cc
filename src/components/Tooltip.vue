<template>
  <div
    v-if="isActive"
    :class="classObj"
    :style="{ top: node.y + 'px', left: node.x + 50 + 'px'}"
  >
    <p>{{ node.nome | addSigla(node.sigla) }}</p>
    <p>Clique novamente para expandir</p>
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
  color: #bbb;
  position: absolute;
  text-align: center;
  width: auto;
  height: auto;
  padding: 5px 20px;
  font: 12px sans-serif;
  font-family: 'Blinker', sans-serif;
  text-shadow: 1px 1px 2px #111;
  background: rgba(51,51,51,0.9);
  border: 1px solid rgba(34,34,34,0.9);
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border-radius: 8px;
  pointer-events: none;
  visibility: hidden;
}

.active {
  opacity: 1;
  visibility: visible;
}

</style>
