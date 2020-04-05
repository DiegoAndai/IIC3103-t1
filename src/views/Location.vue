<template>
  <div @key="`location-${this.$route.params.id}`">
    <template v-if="location">
      {{ location }}
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
      location: null,
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
    this.fetchLocation();
  },
};
</script>

<style>
</style>
