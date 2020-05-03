<template>
  <div class="TeamsList">
    <div v-if="teams.length !== 0 " class="Teams">
      <div v-for="team in teams" :key="team.id">
      <!-- {{ team.logos }} -->
        <b-card
          :title="team.school"
          tag="article"
          style="width: 20rem; height: 25rem;"
          class="Team mb-2"
          @error="imageUrlAlt"
        >
          <img :src="team.logos !== null ? team.logos[0] : ''" @error="imageUrlAlt" class="Logo">
          <b-card-text class="ColorsTitle font-weight-bold text-left">Colors</b-card-text>
            <div class="Colors">
              <b-card-text v-if="team.color">
                Primary: <div class="Color" :style="{backgroundColor: team.color}"></div>
              </b-card-text>
              <b-card-text v-if="team.alt_color">
                Alter: <div class="Color" :style="{backgroundColor: team.alt_color}"></div>
              </b-card-text>
            </div>
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

export default {
  name: 'Teams',
  computed: {
    ...mapState({
      teams: state => state.teamsList
    })
  },
  methods: {
    seeTeam (id) {
      this.$router.push({ path: '/team', query: { id } })
    },
    imageUrlAlt (event) {
      event.target.src = 'https://picsum.photos/600/300/?image=25'
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
.Logo {
  width: 200px;
  height: 200px;
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
