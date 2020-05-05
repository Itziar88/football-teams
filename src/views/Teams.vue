<template>
  <div class="TeamsList">
    <h1>Teams List</h1>
    <div v-if="teams.length !== 0 " class="Teams">
      <div v-for="team in teams" :key="team.id">
        <b-card
          tag="article"
          style="width: 20rem; min-height: 22rem;"
          class="mb-2"
        >
          <TeamCard v-bind="team"></TeamCard>
          <b-button @click="seeTeam(team.id)" variant="primary">View team</b-button>
        </b-card>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TeamCard from '@/components/TeamCard.vue'

export default {
  name: 'Teams',
  components: {
    TeamCard
  },
  data () {
    return {
      favouriteTeams: null
    }
  },
  computed: {
    ...mapState({
      teams: state => state.teamsList
    })
  },
  methods: {
    seeTeam (id) {
      this.$router.push({ path: '/team', query: { id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.Teams {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  article .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
