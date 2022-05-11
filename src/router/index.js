import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Courses from "../views/Courses.vue";
import Jobs from "../views/Jobs.vue";
import Services from "../views/Services.vue";
import Blog from "../views/Blog.vue";
import Help from "../views/Help.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path : "/Courses",
    name : "Courses",
    component : Courses,
  },
  {
    path : "/Jobs",
    name : "Jobs",
    component : Jobs,
  },
  {
    path : "/Services",
    name : "Services",
    component : Services,
  },
  {
    path : "/Blog",
    name : "Blog",
    component : Blog,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path : "/Help",
    name : "Help",
    component : Help,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
