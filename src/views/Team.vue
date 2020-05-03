<template>
  <div class="Team">
    Team
    {{ teamInfo }}
    <b-button @click="saveFav(teamInfo.id)" variant="primary">Fav</b-button>
    <b-button @click="back" variant="primary">Back</b-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Team',
  computed: {
    ...mapState({
      teamsList: state => state.teamsList
    }),
    teamInfo () {
      return this.teamsList.find(team => team.id === this.$route.query.id)
    }
  },
  methods: {
    back () {
      this.$router.push({ path: '/' })
    },
    saveFav (id) {
      this.$emit('fav', id)
    }
  }
}
</script>
