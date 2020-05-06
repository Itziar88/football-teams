<template>
  <div class="TeamsList">
    <h1>Teams List</h1>
    <div v-if="teams.length !== 0" class="Wrapper">
      <b-button @click="reverse" variant="info">Reverse</b-button>
      <div class="Teams">
        <b-card
          v-for="team in teams" :key="team.id"
          tag="article"
          style="width: 20rem; min-height: 22rem;"
          class="mb-4 shadow"
        >
          <TeamCard v-bind="team"></TeamCard>
          <b-button @click="seeTeam(team.id)" variant="info">View team</b-button>
        </b-card>
      </div>
    </div>
    <b-alert v-else show variant="info mt-4">Loading...</b-alert>
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
      filteredTeams: null
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
    },
    reverse () {
      this.teams.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  .btn {
    align-self: flex-end;
    margin-bottom: 1.5rem;
  }
}
.Teams {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  article .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btn {
    align-self: center;
    margin-bottom: 0rem;
  }
}
</style>
