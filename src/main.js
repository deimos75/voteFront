import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VModal from "vue-js-modal";
import "@mdi/font/css/materialdesignicons.css";
import VuetifyLib from "vuetify/lib";
import API from "./api";
Vue.prototype.$http = API;

Vue.use(VModal);
Vue.use(VuetifyLib);

export default new VuetifyLib({
  icons: {
    iconfont: "mdi" // default - only for display purposes
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
