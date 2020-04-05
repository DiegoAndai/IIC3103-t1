<template>
  <div id="episode-list">
    EpisodeList
    <template v-if="loadingEpisodes">
      Loading...
    </template>
    <template v-else>
      {{ episodes }}
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      episodes: (state) => state.episodes.episodes,
      loadingEpisodes: (state) => state.episodes.loadingEpisodes,
    }),
  },
  methods: {
    fetchEpisodes() {
      this.$store.dispatch('getEpisodes');
    },
  },
  mounted() {
    this.fetchEpisodes();
  },
};
</script>

<style>
</style>
