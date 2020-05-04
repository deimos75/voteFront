import Vue from "vue";
import VueRouter from "vue-router";
import listOfCandidates from "../components/listOfCandidates";
import candidateProgram from "../components/candidateProgram";
import listCounting from "../components/listOfResults";
import resultats from "../components/resultats";
import ConnexionVotant from "../components/ConnexionVotant";
import ConnexionDepouilleur from "../components/ConnexionDepouilleur";
import chart from "../components/chart";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ConnexionVotant",
    component: ConnexionVotant
  },
  {
    path: "/listeDesCandidats",
    name: "listOfCandidates",
    component: listOfCandidates
  },
  {
    path: "/programmeCanditat/:id",
    name: "candidateProgram",
    component: candidateProgram
  },
  {
    path: "/depouillement",
    name: "ConnexionDepouilleur",
    component: ConnexionDepouilleur
  },
  {
    path: "/depouillement/listeDesResultats",
    name: "listCounting",
    component: listCounting
  },
  {
    path: "/resultats",
    name: "resultats",
    component: resultats
  },
  {
    path: "/chart",
    name: "chart",
    component: chart
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
