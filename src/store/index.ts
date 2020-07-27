import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    panels: [],
    currentPanelIndex: 0,
  },

  getters: {
    getPanels: (state) => state.panels,
    getCurrentPanel: (state) => state.panels[state.currentPanelIndex],
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  },
});
