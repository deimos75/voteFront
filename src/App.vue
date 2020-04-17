<template>
  <form-log-in></form-log-in>
</template>

<script>
import formLogIn from "./components/formLogIn";
import Vue from "../node_modules/vue/dist/vue";
import Vuetify from "../node_modules/vuetify";
import "../node_modules/vuetify/dist/vuetify";

Vue.use(Vuetify);

export default {
  components: {
    formLogIn
  }
};
</script>

<style></style>
