<template>
  <div class="TeamsList">
    <div v-if="teams !== null " class="Teams">
    {{ teams[0] }}
      <div v-for="team in teams" :key="team.id">
        <b-card
          :title="team.school"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
          class="mb-2"
        >
          <b-card-text class="ColorsTitle font-weight-bold text-left">Colors</b-card-text>
            <div class="Colors">
              <b-card-text v-if="team.color">
                Primary: <div class="Color" :style="{backgroundColor: team.color}"></div>
              </b-card-text>
              <b-card-text v-if="team.alt_color">
                Alter: <div class="Color" :style="{backgroundColor: team.alt_color}"></div>
              </b-card-text>
            </div>
          <b-button @click="seeTeam(team)" variant="primary">View team</b-button>
        </b-card>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Teams',
  data () {
    return {
      teams: null
    }
  },
  mounted () {
    this.getTeams()
  },
  methods: {
    async getTeams () {
      await axios.get('https://api.collegefootballdata.com/teams').then(response => { this.teams = response.data })
    },
    seeTeam (team) {
      this.$router.push({ path: '/team' })
    }
  }
}
</script>

<style lang="scss" scoped>
.Teams {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.ColorsTitle {
  margin-bottom: 0rem;
  font-size: 1.25rem;
}
.Colors {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .card-text {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }
}
.Color {
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
  text-align: left;
  font-weight: bold;
}
</style>
