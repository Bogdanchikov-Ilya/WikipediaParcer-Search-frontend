export default {
  state: {
    loader: false
  },
  mutations: {
    setPreloader(state, payload){
      state.loader = payload
    },
  },
  getters: {
    getPreloaderStatus(state){
      return state.loader
    }
  }
}
