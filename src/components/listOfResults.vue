<template>
  <div>
    <h1>Liste des résultats</h1>
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
        <p>{{ candidat.name }}</p>
        <p> Résultat : {{ candidat.nombre }} </p>
        <p> {{ formatTaux(candidat.taux) }} % </p>
      </div>
    </div>
    <router-link to="/depouillement">
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
        {name : "Candidat A", nombre: "0" , taux: 0},
        {name : "Candidat B", nombre: "0" , taux: 0},
        {name : "Candidat C", nombre: "0" , taux: 0},
        {name : "Candidat D", nombre: "0" , taux: 0},
        {name : "Candidat E", nombre: "0" , taux: 0},
        {name : "Candidat F", nombre: "0" , taux: 0},
        {name : "Candidat G", nombre: "0" , taux: 0},
        {name : "Candidat H", nombre: "0" , taux: 0}
      ],
      buttonSelect: "Select",
      candidateName: "",
      candidats: []
    };
  },
  methods: {
    getVotes() {
    this.totalVote = 0;
    this.$http
      .get("/getVoteStats")
      .then(response => {
      return response.data;
      })
      .then(fetchedData => {
      const voteState = fetchedData;
      console.log(voteState);
      for (let voteStateKey of voteState) {
        this.totalVote += voteStateKey.obtenu;
      }
      console.log(this.totalVote);
        for (let stat of voteState) {
            this.candidats.push({
            voteFor: stat.voteFor,
            obtenu: stat.obtenu,
            taux: (stat.obtenu * 100.0) / this.totalVote
        });
        console.log("init: ", this.candidates);
        for (let item of this.candidates){
          // console.log("item", item.nombre);
          //   console.log("candidats", this.candidats[0].voteFor);
          for(let index of this.candidats){
            if (index.voteFor == item.name) {
              console.log("Yohan");
              console.log("index", index.voteFor);
              console.log("index", item.name);
              // console.log(item);
              // console.log("item", item.nombre);
              // console.log("candidats", index.obtenu);
              item.nombre = index.obtenu;
              item.taux = index.taux;
            }
          }
        }       
      }
      console.log(this.candidates);
      });
    },
    formatTaux(val){
      return val.toFixed(2);
    }
  },
  beforeMount(){
    this.getVotes();
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
