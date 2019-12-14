<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
              <progress-bar type="line" ref="line" :options="options"></progress-bar>
    <navbar></navbar>
    <router-view />
  </div>
</template>

<style lang="css">
  *{
    font-family: Poppins;
  }
  body {
    background-color: #F4F3EF;
  }
  
</style>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
   data: {
      options: {
        color: '#007AFF',
        strokeWidth: 0.5
      }
    },
  components: {
    'Navbar': Navbar
  }
}

</script>
