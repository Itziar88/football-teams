<template>
  <div class="Teams">
    <div v-if="teams.length !== 0">
      <div
        v-for="team in teams"
        :key="team.id"
      >
        <b-card
          :title="team.school"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        {{ teams }}
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
    }
  }
}
</script>
