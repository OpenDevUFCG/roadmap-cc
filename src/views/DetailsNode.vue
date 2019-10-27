<template>
  <div class="grid">
    <router-link to="/">voltar </router-link>
    <h1>{{ node.nome }}</h1>
    <svg>
      <circle r="10" fill="black" transform="translate(150,150)" />
    </svg>
    <div>
      <p>Créditos: {{ node.creditos }}</p>
      <p>Quantidade de Vagas: {{ node.quantidade_vagas }}</p>
      <p>Sigla: {{ node.sigla }}</p>
      <p>Categoria: {{ node.categoria }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsNode',
  data() {
    return {
      node: this.$route.params,
    };
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  width: 80vw;
  height: 100vh;
  margin: auto;
  * {
    display: inline-grid;
    place-content: center;
  }
}
svg {
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}
</style>
