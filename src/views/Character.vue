<template>
  <div @key="`character-${this.$route.params.id}`">
    Character
    <div v-if="character">
      <img :src="character.image" />
      <div>
        Name: {{ character.name }}
      </div>
      <div>
        Status: {{ character.status }}
      </div>
      <div>
        Species: {{ character.species }}
      </div>
      <div>
        Type: {{ character.type }}
      </div>
      <div>
        Gender: {{ character.gender }}
      </div>
      <div>
        Origin: <location-link :location-url="character.location.url"/>
      </div>
      <div>
        Episodes:
        <div v-for="episodeUrl in character.episode" :key="`episode-${episodeUrl}`">
          <episode-link
            :episode-url="episodeUrl"
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
import EpisodeLink from '../components/episode-link';
import LocationLink from '../components/location-link';

export default {
  components: {
    EpisodeLink,
    LocationLink,
  },
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
    this.character = this.$store.state.characters.characters[this.resourceUrl];
    if (this.character === undefined) {
      this.fetchCharacter();
    }
  },
};
</script>

<style>
</style>
