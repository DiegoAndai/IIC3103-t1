<template>
  <form
    id="search-bar"
    @submit="searchTerm"
    class="flex w-2/5 my-4 py-2 px-4 rounded shadow-md bg-white"
  >
    <input v-model="term" placeholder="Enter term" class="flex-grow font-thin focus:outline-none">
    <button
      type="submit"
      :class="term === '' ? 'text-gray-500': 'text-blue-600'"
      :disabled="term === ''"
    >
      Search
    </button>
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