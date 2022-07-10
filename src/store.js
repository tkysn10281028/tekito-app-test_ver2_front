import Vue from "vue";
import Vuex from "vuex";
import vuexPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
function getDefaultState() {
  return {
    login: null,
  };
}

// ストアの定義
const store = new Vuex.Store({
  plugins: [
    vuexPersistedState({
      key: "tekito-app",
      paths: ["login"],
      storage: window.sessionStorage,
    }),
  ],
  // ステート、ミューテーションなどをここに記載
  state: getDefaultState,
  getters: {
    getLogin(state) {
      return state.login;
    },
  },
  mutations: {
    setLogin(state, val) {
      state.login = val;
    },
  },
});

// ストアをエクスポート
export default store;
