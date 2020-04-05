<template>
  <div @key="`character-${this.$route.params.id}`">
    <template v-if="character">
      {{ character }}
    </template>
    <template v-else>
      Loading...
    </template>
  </div>
</template>

<script>
import { formResourceUrl } from '../api';

export default {
  data() {
    return {
      character: null,
    };
  },
  computed: {
    resourceUrl() { return formResourceUrl('character', this.$route.params.id); },
  },
  methods: {
    fetchCharacter() {
      this.$store.dispatch('getCharacter', this.resourceUrl)
        .then(() => {
          this.character = this.$store.state.characters.characters[this.resourceUrl];
        });
    },
  },
  mounted() {
    this.fetchCharacter();
  },
};
</script>

<style>
</style>
