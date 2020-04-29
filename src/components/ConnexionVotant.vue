<template>
  <v-app id="inspire">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="9">
            <v-card class="elevation-12">
              <v-toolbar color="#1a237e" dark flat>
                <v-toolbar-title>Connexion votant</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <img src="../assets/logo.png" alt="Pull Chain" width="120px">
                <v-form v-model="isFormValid" style="margin-top: 3%">
                  <v-text-field label="Identifiant :" type="text" color="#1a237e" :rules="rules"/>
                  <v-text-field id="password" label="Mot de passe :"  type="password" color="#1a237e" :rules="rules"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn color="#1a237e" :disabled="!isFormValid" style="color: white" @click="onSubmit">Se connecter</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "exampleConnexionVote",
  props: {
    source: String
  },
  data(){
    return{
      isFormValid: false,
      rules: [value => !!value || "Veuillez remplir ce champs."]
    };
  },
  methods: {
    onSubmit() {
      this.$router.push('/listeDesCandidats');
    }
  }
};
</script>
