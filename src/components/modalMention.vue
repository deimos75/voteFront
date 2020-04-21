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
      <div id="checkModal">
        <input
          type="checkbox"
          id="checkBoxModal"
          name="checkBoxModal"
          @click="changeCheckModal"
        />
        <label for="checkBoxModal"
          >En cochant la case je m’engage à certifier sur l’honneur ...</label
        >
      </div>

      <!-- Bouton de validation -->
      <v-btn id="buttonMention" @click="voter" :disabled="checkBoxDisabled">
        {{ modalButton }}
      </v-btn>
    </modal>
  </div>
</template>

<script>
export default {
  name: "modal-mention",
  created() {
    console.log("---> created()");
  },
  data() {
    return {
      checkBoxDisabled: true
    };
  },
  props: {
    modalText: { type: String },
    modalParam1: { type: String },
    modalParam2: { type: String },
    modalButton: { type: String }
    //checkBoxDisabled //{ type: Boolean, default: true }
  },
  methods: {
    selectCandidat(index) {
      this.candidateName = this.candidates[index];
      this.show();
    },
    showMention() {
      this.$modal.show("mentionModal");
    },
    hideMention() {
      this.$modal.hide("mentionModal");
    },
    voter() {
      console.log("---> A voté !");
    },
    changeCheckModal() {
      if (this.checkBoxDisabled) {
        this.checkBoxDisabled = false;
      } else {
        this.checkBoxDisabled = true;
      }
    }
  },
  inject: ["checkBoxDisabled"]
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
</style>
