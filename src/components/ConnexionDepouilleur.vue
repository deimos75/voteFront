<template>
  <v-app id="inspire">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="9">
            <v-card class="elevation-12">
              <v-toolbar color="#d50000" dark flat>
                <v-toolbar-title>Poll Chain - Connexion Depouilleur</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <img src="../assets/logo.png" alt="Pull Chain" width="120px">
                <v-form v-model="isFormValid" style="margin-top: 3%">
                  <v-text-field label="Identifiant :" type="text" color="#d50000" :rules="rules"/>
                  <v-text-field id="password" label="Mot de passe :"  type="password" color="#d50000" :rules="rules"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn color="#d50000" :disabled="!isFormValid" style="color: white" @click="onSubmit">Se connecter</v-btn>
              </v-card-actions>
            </v-card>
            <!-- Modale de mention légale et de vote -->
            <modal-mention
              :modalText="mentionDepouillement"
              :modalParam1="description1"
              :modalParam2="description2"
              modalButton="ACCEDER AUX RESULTATS"
            ></modal-mention>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import modalMention from "./modalMention";
export default {
  name: "exampleConnexionVote",
  components: {
    modalMention
  },
  props: {
    source: String
  },
  data() {
    return {
      isFormValid: false,
      rules: [value => !!value || "Veuillez remplir ce champs."]
    };
  },
  methods: {
    onSubmit() {
//      this.$router.push('/listOfResults');
      this.showMention()
    },
    showMention() {
      this.$modal.show("mentionModal");
    },
    hideMention() {
      this.$modal.hide("mentionModal");
    }
  }
};
</script>
