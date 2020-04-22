import Vue from "vue";
import VueRouter from "vue-router";
import formLogin from "../components/formLogIn";
import listOfCandidates from "../components/listOfCandidates";
import candidateProgram from "../components/candidateProgram";
import formLoginCounting from "../components/formLogInCounting";
import listCounting from "../components/listOfResults";
import resultats from "../components/resultats";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "formLogin",
    component: formLogin
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
    name: "formLoginCounting",
    component: formLoginCounting
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
  }
];

const router = new VueRouter({
  routes
});

export default router;
