<template>
  <form id="search-bar" @submit="searchTerm">
    <input v-model="term" placeholder="search">
    <button type="submit">Buscar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      term: '',
    }
  },
  methods: {
    searchTerm() {
      this.$router.push(`/search?term=${this.term}`)
    }
  },
    watch: {
    $route(to) {
      this.term = to.query.term;
    }
  }
}
</script>

<style>
</style>