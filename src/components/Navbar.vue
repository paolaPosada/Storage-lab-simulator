<template>
    <div id="nav">
      <nav class="navbar navbar-dark bg-dark">
        <div class="navbar-collapse  w-100 order-2 order-md-0 dual-collapse2">
        <router-link to="/">Disk Comparation</router-link>| 
        <router-link to="/Disk">How it works?</router-link>|
        <router-link to="/about">About</router-link>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar'

}
</script>
<style >
  font-weight: bold;

</style>