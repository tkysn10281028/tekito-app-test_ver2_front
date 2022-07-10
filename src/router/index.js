import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import NextPage from "../views/NextPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/next",
    name: "NextPage",
    component: NextPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
