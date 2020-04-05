import { getResource } from '../api';

const initialState = {
  locations: {},
};

export const mutations = {
  setLocation(state, payload) {
    state.locations[payload.url] = payload;
  },
  reset(state) {
    Object.assign(state, { ...initialState });
  },
};

export const actions = {
  getLocation({ commit }, payload) {
    return getResource(payload)
      .then((res) => {
        commit('setLocation', res.data);
      });
  },
};

export default {
  state: { ...initialState },
  mutations,
  actions,
};
