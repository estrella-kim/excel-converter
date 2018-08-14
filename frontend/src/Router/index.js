import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home,registerEvent } from "../Pages/index"

const routes = [
  {
    path : '/',
    Component : Home
  },
  {
    path : "/register",
    Component : registerEvent
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes : routes
});

export default router;
