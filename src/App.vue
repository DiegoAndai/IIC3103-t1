<template>
  <div id="app" class="flex flex-col min-h-screen items-center font-thin bg-gray-100 text-gray-900">
    <img src="./assets/rick_and_morty_logo.png" class="w-64"/>
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
