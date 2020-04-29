<template>
  <div>
    <v-app-bar fixed v-if="isLogged">
      <router-link to="/listeDesCandidats">
        <img src="./logo.png" alt="Pull Chain" class="logo" />
      </router-link>
      <v-toolbar-title style="margin-left: 10px"> Poll Chain</v-toolbar-title>
      <v-spacer />
      <CountDown deadline="2020-04-29 23:00:00"></CountDown>
    </v-app-bar>
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import CountDown from "./components/CountDown";

export default {
  components: {
    CountDown
  },
  name: "app",
  data() {
    switch (this.$route.path) {
      case "/depouillement":
        document.querySelector("body").style.background = "#ffffff";
        break;
      case "/":
        document.querySelector("body").style.background = "#ffffff";
        break;
      case "/listOfResults":
        document.querySelector("body").style.background = "#d50000";
        break;
      case "/listeDesCandidats":
        document.querySelector("body").style.background = "#1a237e";
        break;
      case "/depouillement/listeDesResultats":
        document.querySelector("body").style.background = "#d50000";
        break;
      default:
        break;
    }
    return {
      isLogged: !(
        this.$route.path === "/" || this.$route.path === "/depouillement"
      )
    };
  },
  watch: {
    $route: function() {
      // Check if given route is true, if it is then hide Nav.
      switch (this.$route.path) {
        case "/depouillement":
          document.querySelector("body").style.background = "#ffffff";
          this.isLogged = false;
          break;
        case "/":
          document.querySelector("body").style.background = "#ffffff";
          this.isLogged = false;
          break;
        case "/listOfResults":
          document.querySelector("body").style.background = "#d50000";
          this.isLogged = true;
          break;
        case "/listeDesCandidats":
          document.querySelector("body").style.background = "#1a237e";
          this.isLogged = true;
          break;
        case "/depouillement/listeDesResultats":
          document.querySelector("body").style.background = "#d50000";
          this.isLogged = true;
          break;
        default:
          this.isLogged = true;
          break;
      }
    }
  }
};
</script>

<style>
.logo {
  height: 60px;
  margin-left: 10px;
}

.loggedAsVotant {
  background-color: #1a237e;
}

.notLogged {
  background-color: white;
}

.loggedAsDepouilleur {
  background-color: #1a237e;
}
</style>
