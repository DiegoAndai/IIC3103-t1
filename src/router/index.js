import Vue from 'vue';
import VueRouter from 'vue-router';
import EpisodeList from '../views/EpisodeList.vue';
import Episode from '../views/Episode.vue';
import Location from '../views/Location.vue';
import Character from '../views/Character.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'EpisodeList',
    component: EpisodeList,
  },
  {
    path: '/episode/:id',
    name: 'Episode',
    component: Episode,
  },
  {
    path: '/location/:id',
    name: 'Location',
    component: Location,
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
