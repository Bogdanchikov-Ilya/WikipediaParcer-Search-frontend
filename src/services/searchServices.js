import {api} from "../api/api.js"
import store from '../store'

class searchServices {
  async search(searchValue) {
    try {
      let formData = new FormData();
      formData.append('text', searchValue.text)
      console.log(formData.get('text'))
      const res = await fetch('http://parcer-back/search', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      console.log(data)
      return data
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

export default new searchServices()