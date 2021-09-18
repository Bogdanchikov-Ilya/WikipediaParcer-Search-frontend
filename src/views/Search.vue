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
  methods:{
    search() {
      console.log(this.searchValue)
    }
  }
}
</script>

<style scoped>

</style>