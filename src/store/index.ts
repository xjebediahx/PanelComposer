import Vue from 'vue';
import Vuex from 'vuex';
import Panel from '../@Types/Panel.type';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    panels: [],
    currentPanelIndex: 0, 
    grid: {
      columns: ['1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr'],
      rows: ['1fr', '1fr', '1fr', '1fr' ,'1fr']
    }
  },

  getters: {
    getPanels: (state) => state.panels,
    getCurrentPanel: (state) => state.panels[state.currentPanelIndex],
    getGrid: (state) => state.grid,
    getColumnCSS: (state) => state.grid.columns.join(' '),
    getRowCSS: (state) => state.grid.rows.join(' ')
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  },
});
