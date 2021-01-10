<template>
  <div id="app">
  <navbar/>
    <router-view/>
  </div>

</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'App',
  components: {
    Navbar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #d3e2f0; */
}
#nav a {
  font-weight: bold;
  color: #d9e2eb;
}
  #home{
  margin: 50 auto;
  font-weight: bold;
  font-size: 40;
  }
  .container {
  display: flex;
  justify-content: center;
}
</style>
