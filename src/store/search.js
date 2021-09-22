import searchServices from "../services/searchServices";

export default {
  state: {
    searchList: []
  },
  mutations: {
    setSearchList(state, payload){
      state.searchList = payload
    },
  },
  actions: {
    async search(ctx, searchValue){
      const newSearchList = await searchServices.search(searchValue)
      ctx.commit('setSearchList', newSearchList)
    }
  },
  getters: {
    getSearchList(state){
      return state.searchList.sort((a, b) => parseFloat(a.counter) - parseFloat(b.counter)).reverse();
    },
    getTotalPrice(state) {
      if(state.searchList.length != 0) {
        return state.searchList.reduce((prev,next) => prev + next.counter,0);
      }
    }
  }
}
