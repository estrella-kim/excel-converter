import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from './router'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'babel-polyfill'


Vue.use(VueRouter)
Vue.use(Vuetify,{
  iconfont : 'mdi'
})

const router = new VueRouter({routes})

new Vue({
  router,
}).$mount('#app')
