import articlesServices from "../services/articlesServices";

export default {
  namespaced: true,

  state: {
    articles: [],
    article: null,
    time: null
  },
  mutations: {
    setArticles(state, payload) {
      return state.articles = payload
    },
    setArticle(state, payload) {
      return state.articles
    },
    setTime(state, payload) {
      return state.time = payload
    }
  },
  actions: {
    async getAll(ctx){
      const articles = await articlesServices.getAll()
      ctx.commit('setArticles', articles)
    },
    async create(ctx, article){

      const start = new Date().getTime();

      const newArticle = await articlesServices.create(article)
      ctx.commit('setArticle', newArticle)

      const end = new Date().getTime();
      const time = end - start
      console.log(time)

      ctx.commit('setTime', time)
    }
  },
  getters: {
    getArticles(state) {
      return state.articles
    },
    getTime(state) {
      return state.time
    }
  }
}