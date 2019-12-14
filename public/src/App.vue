<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <progress-bar type="line" ref="line" :options="options"></progress-bar>
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar: Navbar
  }
};
</script>
