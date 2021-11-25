<template>
  <div>
    <div class="container">
      <b v-if="searchList.length > 0">{{getTotalPrice}} всего вхождений найдено</b>
      <form class="flex flex-nowrap" @submit.prevent="search()">
        <label class="sr-only mb-1">Поиск статьи по слову</label>
        <div class="form-item d-flex justify-content-between">
          <b-form-input id="inline-form-input-name" v-model="searchValue" class="mb-2 mr-sm-2 mb-sm-0 w-50" placeholder="Липецк"></b-form-input>
          <b-button variant="primary" @click="search()">Поиск</b-button>
        </div>
      </form>
      <hr>
      <div class="content d-flex flex-row">
        <div class="card-wrapper d-flex justify-content-start flex-wrap mt-2" :class="{'clear' : !htmlArticle} ">
          <div :class="{active: item.title == selectedArticleTitle}" class="card mb-4 d-flex flex-row align-items-center p-3" v-for="(item, key) in searchList">
            <div class="card-body p-0">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">Найдено {{item.counter}} вхождений</p>
            </div>
            <a href="#" class="btn h-50 d-flex justify-content-center align-items-center btn-primary py-2" @click="getArticle(item.title)">Посмотреть</a>
          </div>
        </div>
        <div class="articles mt-2" v-if="htmlArticle">
          <p class="title"><b>{{selectedArticleTitle}}</b></p>
          <div class="text" v-html="htmlArticle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchValue: '',

      // article
      selectedArticleTitle: '',
      htmlArticle: ''
    }
  },
  computed: {
    searchList () {
      return this.$store.getters['getSearchList']
    },
    getTotalPrice() {
      return this.$store.getters['getTotalPrice']
    }
  },
  methods:{
    search() {
      console.log(this.searchValue)
      this.$store.dispatch('search', {
        text: this.searchValue
      })
    },
    async getArticle(articleName) {
      try {
        this.$store.commit('setPreloader', true)
        const result = await fetch(`https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=${articleName}&redirects=true`)
        console.log(`https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=${articleName}&redirects=true`)
        const json = await result.json();
        let pageid = Object.keys(json.query.pages)[0]
        this.htmlArticle = json.query.pages[pageid].extract
        this.selectedArticleTitle  = articleName
      } catch (e) {
        throw e
      } finally {
        this.$store.commit('setPreloader', false)
      }
    }
  },
  watch: {
    searchList: function () {
      if(this.searchList.length == 0){
        alert('Ничего не нашлось')
        this.searchValue = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse !important;
  }
}
.card-wrapper{
  width: 50%;
  .card{
    width: 100%;
    height: 7vw;
    margin-right: 2vw;
    &.active{
      border: 1px solid dodgerblue;
    }
    @media (max-width: 992px) {
      width: 100%;
      height: auto;
    }
  }
  &.clear {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between !important;
    .card{
      margin-right: 0;
      width: 38vw;
    }
    @media (max-width: 992px){
      width: 100%;
      .card{
        margin-right: 0;
        width: 100%;
      }
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    margin-right: 0;
    margin-top: 4vw;
    .card{
      margin-right: 0;
    }
  }
}

.articles{
  position: sticky;
  top: 0;
  border: 1px solid #d7d7d7;
  border-radius: 0.2vw;
  max-height: 40vw;
  padding: 2em 0em 0em 2em;
  max-width: 40vw;
  @media (max-width: 992px) {
    max-width: unset;
    width: 100%;
    position: unset;
  }
  .title{
    text-align: center;
    font-size: 1.5vw;
  }
  .text{
    overflow-y: scroll;
    max-height: 29.4vw;
  }
}
</style>