<template>
  <div>
    <h1>Liste des candidats</h1>
    <div class="candidatesFlex">
      <div
        v-for="(candidat, index) in candidates"
        :key="candidat.id"
        class="candidate"
      >
        <!-- L'attribut 'name' correspond au nom du composant lié à une route dans index.js -->
        <router-link :to="{ name: 'candidateProgram', params: { id: index } }">
          <img src="../assets/teteCandidat.png" />
        </router-link>
        <p>{{ candidat }}</p>
        <v-btn @click="selectCandidat(index)">{{ buttonSelect }}</v-btn>
        <!-- Modal -->
        <modal name="candidateModal">
          <span
            id="closeButton"
            @click="hide"
            class="mdi mdi-24px mdi-close-circle"
          >
          </span>
          <img id="modalImg" src="../assets/teteCandidat.png" />
          <div id="modalText">
            <p>Vous avez sélectionné "{{ candidateName }}".</p>
            <p>Pour procéder au vote, cliquez sur suivant.</p>
          </div>
          <v-btn id="nextButton">Suivant</v-btn>
        </modal>
      </div>
    </div>
    <router-link to="/">
      <v-btn id="accueilButton">Accueil</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "list-of-candidates",
  data() {
    return {
      candidates: [
        "Canditat A",
        "Canditat B",
        "Canditat C",
        "Canditat D",
        "Canditat E",
        "Canditat F",
        "Canditat G",
        "Canditat H"
      ],
      buttonSelect: "Select",
      candidateName: ""
    };
  },
  methods: {
    selectCandidat(index) {
      this.candidateName = this.candidates[index];
      this.show();
    },
    show() {
      this.$modal.show("candidateModal");
    },
    hide() {
      this.$modal.hide("candidateModal");
    }
  }
};
</script>

<style>
body {
  text-align: center;
  margin: 5% 20% 0 20%;
}

.candidatesFlex {
  margin: 5% 20% 0 20%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.candidate {
  margin-bottom: 8%;
}

#accueilButton {
  margin: 4% 0 5% 0;
  color: white;
  background-color: #6ab86a;
}

#accueilButton:hover {
  color: #6ab86a;
  background-color: white;
  border: 1px solid #6ab86a;
}

a {
  text-decoration: none;
}
#closeButton {
  color: tomato;
  float: right;
  margin: 1% 1% 0 0;
}
#closeButton:hover {
  cursor: pointer;
}
#modalText {
  text-align: center;
  margin-top: 2%;
}
#modalImg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7%;
}
#nextButton {
  float: right;
  color: white;
  background-color: #6ab86a;
  margin: 0 1% 1% 0;
}
.v--modal {
  height: 50% !important;
}
</style>
