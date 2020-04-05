<template>
  <div @key="`episode-${this.$route.params.id}`">
    <template v-if="episode">
      {{ episode }}
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
      episode: null,
    };
  },
  computed: {
    resourceUrl() { return formResourceUrl('episode', this.$route.params.id); },
  },
  methods: {
    fetchEpisode() {
      this.$store.dispatch('getEpisode', this.resourceUrl)
        .then(() => {
          this.episode = this.$store.state.episodes.episodes[this.resourceUrl];
        });
    },
  },
  mounted() {
    this.fetchEpisode();
  },
};
</script>

<style>
</style>
