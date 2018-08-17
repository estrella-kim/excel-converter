import Vue from 'vue'
import VueRouter from 'vue-router'
import { NavigationBar } from '../components/index'
import { Home,registerEvent, login } from "../pages/index"



const routes = [
  {
    path : '/',
    name : 'Home',
    components : {
      navigation: NavigationBar,
      contents: Home
    }
  },
  {
    path : "/register",
    name : 'registerEvent',
    components : {
      navigation: NavigationBar,
      contents: registerEvent
    }
  },
  {
    path : "/login",
    name : "login",
    components : {
      navigation: NavigationBar,
      contents: login
    }
  }
]

Vue.use(VueRouter);


const router = new VueRouter({
  mode : 'history',
  routes
})

export default router;
