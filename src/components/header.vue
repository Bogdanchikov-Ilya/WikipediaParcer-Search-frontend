<template>
  <div>
    <b-nav tabs fill class="mb-3">
      <b-nav-item><router-link to="/">Импорт статей</router-link></b-nav-item>
      <b-nav-item><router-link to="/search">Поиск</router-link></b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a{
  text-decoration: none;
  font-weight: normal;
}
.router-link-exact-active{
  font-weight: bold
}
</style>