<template>
  <div class="txt">
    <NavBar />
    <v-alert type="success" v-show="alertaSucess">
      Usuario Cadastrado com Sucesso !
    </v-alert>
    <v-alert type="warning" v-show="alertError" id="alerta">
      Preencha os Campos !
    </v-alert>
    <v-alert type="warning" v-show="alertError1" id="alerta">
      Email já Cadastrado !
    </v-alert>
    <h1>Formulario de Cadastro</h1>
    <div class="container">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>

        <v-text-field v-model="cpf" :rules="cpfRules" label="CPF" required v-mask="'###.###.###-##'"></v-text-field>

        <v-text-field v-model="email" :rules="[emailValido, emailRequired]" label="E-mail" required></v-text-field>

        <v-text-field v-model="senha" :rules="[required, min, letraNum]" label="Senha" required type="password">
        </v-text-field>

        <v-btn :disabled="!valid, dialog" color="success" class="mr-4" @click="validate" @submit="dialog"
          :loading="dialog" id="btn">
          Cadastrar
        </v-btn>


        <v-btn color="error" class="mr-4" @click="reset">
          Limpar Formulario
        </v-btn>

      </v-form>

    </div>

    <FooterVue />
  </div>
</template>

<script>

import NavBar from '../components/NavBar.vue'
import FooterVue from '../components/Footer.vue';

import { CriarUsuario } from "../Services/api"
export default {
  name: "TelaCadastro",
  components: {
    NavBar,
    FooterVue


  },
  data: () => ({
    valid: true,
    alertError: false,
    alertError1: false,
    alertaSucess: false,
    dialog: false,
    required: (value) => !!value || "Obrigatório.",
    min: (v) => v.length >= 8 || "Min 8 caracteres.",
    msg: false,
    name: '',
    nameRules: [
      v => !!v || 'Insira Um nome ',
      v => (v && v.length >= 5) || 'Nome Invalido, Insira no Minimo 5 Caracteres',
    ],
    email: '',
    emailValido: (v) => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || "O e-mail precisa ser válido.",
    emailRequired: (v) => !!v || "E-mail é obrigatório",
    cpf: '',
    cpfRules: [
      v => !!v || 'Insira Um CPF ',
      v => (v && v.length >= 13) || 'CPF Invalido, Insira o CPF correto',
    ],
    senha: '',
    letraNum: (v) =>
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
      "Senha deve conter letra e número.",


  }),

  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        const result = await CriarUsuario(this.name, this.email, this.senha);
        if (result === 200) {
          this.alertaSucess = true
          setTimeout(() => (this.$router.push('/')), 3000)
          // const btn = document.getElementById("btn")
          //btn.innerHTML="Cadastrando..."
        }
        else this.alertError1 = true
      }
      else this.alertError = true;
      //console.log(this.name);
    },
    reset() {
      this.$refs.form.reset()
      this.alertError1 = false
      this.alertError = false
    },


  },
}
</script>



<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

.txt {
  text-align: center;
  color: #FCBA03;
  font-weight: bold;
  font-size: 20px;
}
</style>