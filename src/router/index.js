import Vue from 'vue'
import VueRouter from 'vue-router'
import Teams from '../views/Teams.vue'
import FavouriteTeams from '@/views/FavouriteTeams.vue'
import Team from '@/views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/favouriteTeams',
    name: 'Favourite Teams',
    component: FavouriteTeams
  },
  {
    path: '/team',
    query: '/:id',
    name: 'View Team',
    component: Team
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
