/* eslint-disable no-shadow */
import { getTopAnimes, getAnimeById } from '@/services/animeService';

const state = () => ({
  animes: [],
  anime: {},
});

const mutations = {
  SET_ANIMES(state, animes) {
    state.animes = animes;
  },
  SET_ANIME(state, anime) {
    state.anime = anime;
  },
};

const actions = {
  async getAnimes({ commit }) {
    const { data } = await getTopAnimes();
    commit('SET_ANIMES', data.data);
  },
  async getAnime({ commit }, id) {
    const { data } = await getAnimeById(id);
    commit('SET_ANIME', data.data);
  },
};

const getters = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
