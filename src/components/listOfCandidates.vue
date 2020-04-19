<template>
  <div>
    <h1>Liste des candidats</h1>
    <div class="candidatesFlex">
      <div
        v-for="(candidat, index) in candidates"
        :key="candidat.id"
        class="candidate"
      >
        <router-link :to="{name: 'candidateProgram', params: {id: index}}">
          <img src="../assets/teteCandidat.png" />
        </router-link>
        <p>{{ candidat }}</p>
      </div>
    </div>
    <router-link to="/">
      <v-btn id="accueilButton" type="submit">Accueil</v-btn>
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
      idDynamic: "/programmeCanditat/id=" + this.index
    };
  },
  idParam() {
    console.log("---> Indice = " + this.index);
    return "/programmeCanditat/id=" + this.index;
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
</style>
