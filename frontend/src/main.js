import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)
Vue.use(Vuetify)
const router = new VueRouter({routes})

new Vue({
  router,
}).$mount('#app')
