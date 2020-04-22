<template>
  <div>
    <modal name="confirmationModal">
      <!-- Bouton de fermeture -->
      <span
        id="closeButton"
        @click="hideConfirmation"
        class="mdi mdi-24px mdi-close-circle"
      >
      </span>

      <!-- Corps de la modale -->
      <div id="modalText">
        <p>{{ modalText }}</p>
        <p>{{ modalParam }}</p>
      </div>

      <!-- Bouton pour quitter -->
      <v-btn id="buttonConfirmation" @click="hideConfirmation">
        {{ modalButton }}
      </v-btn>
    </modal>
  </div>
</template>

<script>
export default {
  name: "modal-confirmation",
  props: {
    modalText: { type: String },
    modalParam: { type: String },
    modalButton: { type: String }
  },
  methods: {
    showConfirmation() {
      this.$modal.show("confirmationModal");
    },
    hideConfirmation() {
      this.$modal.hide("confirmationModal");
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
#buttonConfirmation {
  color: white;
  background-color: #c41919;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
}
</style>
