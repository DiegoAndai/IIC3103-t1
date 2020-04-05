import { getResource, getAllResourcePages } from '../api';

const initialState = {
  characters: {},
  searchingCharacters: false,
  searchUrls: [],
};

export const mutations = {
  setCharacter(state, payload) {
    state.characters[payload.url] = payload;
  },
  addSearchResultCharacters(state, payload) {
    state.searchUrls = [ ...state.searchUrls, payload];
  },
  reset(state) {
    Object.assign(state, { ...initialState });
  },
  resetSearch(state) {
    state.searchUrls = [];
  },
  toggleSearching(state, payload) {
    state.searchingCharacters = payload;
  },
};

export const actions = {
  getCharacter({ commit }, payload) {
    return getResource(payload)
      .then((res) => {
        commit('setCharacter', res.data);
      });
  },
  searchCharacters({ commit }, payload) {
    commit('toggleSearching', true);
    commit('resetSearch');

    return getAllResourcePages(`character/?name=${payload}`)
      .then((res) => {
        res.forEach((result) => {
          commit('setCharacter', result)
          commit('addSearchResultCharacters', result.url);
        })
      })
      .finally(() => {
        commit('toggleSearching', false);
      });
  },
};

export default {
  state: { ...initialState },
  mutations,
  actions,
};
