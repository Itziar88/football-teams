import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const baseUrl = 'https://api.collegefootballdata.com/teams'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teamsList: []
  },
  mutations: {
    setTeams: (state, teams) => { state.teamsList = teams }
  },
  actions: {
    async fetchTeams ({ commit }) {
      const response = await axios.get(baseUrl)
      commit('setTeams', response.data)
    }
  }
})
