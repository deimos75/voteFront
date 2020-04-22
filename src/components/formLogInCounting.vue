<template lang="html">
  <section class="form-log-in">
    <form id="logIn" method="post">
      <div v-if="errors.length">
        <b>Erreur(s):</b>
        <ul id="listErrors">
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul>
      </div>
      <br />
      <div>
        <label for="username" class="label">Identifiant : </label>
        <br />
        <input
          type="text"
          autocomplete="username"
          id="username"
          name="username"
          v-model="username"
          required="true"
        />
      </div>
      <br />
      <div>
        <label for="password" class="label">Mot de passe : </label>
        <br />
        <input
          type="password"
          autocomplete="current-password"
          id="password"
          name="password"
          v-model="password"
        />
      </div>
      <div>
        <v-btn
          id="connectButtonCounting"
          type="submit"
          @click.stop.prevent="checkForm()">
          <p>Se connecter au
          <br/>
          dépouillement</p> </v-btn
        >
      </div>
    </form>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'form-log-in',
    data () {
      return {
        errors: [],
        username: null,
        password: null
      }
    },
    methods: {
      checkForm() {
        this.errors = [];
        if(!this.username){
          this.errors.push('L\'identifiant est requis.');
          }
        if(!this.password){
          this.errors.push('Le mot de passe est requis.');
          }
        if(this.username && this.password) {
          this.$router.push('/depouillement/mentionsLegales');
        }
      }
    },
    watch: {
      username(newName, oldName) {
        console.log('---> WATCH NOM : ' + oldName + ' => '+ newName);
      },
      password(newPass, oldPass) {
        console.log('---> WATCH MDP : ' + oldPass + ' => '+ newPass);
      }
    }
};
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
#connectButtonCounting {
  margin: 15% 0 15% 0;
  background-color: #ff6f69;
  color: white;
}
#connectButtonCounting > span > a {
  text-decoration: none;
}
a {
  text-decoration: none;
}
#connectButtonCounting:hover {
  background-color: #ff9b83;
}
#listErrors {
  list-style: none;
}
.label {
  float: left;
  margin-left: 10%;
}
</style>
