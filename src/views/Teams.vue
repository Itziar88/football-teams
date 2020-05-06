<template>
  <div class="TeamsList">
    <h1>Teams List</h1>
    <div v-if="teams.length !== 0" class="Wrapper">
      <b-button @click="reverse" variant="info">Reverse</b-button>
      <div class="row">
        <div class="Teams col-12 col-sm-6 col-md-4 col-lg-3" v-for="team in teams" :key="team.id">
          <b-card
            tag="article"
            style="height: 26rem;"
            class="mb-3 shadow"
          >
            <TeamCard v-bind="team"></TeamCard>
            <b-button @click="seeTeam(team.id)" variant="info">View team</b-button>
          </b-card>
        </div>
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
