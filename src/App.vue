<template>
  <router-view></router-view>

  <teleport to="#footer">
    <FooterComp></FooterComp>
  </teleport>
</template>

<script>
import FooterComp from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    FooterComp
  },
  mounted() { 
    //If want to do somethin on refresh do it here
    //localStorage.removeItem('user')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  margin:0;
}
</style>
