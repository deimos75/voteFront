<template>
  <div>
    <modal name="mentionModal">
      <!-- Bouton de fermeture -->
      <span
        id="closeButton"
        @click="hideMention"
        class="mdi mdi-24px mdi-close-circle"
      >
      </span>

      <!-- Corps de la modale -->
      <div id="modalText">
        <p>{{ modalText }}:</p>
        <p>{{ modalParam1 }}</p>
        <br />
        <p>{{ modalParam2 }}</p>
      </div>
      <!-- Formulaire de validation -->
      <form id="validMention" method="post">
        <div id="errorMessage" v-if="error">
          <b>Erreur: {{ error }}</b>
        </div>
        <div id="checkModal">
          <input type="checkbox" id="checkBoxModal" name="checkBoxModal" />
          <label for="checkBoxModal"
            >En cochant la case je m’engage à certifier sur l’honneur ...</label
          >
        </div>
        <!-- Bouton de validation -->
        <v-btn id="buttonMention" type="submit" @click.stop.prevent="voter">
          {{ modalButton }}
        </v-btn>
      </form>
    </modal>

    <!-- Modal de confirmation -->
    <modal-confirmation
      modalText="Votre vote a été pris en compte le:"
      :modalParam="dateNow"
      modalButton="Quitter"
    ></modal-confirmation>
  </div>
</template>

<script>
import modalConfirmation from "./modalConfirmation";
export default {
  name: "modal-mention",
  components: {
    modalConfirmation
  },
  data() {
    return {
      error: "",
      validForm: false,
      afficheConfirmation: false,
      dateNow: "",
      varTest: "Coucou!"
    };
  },
  props: {
    modalText: { type: String },
    modalParam1: { type: String },
    modalParam2: { type: String },
    modalButton: { type: String }
  },
  methods: {
    selectCandidat(index) {
      this.candidateName = this.candidates[index];
      this.showMention();
    },
    showMention() {
      this.$modal.show("mentionModal");
    },
    hideMention() {
      this.$modal.hide("mentionModal");
    },
    showConfirmation() {
      this.$modal.show("confirmationModal");
    },
    getDateNow() {
      const today = new Date();
      const day = today.getDate().toString();
      let month = (today.getMonth() + 1).toString();
      if (month.length < 2) {
        month = "0" + month;
      }
      const heure = today.getHours() + ":" + today.getMinutes() + ":" +today.getSeconds();
      const year = today.getFullYear().toString();
      this.dateNow = day + "/" + month + "/" + year + "  à " + heure;
    },
    voter() {
      const candidat = this.modalParam1;
      this.validForm = document.getElementById("checkBoxModal").checked;
      this.error = "";
      if (!this.validForm) {
        this.error =
          "Vous devez accepter les conditions pour procéder au vote.";
      } else if(this.modalButton == "Voter") {
        console.log("---> A voté pour: " + this.modalParam1);
        this.hideMention();
        this.$http.post("/vote?name=" + candidat).then(
          response => {
            console.log("---> A voté !" + this.modalParam1);
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
        this.getDateNow();
        console.log("===> this.dateNow : " + this.dateNow);
        console.log("===> typeof this.dateNow : " + typeof this.dateNow);
        console.log("===> typeof this.varTest : " + typeof this.varTest);
        this.showConfirmation();
      } else if(this.modalButton == "ACCEDER AUX RESULTATS") {
        this.$router.push('/depouillement/listeDesResultats');
      }
    }
  }
};
</script>

<style>
#modalText {
  margin: 2% 2% 2% 2%;
}
#checkModal {
  margin: 2% 2% 2% 2%;
}
#checkModal > label {
  margin-left: 1%;
}
#buttonMention {
  color: white;
  background-color: #c41919;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
}
#validMention {
  width: 100%;
}
#errorMessage {
  margin-left: 2%;
}
</style>
