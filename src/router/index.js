import Vue from 'vue'
import VueRouter from 'vue-router'
import Beers from '../views/Beers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beers',
    component: Beers
  },
  {
    path: '/add-beer',
    name: 'AddBeer',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/AddBeer.vue')
  },
  { path: '*', component: Beers }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
