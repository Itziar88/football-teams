<template>
  <div class="FavouriteTeams">
    <h1>Favourite Teams</h1>
    <!-- <b-form-input v-model="text" placeholder="Search by school"></b-form-input>
    <b-button @click="filter(text)" variant="primary">filter</b-button> -->

    <div v-if="favouriteTeams.length !== 0" class="Wrapper">
      <b-button @click="reverse" variant="info">reverse</b-button>
      <div class="Teams">
        <b-card
          v-for="(team, index) in favouriteTeams" :key="index"
          tag="article"
          style="width: 20rem; min-height: 22rem;"
          class="mb-2 shadow"
        >
          <div class="Body mb-2">
            <TeamCard v-bind="team"></TeamCard>
            <b-card-sub-title sub-title="Comments" class="Subtitle font-weight-bold text-left" />
            <div v-for="(comment, index) in favouriteTeamsStorage" :key="index">
              <b-card-text v-if="Number(comment[0]) === team[0].id" class="text-left">
                {{ comment[1] === '' ? 'There aren\'t any comments yet about this team' : comment[1]}}
              </b-card-text>
            </div>
          </div>
          <div class="Actions">
            <b-button @click="seeTeam(team[0].id)" variant="info">View team</b-button>
            <b-button @click="removeFav(team[0].id)" variant="info">Remove</b-button>
          </div>
        </b-card>
      </div>
    </div>
    <b-alert v-else show variant="dark mt-4">There are no favourite teams yet</b-alert>
  </div>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue'

export default {
  name: 'FavouriteTeams',
  components: { TeamCard },
  data () {
    return {
      favouriteTeamsStorage: null,
      teams: null,
      favouriteTeams: null,
      text: ''
    }
  },
  created () {
    // Array de arrays 'id','nota' de equipos favoritos guardados
    this.favouriteTeamsStorage = Object.entries(localStorage).filter(item => item[0] !== 'loglevel:webpack-dev-server')
    // todos los equipos de la api almacenados en la store
    this.teams = this.$store.state.teamsList
    this.favouriteTeams = this.checkFavouriteTeams
  },
  computed: {
    checkFavouriteTeams () {
      // id de los equipos de favoritos
      const idFavourites = this.favouriteTeamsStorage.map(item => Number(item[0]))
      // Buscar los equipos que coincidan con esos id de favoritos
      return idFavourites.map(idFavourite => { return this.teams.filter(team => team.id === idFavourite) })
    }
  },
  methods: {
    seeTeam (id) {
      this.$router.push({ path: '/team', query: { id } })
    },
    removeFav (id) {
      localStorage.removeItem(id)
    },
    reverse () {
      this.favouriteTeams.reverse()
    },
    filter (value) {
      this.favouriteTeams = this.favouriteTeams.filter(item => (item[0].school.toLowerCase().includes(value)))
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
}
.Actions {
  display: flex;
  justify-content: space-evenly;
  .btn {
    margin-bottom: 0rem;
  }
}
</style>
