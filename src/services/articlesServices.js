import {api} from "../api/api.js"
import store from '../store'

class articlesServices {
  async getAll() {
    try {
      const res = await api.get('/articles')
      return res.data
    } catch (e) {
      throw e
    }
  }
  async create(article) {
    try {
      let formData = new FormData();
      formData.append('title', article.title)
      formData.append('body', article.body.replace(/\s+/g, ' ').trim())
      formData.append('url', article.url)
      formData.append('size', article.size)
      formData.append('count_words', article.wordCounter)
      const res = await fetch('https://cw60005.tmweb.ru/articles', {
        method: 'POST',
        body: formData
      })
      console.log(res)
      if(res) {
        store.dispatch('articles/getAll')
      }
      return res.data
    } catch (e) {
      console.log(e)
      throw e
    } finally {
      store.commit('setPreloader', false)
    }
  }
  async search(searchValue) {
    let formData = new FormData();
    formData.append('text', )
  }
}

export default new articlesServices()