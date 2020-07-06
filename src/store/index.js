import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedHerb: {
      name: "Goldenrod",
      description: "Goldenrod stands tall and shines like the sun.",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
});
