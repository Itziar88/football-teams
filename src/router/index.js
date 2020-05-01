import Vue from 'vue'
import VueRouter from 'vue-router'
import Teams from '../views/Teams.vue'
import FavouriteTeams from '@/views/FavouriteTeams.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/favouriteTeams',
    name: 'FavouriteTeams',
    component: FavouriteTeams
  }
]

const router = new VueRouter({
  routes
})

export default router
