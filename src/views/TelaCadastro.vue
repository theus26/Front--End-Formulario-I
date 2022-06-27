<template>
  <div class="txt">
    <Message :msg="msg"  v-show="msg"/>
    <h1>Formulario de Cadastro</h1>
    <div class="container">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>

        <v-text-field v-model="cpf" :rules="cpfRules" label="CPF" required v-mask="'###.###.###-##'"></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="senha" :rules="senhaRules, emailRules" label="Senha" required type="password">
        </v-text-field>



        <v-btn :disabled="!valid, dialog" color="success" class="mr-4" @click="validate" @submit="dialog" :loading="dialog"
          id="btn">
          Cadastrar
        </v-btn>
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
             Cadastrando Usuario...
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-btn color="error" class="mr-4" @click="reset">
          Limpar Formulario
        </v-btn>

      </v-form>

    </div>

  </div>

</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
import Message from '../components/message.vue'
import { CriarUsuario } from "../Services/api"
export default {
  name: "TelaCadastro",
  components: {
    NavBarVue,
    Message

  },
  data: () => ({
    valid: true,
    dialog: false,
    
    msg: false,
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
    cpfRules: [
      v => !!v || 'Insira Um CPF ',
      v => (v && v.length >= 11) || 'CPF Invalido, Insira o CPF correto',
    ],
    senha: '',
    senhaRules: [
      v => !!v || 'Insira sua Senha ',
      v => (v && v.length >= 5) || 'Numeros de Caracteres Invalidos, Insra Caracteres especiais',

    ]


  }),

  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        const result = await CriarUsuario(this.name, this.email, this.senha);
        if (result === 200) {
           this.msg=`Usuario ${this.name} Cadastrado !`
         // const btn = document.getElementById("btn")
          //btn.innerHTML="Cadastrando..."
          setTimeout(() => (this.$router.push('/')),3000)

          setTimeout(() => this.msg ="", 2000)
        }
        else this.error = true
      }
      else this.error = true;
      //console.log(this.name);
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
   
  },
}
</script>



<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.txt {
  padding-top: 10px;
  text-align: center;
  color: #FCBA03;
  font-weight: bold;
  font-size: 20px;
}
</style>