import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Suppliers from './components/Suppliers.vue'
import Map from './components/Map.vue'



Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/suppliers', component: Suppliers},
  { path: '/map', component: Map}
];

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

