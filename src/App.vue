<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@400;600;700&family=Yusei+Magic&display=swap");

* {
  font-family: "Yanone Kaffeesatz", sans-serif;
}
#app {
  font-weight: 400;
  font-size: 22px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* color: #d3e2f0; */
}
#nav a {
  font-weight: bold;
  color: #d9e2eb;
}
#home {
  margin: 50 auto;
  font-weight: bold;
  font-size: 40;
}
.container {
  display: flex;
  justify-content: center;
}
</style>
