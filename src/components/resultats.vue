<template>
  <div>
    <V-btn @click="voteFor('Macron')">Voter Macron</V-btn>
    <V-btn @click="voteFor('Holland')">Voter Holland</V-btn>
    <V-btn @click="voteFor('Sarkozy')">Voter Sarkozy</V-btn>
    <V-btn @click="getVotes">Resultat</V-btn>

    <div>
      <div class="text-center">
        <v-progress-circular
          :value="100"
          color="blue-grey"
        ></v-progress-circular>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resultats",
  data() {
    return {
      totalVote: 0,
      candidats: []
    };
  },
  methods: {
    voteFor(candidat) {
      // POST /someUrl
      this.$http.post("/vote?name=" + candidat).then(
        response => {
          // get status
          console.log(response);
        },
        error => {
          // error callback
          console.log(error);
        }
      );
    },
    getVotes() {
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
          }
          console.log(this.candidats);
        });
    }
  }
};
</script>

<style scoped></style>