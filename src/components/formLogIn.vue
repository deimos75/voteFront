/* eslint-disable prettier/prettier */
<template lang="html">
  <section class="form-log-in">
    <form id="logIn" @submit="checkForm" action="" method="post">
      <div v-if="errors.length">
        <b>Veuillez corriger les erreurs suivantes:</b>
        <ul>
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul>
      </div>
      <br />
      <div>
        <label for="username">Identifiant : </label>
        <br />
        <input type="text" id="username" name="username" v-model="username" />
      </div>
      <br />
      <div>
        <label for="password">Mot de passe : </label>
        <br />
        <input type="text" id="password" name="password" v-model="password" />
      </div>
      <div>
        <v-btn id="connectButton" type="submit" outlined="true"
          >Se connecter</v-btn
        >
      </div>
    </form>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'form-log-in',
    props: [],
    mounted () {

    },
    data () {
      return {
        errors: [],
        username: null,
        password: null
      }
    },
    methods: {
      checkForm: function(e) {
        this.errors = [];
        if(!this.username){
          this.errors.push('L\'identifiant est requis.');
          }
        if(!this.password){
          this.errors.push('Le mot de passe est requis.');
          }
        e.preventDefault();
      }
    },
    computed: {
    }
}
</script>

<style>
form {
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
}
#logIn > div > input {
  border: 1px solid #6ab86a;
}
b {
  color: red;
}
#connectButton {
  margin-top: 15%;
  background-color: #6ab86a;
}
#connectButton:hover {
  background-color: #a3e3a3;
}
</style>
