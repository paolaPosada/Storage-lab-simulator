<template>
  <div id="nav">
    <nav class="navbar navbar-light" style="background-color: #348f41">
      <div class="navbar-left">
        <router-link to="/"> Disk Comparation |</router-link> 
        <router-link to="/Disk"> How it works? |</router-link> 
        <router-link to="/about"> About |</router-link> 
      </div>
      <a class="navbar-brand" href="#" id="title">StorageLab Simulator</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style >

#title {
  font-weight: 700;
  font-size: 35px;
  font-weight: bold;
}
a {
  font-weight: 600;
  font-size: 25px;
  font-weight: bold;
}
</style>