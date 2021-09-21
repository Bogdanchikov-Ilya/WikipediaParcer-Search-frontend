<template>
  <div>
    <div class="container">
      <form class="flex flex-nowrap" @submit.prevent="search()">
        <label class="sr-only mb-1">Поиск статьи по слову</label>
        <div class="form-item d-flex justify-content-between">
          <b-form-input id="inline-form-input-name" v-model="searchValue" class="mb-2 mr-sm-2 mb-sm-0 w-50" placeholder="Липецк"></b-form-input>
          <b-button variant="primary" @click="search()">Поиск</b-button>
        </div>
      </form>
      <hr>
      <div class="card-wrapper d-flex justify-content-between flex-wrap mt-2">
        <div class="card mb-4" v-for="(item, key) in searchList">
<!--          <div class="card-header">-->
<!--            Featured-->
<!--          </div>-->
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">Найдено {{item.counter}} вхождений</p>
            <a href="#" class="btn btn-primary">Посмотреть</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchValue: ''
    }
  },
  computed: {
    searchList () {
      return this.$store.getters['getSearchList']
    }
  },
  methods:{
    search() {
      console.log(this.searchValue)
      this.$store.dispatch('search', {
        text: this.searchValue
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper{
  width: 50%;
  .card{
    width: 100%;
  }
}
</style>