<template>
  <div class="Team">
    Team
    <div v-if="team !== null">
      {{ team }}
    </div>
    <div v-else>
      Loading...
    </div>
    <b-button @click="back" variant="primary">Back</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Team',
  data () {
    return {
      team: null
    }
  },
  created () {
    const { id } = this.$route.query
    axios
      .get(`https://api.collegefootballdata.com/teams/${id}`)
      .then(response => {
        this.team = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    back () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
