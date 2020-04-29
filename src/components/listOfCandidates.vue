<template>
  <div class="listOfCandidatesBody">
    <h1>Liste des candidats</h1>
    <div class="candidatesFlex">
      <!-- Boucle sur les candidats -->
      <div
        v-for="(candidat, index) in candidates"
        :key="index"
        class="candidate"
      >
        <!-- L'attribut 'name' correspond au nom du composant lié à une route dans index.js -->
        <router-link :to="{ name: 'candidateProgram', params: { id: index } }">
          <img src="../assets/teteCandidat.png" />
        </router-link>
        <p>{{ candidat }}</p>
        <v-btn @click="selectCandidat(index)" style="background-color: #1a237e; color: white;">{{ buttonSelect }}</v-btn>

        <!-- Modale de séléction du candidat -->
        <modal name="candidateModal">
          <span
            id="closeButton"
            @click="hideCandidate"
            class="mdi mdi-24px mdi-close-circle"
          >
          </span>
          <img id="modalImg" src="../assets/teteCandidat.png" />
          <div id="modalCandidate">
            <p>Vous avez sélectionné "{{ candidateName }}".</p>
            <p>Pour procéder au vote, cliquez sur suivant.</p>
          </div>
          <v-btn id="nextButton" @click="nextButton">Suivant</v-btn>
        </modal>
      </div>
    </div>

    <!-- Modale de mention légale et de vote -->
    <modal-mention
      :modalText="mentionEtVote"
      :modalParam1="candidateName"
      :modalParam2="candidateDescription"
      modalButton="Voter"
    ></modal-mention>
  </div>
</template>

<script>
import modalMention from "./modalMention";
export default {
  name: "list-of-candidates",
  components: {
    modalMention
  },
  data() {
    return {
      candidates: [
        "Candidat A",
        "Candidat B",
        "Candidat C",
        "Candidat D",
        "Candidat E",
        "Candidat F",
        "Candidat G",
        "Candidat H"
      ],
      buttonSelect: "Select",
      candidateName: "",
      mentionEtVote:
        "Mention Légales : Vous allez par la présente attribuer votre vote à",
      candidateDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  },
  methods: {
    selectCandidat(index) {
      this.candidateName = this.candidates[index];
      this.showCandidate();
    },
    showCandidate() {
      this.$modal.show("candidateModal");
    },
    hideCandidate() {
      this.$modal.hide("candidateModal");
    },
    showMention() {
      this.$modal.show("mentionModal");
    },
    hideMention() {
      this.$modal.hide("mentionModal");
    },
    nextButton() {
      this.hideCandidate();
      this.showMention();
    }
  }
};
</script>

<style scoped>
body {
  text-align: center;
  margin: 5% 20% 0 20%;
  background-color: #1a237e;
}
.listOfCandidatesBody{
  background-color: white;
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
#modalCandidate {
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
