<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Teams</router-link> |
      <router-link to="/favouriteTeams">Favourite Teams</router-link>
    </div>
    <router-view class="mr-5 ml-5 mb-5"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  created () {
    this.getTeams()
  },
  methods: {
    ...mapActions({
      getTeams: 'fetchTeams'
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
