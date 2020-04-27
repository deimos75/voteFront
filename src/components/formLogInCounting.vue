<template lang="html">
  <section class="form-log-in">
    <div>
      <router-link to="/"><img src="../assets/logo.png" alt="Pull Chain"> </router-link>
    </div>
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
          Se connecter au
          <br/>
          dépouillement </v-btn>
      </div>
      <!-- Modale de mention légale et de vote -->
      <modal-mention
        :modalText="mentionDepouillement"
        :modalParam1="description1"
        :modalParam2="description2"
        modalButton="ACCEDER AUX RESULTATS"
      ></modal-mention>
    </form>
  </section>
</template>

<script lang="js">
  import modalMention from "./modalMention";
  export default  {
    name: 'form-log-in',
    components: {
    modalMention
    },
    data () {
      return {
        errors: [],
        username: null,
        password: null,
        
        /** Paramètre pour remplir la modal mention */
        mentionDepouillement: "Mention Légales : Par la présente je m’engage a respecter les règles du dépouillement.",
        description1: "",
        description2: "",
        checkDisabledMention: true
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
          this.showMention();
        }
      },
      showMention() {
      this.$modal.show("mentionModal");
      },
      hideMention() {
        this.$modal.hide("mentionModal");
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
