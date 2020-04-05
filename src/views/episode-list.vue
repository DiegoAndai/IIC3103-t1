<template>
  <div id="episode-list">
    EpisodeList
    <template v-if="loadingEpisodes">
      Loading...
    </template>
    <template v-else>
      <div v-for="episode in episodes" :key="episode.id">
        <episode-row
          :episode-url="episode.url"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EpisodeRow from '../components/episode-row.vue';

export default {
  components: {
    EpisodeRow,
  },
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
