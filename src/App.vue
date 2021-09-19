<template>
  <div id="app">
    <preloader v-if="preloaderStatus"/>
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/header";
import preloader from "@/components/preloader";

export default {
  components:{Header, preloader},
  computed: {
    preloaderStatus(){
      return this.$store.getters['getPreloaderStatus']
    }
  },
  created() {
    console.log(this.preloaderStatus)
  },
  watch: {
    preloaderStatus: function () {
      if(this.preloaderStatus == true){
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }
}
</script>

<style lang="scss">

</style>
