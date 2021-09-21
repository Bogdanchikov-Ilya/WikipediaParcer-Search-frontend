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
      return state.searchList
    }
  }
}
