<template>
  <router-link :to="`/character/${character.id}`" v-if="character">
    *{{ character.name }}
  </router-link>
</template>

<script>
export default {
  props: {
    characterUrl: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      character: null,
    };
  },
  methods: {
    fetchCharacter() {
      this.$store.dispatch('getCharacter', this.characterUrl)
        .then(() => {
          this.character = this.$store.state.characters.characters[this.characterUrl];
        });
    },
  },
  mounted() {
    this.character = this.$store.state.characters.characters[this.characterUrl];
    if (this.character === undefined) {
      this.fetchCharacter();
    }
  },
};
</script>

<style>
</style>
