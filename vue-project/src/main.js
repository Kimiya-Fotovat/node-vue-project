import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//Vue-Router
import {routes} from './routes'
const router = new VueRouter({
  routes,
})

//Vuex
import {store} from './store/store'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
