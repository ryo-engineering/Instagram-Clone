import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./src/pages/Home.vue";
import UserDetail from "./src/pages/UserDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail",
    name: "detail",
    component: UserDetail,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
