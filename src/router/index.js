import Vue from "vue";
import VueRouter from "vue-router";
import HerbList from "../components/HerbList";
import SelectedHerb from "../components/SelectedHerb";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "HerbList", component: HerbList },
  { path: "/:id", name: "SelectedHerb", component: SelectedHerb },
];

const router = new VueRouter({
  routes,
});

export default router;
