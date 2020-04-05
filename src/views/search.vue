<template>
  <div id="search">
    <div v-if="searchingEpisodes">
      Searching episodes...
    </div>
    <div v-else>
      Found {{episodeSearchUrls.length}} episodes:
      <div v-for="url in episodeSearchUrls" :key="url">
        <episode-link
          :episode-url="url"
        />
      </div>
    </div>
    <div v-if="searchingCharacters">
      Searching characters...
    </div>
    <div v-else>
      Found {{characterSearchUrls.length}} characters:
      <div v-for="url in characterSearchUrls" :key="url">
        <character-link
          :character-url="url"
        />
      </div>
    </div>
    <div v-if="searchingLocations">
      Searching locations...
    </div>
    <div v-else>
      Found {{locationSearchUrls.length}} locations:
      <div v-for="url in locationSearchUrls" :key="url">
        <location-link
          :location-url="url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EpisodeLink from '../components/episode-link.vue';
import CharacterLink from '../components/character-link.vue';
import LocationLink from '../components/location-link.vue';

export default {
  components: {
    EpisodeLink,
    CharacterLink,
    LocationLink,
  },
  computed: {
    ...mapState({
      episodeSearchUrls: (state) => state.episodes.searchUrls,
      searchingEpisodes: (state) => state.episodes.searchingEpisodes,
      characterSearchUrls: (state) => state.characters.searchUrls,
      searchingCharacters: (state) => state.characters.searchingCharacters,
      locationSearchUrls: (state) => state.locations.searchUrls,
      searchingLocations: (state) => state.locations.searchingLocations,
    }),
  },
  methods: {
    search() {
      this.$store.dispatch('searchEpisodes', this.$route.query.term);
      this.$store.dispatch('searchCharacters', this.$route.query.term);
      this.$store.dispatch('searchLocations', this.$route.query.term);
    }
  },
  mounted() {
    this.search();
  },
  watch: {
    $route() {
      this.search();
    }
  }
};
</script>

<style>
</style>