import Vue from 'vue'
import Vuex from 'vuex'

import articles from './articles';
import search from "./search";
import preloader from "./preloader";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    articles,
    preloader,
    search
  }
})
