import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MedianIncome from "../views/MedianIncome.vue";
import PopulationInMetroArea from "../views/PopulationInMetroArea.vue";
import PopulationWithHighSchoolDiploma from "../views/PopulationWithHighSchoolDiploma.vue";
import Unemployment from "../views/Unemployment.vue";
import VueGoogleCharts from "vue-google-charts";

Vue.use(VueGoogleCharts);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/MedianIncome",
    name: "Median Income",
    component: MedianIncome,
  },
  {
    path: "/PopulationInMetroArea",
    name: "Population in Metro Areas",
    component: PopulationInMetroArea,
  },
  {
    path: "/PopulationWithHighSchoolDiploma",
    name: "Population with High School Diploma",
    component: PopulationWithHighSchoolDiploma,
  },
  {
    path: "/Unemployment",
    name: "Unemployment",
    component: Unemployment,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
