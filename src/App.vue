<template>
  <div id="app">
    <search-bar/>
    <router-view/>
  </div>
</template>

<script>
import SearchBar from './components/search-bar';

export default {
  components: {
    SearchBar,
  }
}
</script>

<style>
</style>
