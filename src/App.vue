<template>
  <div id="app">
    <preloader v-if="preloaderStatus"/>
    <div>
      <b-nav tabs fill>
        <b-nav-item><router-link to="/">Импорт статей</router-link></b-nav-item>
        <b-nav-item><router-link to="/search">Поиск</router-link></b-nav-item>
      </b-nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import preloader from "@/components/preloader";
export default {
  components:{preloader},
  computed: {
    preloaderStatus(){
      return this.$store.getters['getPreloaderStatus']
    }
  }
}
</script>

<style lang="scss">

</style>
