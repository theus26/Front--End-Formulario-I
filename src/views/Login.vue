<template>
  <div class="txt">
    <NavBar />
    <br> <br>
    <h1>Faça Seu Login </h1>
    <br><br>
    <v-alert type="error" v-show="alertError" id="error">
    Por Favor Preencha os Campos
    </v-alert>
      <v-alert type="error" v-show="alertError1" id="error">
    Email ou Senha incorretas...
    </v-alert>
    <div class="container">
      <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field v-model="email" :rules="[emailValido, emailRequired]" label="E-mail" required></v-text-field>

        <v-text-field v-model="senha" :rules="[required, min, letraNum]" label="Senha" required type="password">
        </v-text-field>


      </v-form>



    </div>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Entrar
    </v-btn>
    <FooterVue />
  </div>

</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import FooterVue from '../components/Footer.vue';
import { LogarUsuario } from "../Services/api"

export default {
  name: 'Login',
  components: {
    NavBar,
    FooterVue
  },
  data: () => ({
    valid: true,
    alertError: false,
    alertError1: false,
    alertaSucess: false,
    required: (value) => !!value || "Obrigatório.",
    email: '',
    min: (v) => v.length >= 8 || "Min 8 caracteres.",
    letraNum: (v) =>
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
      "Senha deve conter letra e número.",

    emailValido: (v) => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || "O e-mail precisa ser válido.",
    emailRequired: (v) => !!v || "E-mail é obrigatório",

    senha: '',
    senhaRules: [
      v => !!v || 'Insira sua Senha ',
      v => (v && v.length >= 5) || 'Numeros de Caracteres Invalidos, Insra Caracteres especiais',

    ]
  }),
  methods: {
    async validate() {
      this.$refs.form.validate()
      if (this.$refs.form.validate()) {
        const result = await LogarUsuario(this.email, this.senha);
        if (result === 200) {
          this.alertaSucess = true
          setTimeout(() => (this.$router.push('/TelaUser')), 3000)
          // const btn = document.getElementById("btn")
          //btn.innerHTML="Cadastrando..."
        }
        else if(result === 401) {
          this.alertError = true
          setTimeout(() => (this.alertError = false), 3000)
          this.email = "",
            this.senha = ""
        }
        else{
           this.alertError1 = true
          setTimeout(() => (this.alertError1 = false), 3000)
          this.email = "",
            this.senha = ""
        }
      }
      else {
        this.alertError = true
        setTimeout(() => (this.alertError = false), 3000)


      }
    },
  }
}
</script>


<style scoped>
.container {
  display: block;
  max-width: 30%;
  margin: auto;
  padding-bottom: 30px;
}

.txt {
  text-align: center;
  color: #FCBA03;
  font-weight: bold;
  font-size: 20px;

}

#error {
  max-width: 18rem;
  margin: auto;
  margin-bottom: 30px;


}
</style>