import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AppProducts from '../components/AppProducts.vue'
import AppCustomers from '../components/AppCustomers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/customers',
    name: 'AppCustomers',
    component: AppCustomers
  },
  {
    path: '/products',
    name: 'AppProducts',
    component: AppProducts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
