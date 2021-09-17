<template>
  <div id="app">
    <div>
      <b-nav tabs fill>
        <b-nav-item><router-link to="/">Импорт статей</router-link></b-nav-item>
        <b-nav-item><router-link to="/search">Поиск</router-link></b-nav-item>
      </b-nav>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
