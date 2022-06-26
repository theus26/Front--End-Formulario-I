<template>
 <div id="nav">
      <router-link to="/" id="logo_url"> <img src="../assets/logo.png" :alt="alt" id="logo" /></router-link>
      <router-link  to="/about">Cadastro</router-link> |
       <router-link  to="/">Login</router-link>
    </div>
  
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    teste:false
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav{
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav #logo_url{
  margin: auto;
  margin-left: 0;
}
#nav a {
  color: #FCBA03;
  text-decoration: none;
  margin: 12px;
  transition: .5s;
}
#nav a:hover{
  color: #fff;
}
#logo{
  width: 40px;
  height: 40px;
}


</style>
