<template>
  <div>
    <h1>Programme du candidat {{ candidateNumber }}</h1>
    <p id="detailProgram">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <v-btn id="downloadProgram" outlined>Télécharger le programme</v-btn><br />
    <router-link to="/listeDesCandidats">
      <v-btn id="accueilButton" type="">Liste des candidats</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "candidate-program",
  data() {
    return {
      candidateNumber: parseInt(this.$route.params.id) + 1
    };
  }
};
</script>

<style>
h1 {
  margin-bottom: 5%;
}
#detailProgram {
  margin: 0 15% 0 15%;
  text-align: left;
}
#downloadProgram {
  margin-top: 5%;
  color: red;
}
</style>
