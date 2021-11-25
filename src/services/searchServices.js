class searchServices {
  async search(searchValue) {
    try {
      let formData = new FormData();
      formData.append('text', searchValue.text)
      console.log(formData.get('text'))
      const res = await fetch('https://cw60005.tmweb.ru/api/search/', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      console.log(res)
      if(res.status == 404){
        alert('Ничего не нашлось')
        return []
      }
      return data
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

export default new searchServices()