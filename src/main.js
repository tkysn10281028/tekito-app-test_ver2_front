import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios"; //追記
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
