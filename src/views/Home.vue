<template>
  <div>
    <div class="container">
      <form class="flex flex-nowrap" @submit.prevent="handleSubmit()">
        <label class="sr-only mb-1" for="inline-form-input-name">Ключевое слово</label>
        <div class="form-item d-flex justify-content-between">
          <b-form-input id="inline-form-input-name" v-model="searchValue" class="mb-2 mr-sm-2 mb-sm-0 w-50" placeholder="Липецк"></b-form-input>
          <b-button variant="primary" @click="handleSubmit()">Скопировать</b-button>
        </div>
      </form>
      <div class="info d-flex flex-column mt-5">
        <p class="mb-3">Импорт завершен</p>
        <ul>
          <li>Найдена статья по адресу - <span><a :href="url">{{url}}</a></span></li>
          <li>Время обработки - <span>test</span></li>
          <li>Размер статьи - <span>{{size}}</span></li>
          <li>Количество слов - <span>{{textLength}}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchValue: '',

      url: '',
      time: '',
      size: '',
      textLength: ''
    }
  },
  methods: {
    async searchWikipedia(searchQuery) {
      const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${searchQuery}`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      return json;
    },

    async handleSubmit() {
      const inputValue = this.searchValue
      const searchQuery = inputValue.trim();

      try {
        const results = await this.searchWikipedia(searchQuery);
        this.url = `https://ru.wikipedia.org/?curid=${results.query.search[0].pageid}`
        const url = `https://ru.wikipedia.org/?curid=${results.query.search[0].pageid}`;
        const pageid =  results.query.search[0].pageid.toString()
        console.log(results.query.search[0].title);
        const text = await this.takeText(results.query.search[0].title)

        let div = document.createElement('div');
        div.innerHTML = text.query.pages[pageid].extract;
        this.size = div.innerHTML.length / 1024 + 'Кб'
        this.textLength = div.innerHTML.length
        const textSize = div.innerHTML.length / 1024 + 'Кб'
        console.log(div.innerText); // - clear text


        if(results.length < 1) {
          alert('Ничего не найдено!')
        }
      } catch (err) {
        console.log(err);
        alert('Ошибка поиска');
      }
    },

    async takeText(aName) {
      try {
        const result = await fetch(`https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=${aName}&redirects=true`)
        console.log(`https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=${aName}&redirects=true`)
        const json = await result.json();
        return json;
      } catch (e) {
        throw e
      }
    }
  }
}
</script>

<style scoped>
.info{
 background-color: #efefef;
  padding: 1.5em;
}
</style>