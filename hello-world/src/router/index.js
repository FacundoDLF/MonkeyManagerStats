import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/start',
    name: 'Start',
    component: () => import('../views/Start.vue')
  },
  {
  path: '/MVPbyTech',
  name: 'MVPbyTech',
  component: () => import('../views/MVPbyTech.vue')
  },
  {
  path: '/AverageAges',
  name: 'AverageAges',
  component: () => import('../views/AverageAges.vue')
  },
  {
    path: '/PlayersByCouch',
    name: 'PlayersByCouch',
    component: () => import('../views/PlayersByCouch.vue')
  },
  {
    path: '/rankingTechnicians',
    name: 'rankingTechnicians',
    component: () => import('../views/RankingTechnicians.vue')
  },
  {
    path: '/OldestTeams',
    name: 'OldestTeams',
    component: () => import('../views/OldestTeams.vue')
  },
  {
    path: '/listOfClubs',
    name: 'listOfClubs',
    component: () => import('../views/listOfClubs.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
