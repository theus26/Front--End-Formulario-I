import axios from 'axios';

export const api = axios.create({
    baseURL: "https://localhost:7037",
  });
  

  export const CriarUsuario = async (name, email, senha) => {
    return api.post('api/Cadastro', {name,  email, senha}).then(result => {
        //console.log(name,email,senha)
      return result.status;
    }).catch(e => {
      console.error(e);
    });
  } 

  export const LogarUsuario = async (email, senha) => {
    return api.post('api/Login', {email, senha}).then(result => {
        //console.log(name,email,senha)
      return result.status;
    }).catch(e => {
      console.error(e);
    });
  } 