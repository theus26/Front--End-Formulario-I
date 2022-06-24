<template>
  <v-app>
    <NavBar/>
    <v-main>
      <router-view/>
      <FooterVue/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterVue from './components/Footer.vue';
export default {
  name: 'App',
  components:{
    NavBar,
    FooterVue
  },

  data: () => ({
    //
  }),
};
</script>
