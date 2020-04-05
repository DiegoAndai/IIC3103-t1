import { getResource, formResourceUrl, toUrlIndexedForm } from '../api';

const initialState = {
  loadingEpisodes: false,
  episodes: {},
};

export const mutations = {
  setEpisodes(state, payload) {
    state.episodes = payload;
  },
  setEpisode(state, payload) {
    state.episodes[payload.url] = payload;
  },
  reset(state) {
    Object.assign(state, { ...initialState });
  },
  toggleLoading(state, payload) {
    state.loadingEpisodes = payload;
  },
};

export const actions = {
  getEpisodes({ commit }) {
    commit('toggleLoading', true);

    return getResource(formResourceUrl('episode'))
      .then((res) => {
        commit('setEpisodes', toUrlIndexedForm(res.data.results));
      })
      .finally(() => {
        commit('toggleLoading', false);
      });
  },
  getEpisode({ commit }, payload) {
    commit('toggleLoading', true);

    return getResource(payload)
      .then((res) => {
        commit('setEpisode', res.data);
      })
      .finally(() => {
        commit('toggleLoading', false);
      });
  },
};

export default {
  state: { ...initialState },
  mutations,
  actions,
};
