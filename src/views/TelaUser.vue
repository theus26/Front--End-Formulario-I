<template>
    <div class="containerUser">
         <v-btn color="error" class="mr-4" @click="Logout" id="btn">
          Sair
        </v-btn>
        <div class="txt">
            <h1>Seja Bem Vindo ! </h1>
        </div>
      
 
        <FooterVue />
    </div>
</template>

<script>

import FooterVue from '../components/Footer.vue';
export default {
    name: "telaUser",
    components: {
        FooterVue
    },
    methods:{
        Logout(){
              setTimeout(() => (this.$router.push('/')), 1000)
        }
    }
}
</script>


<style scoped>
.txt{
  
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 290px;
   padding-bottom: 100px;
}
#btn{
   margin-left: 90rem;
}
</style>