<template>
<div class="txt">
  <h1>Formulario de Cadastro</h1>
<div class="container">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      
      :rules="nameRules"
      label="Nome"
      required
    ></v-text-field>

 <v-text-field
      v-model="cpf"
      :rules="cpfRules"
      label="CPF"
      required
     v-mask="'###.###.###-##'"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

  <v-text-field
      v-model="senha"
      :rules="senhaRules,emailRules "
      label="Senha"
      required
      type="password"
    ></v-text-field>
     

    
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
     Cadastrar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
     Limpar Formulario
    </v-btn>
  </v-form>

</div>
  
</div>

</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
  export default {
    name:"TelaCadastro",
    components:{
      NavBarVue
    },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Insira Um nome ',
        v => (v && v.length >= 5) || 'Nome Invalido, Insira no Minimo 5 Caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Insira Um E-mail',
        v => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido',
      ],
      cpf: '',
      cpfRules:[
        v => !!v || 'Insira Um CPF ',
        v => (v && v.length >= 11) || 'CPF Invalido, Insira o CPF correto',
      ],
       senha: '',
      senhaRules:[
        v => !!v || 'Insira sua Senha ',
        v => (v && v.length >= 5) || 'Numeros de Caracteres Invalidos, Insra Caracteres especiais',
        
      ]
    
     
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
       // console.log(this.name);
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>



<style scoped>
.container{
display: flex;
justify-content: center;
margin-top: 50px;
}
.txt{
  padding-top: 10px;
 text-align: center;
  color: #FCBA03;
  font-weight: bold;
  font-size: 20px;
}

</style>