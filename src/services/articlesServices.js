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
      store.commit('setPreloader', true)
      let formData = new FormData();
      formData.append('title', article.title)
      formData.append('body', article.body.replace(/\s+/g, ' ').trim())
      formData.append('url', article.url)
      formData.append('size', article.size)
      formData.append('count_words', article.wordCounter)
      console.log(formData.get('title'))
      console.log(formData.get('body'))
      console.log(formData.get('url'))
      console.log(formData.get('size'))
      console.log(formData.get('count_words'))
      const res = await fetch('http://parcer-back/articles', {
        method: 'POST',
        body: formData
      })
      console.log(res)
      if(res.status == 201) {
        store.dispatch('articles/getAll')
      }
      return res.data
    } catch (e) {
      console.log(e)
      throw e
    }finally {
      store.commit('setPreloader', false)
    }
  }
}

export default new articlesServices()