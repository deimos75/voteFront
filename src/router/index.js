import Vue from "vue";
import VueRouter from "vue-router";
import formLogin from "../components/formLogIn";
import listOfCandidates from "../components/listOfCandidates";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
