import { getResource } from '../api';

const initialState = {
  characters: {},
};

export const mutations = {
  setCharacter(state, payload) {
    state.characters[payload.url] = payload;
  },
  reset(state) {
    Object.assign(state, { ...initialState });
  },
};

export const actions = {
  getCharacter({ commit }, payload) {
    return getResource(payload)
      .then((res) => {
        commit('setCharacter', res.data);
      });
  },
};

export default {
  state: { ...initialState },
  mutations,
  actions,
};
