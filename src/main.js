import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios"; //追記
import axios from "axios";
import Vuex from "vuex";
import store from "./store";
import VModal from "vue-js-modal";

Vue.use(Vuex);
Vue.use(VModal);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
