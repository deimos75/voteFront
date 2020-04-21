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

    <a
      :href="file.url"
      v-text="file.label"
      @click.prevent="downloadItem(file)"
    />
    <br />
    <a href="./testProgrammeCandidat.pdf" download target="_blank">
      Télécharger le programme TEST!
    </a>
    <a href="./../assets/testProgrammeCandidat.pdf" download target="_blank">
      <v-btn id="downloadProgram" outlined>Télécharger le programme</v-btn>
    </a>
    <br />
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
      candidateNumber: parseInt(this.$route.params.id) + 1,
      file: {
        url: "/#/../assets/testProgrammeCandidat.pdf",
        label: "programme.pdf"
      }
    };
  },
  methods: {
    downloadItem({ url, label }) {
      this.$http
        .get(url, { responseType: "blob" })
        .then(response => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = label;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    }
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
