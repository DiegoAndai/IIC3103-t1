<template>
  <div id="app" class="flex flex-col min-h-screen items-center font-thin bg-gray-100 text-gray-900">
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
