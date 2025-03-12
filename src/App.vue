<template>
  <router-view></router-view>

  <teleport to="#footer">
    <FooterComp></FooterComp>
  </teleport>
  <teleport to="#bigFooter">
    <BigFooter></BigFooter>
  </teleport>
</template>

<script>
import { computed, reactive } from 'vue';
import FooterComp from './components/Footer.vue';
import { useHead } from '@vueuse/head';
import BigFooter from './components/BigFooter.vue';


export default {
  name: 'App',
  components: {
    FooterComp,
    BigFooter
  },
  setup() {
    const siteData = reactive({
      title: 'Divine English Academy Radhakishanpura | Best School in Sikar | Best English Medium | School in Sikar',
      //description: 'Divine Enligh Academy Radhakishanpura, Sikar (Rajasthan). Giving Computer Engineering Training to school Students and this web application is developed by 8th class students.'
      description: 'Welcome to Divine English Academy - Your Gateway to Quality Education Discover Divine English Academy\'s innovative web application, where students, parents, and teachers connect seamlessly. Access academic resources, track progress, and stay updated with the latest school events. Join us in nurturing excellence and fostering a bright future.'
    })

    useHead({
      //Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),

        },

      ]
    })
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

  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

body {
  margin: 0;
}
</style>
