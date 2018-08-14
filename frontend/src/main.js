import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { routes } from './Router/index'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})
