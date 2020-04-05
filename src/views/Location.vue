<template>
  <div @key="`location-${this.$route.params.id}`">
    Location
    <div v-if="location">
      <img :src="location.image" />
      <div>
        Name: {{ location.name }}
      </div>
      <div>
        Type: {{ location.type }}
      </div>
      <div>
        Dimension: {{ location.dimension }}
      </div>
      <div>
        Residents:
        <div v-for="character in location.residents" :key="`location-${character}`">
          <character-link
            :character-url="character"
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
      location: this.$store.state.locations.locations[this.resourceUrl],
    };
  },
  computed: {
    resourceUrl() { return formResourceUrl('location', this.$route.params.id); },
  },
  methods: {
    fetchLocation() {
      this.$store.dispatch('getLocation', this.resourceUrl)
        .then(() => {
          this.location = this.$store.state.locations.locations[this.resourceUrl];
        });
    },
  },
  mounted() {
    if (this.location === undefined) {
      this.fetchLocation();
    }
  },
};
</script>

<style>
</style>
