<template>
  <div>
    <v-app-bar absolute v-if="isLogged">
      <router-link to="/listeDesCandidats">
        <img src="./logo.png" alt="Pull Chain" class="logo">
      </router-link>
      <v-toolbar-title style="margin-left: 10px"> Poll Chain</v-toolbar-title>
    </v-app-bar>
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      isLogged: false
    };
  },
  watch: {
    $route: function() {
      // Check if given route is true, if it is then hide Nav.
      if (this.$route.path === "/" || this.$route.path === "/depouillement") {
        this.isLogged = false;
      } else  {
        this.isLogged = true;
      }
    }
  },

}
</script>

<style>
  .logo {
    height: 60px;
    margin-left: 10px;
  }
</style>
