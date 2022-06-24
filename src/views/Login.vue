<template>
  <div class="txt">
    <h1>Faça Seu Login </h1>
    <div class="container">
      <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="senha" :rules="senhaRules, emailRules" label="Senha" required type="password">
        </v-text-field>


      </v-form>



    </div>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Entrar
    </v-btn>
  </div>

</template>

<script>
// @ is an alias to /src



export default {
  name: 'Login',
  data: () => ({
    valid: 'true',
    email: '',
    emailRules: [
      v => !!v || 'Insira Um E-mail',
      v => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido',
    ],

    senha: '',
    senhaRules: [
      v => !!v || 'Insira sua Senha ',
      v => (v && v.length >= 5) || 'Numeros de Caracteres Invalidos, Insra Caracteres especiais',

    ]
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
      const email = this.email;
      const senha = this.senha;
      console.log("Esse é seu: " + email + "Essa é sua Senha" + senha)
    }
  }
}
</script>


<style scoped>
.container {
  display: block;
  padding-top: 70px;
  max-width: 30%;
  margin: auto;
  padding-bottom: 30px;
}

.txt {
  padding-top: 10px;
  text-align: center;
  color: #FCBA03;
  font-weight: bold;
  font-size: 20px;
}
</style>