<template>
  <div @key="`episode-${this.$route.params.id}`">
    Episode
    <div v-if="episode">
      <div>
        Name: {{ episode.name }}
      </div>
      <div>
        Aired: {{ episode.air_date }}
      </div>
      <div>
        Code: {{ episode.episode }}
      </div>
      <div>
        Characters:
        <div v-for="characterUrl in episode.characters" :key="`character-${characterUrl}`">
          <character-link
            :character-url="characterUrl"
          />
        </div>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import { formResourceUrl } from '../api';
import CharacterLink from '../components/character-link';

export default {
  components: {
    CharacterLink,
  },
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
    this.episode = this.$store.state.episodes.episodes[this.resourceUrl];
    if (this.episode === undefined) {
      this.fetchEpisode();
    }
  },
};
</script>

<style>
</style>
