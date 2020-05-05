<template>
  <div class="Team">
    Team
    {{ teamInfo }}
    <br>
      <b-form-textarea
        v-if="isFavorite"
        id="textarea"
        v-model="comment"
        placeholder="You can add a note about your team"
        rows="3"
        max-rows="6"
      ></b-form-textarea>

    <b-button v-if="!isFavorite" @click="isFavorite = true" variant="primary">Add to favourites</b-button>
    <b-button v-if="isFavorite" @click="saveFav(teamInfo.id, comment)" variant="primary">Save</b-button>
    <b-button v-if="isFavorite" @click="removeFav(teamInfo.id)" variant="primary">Remove</b-button>
    <br>
    <b-button @click="backTeams" variant="primary">Back to Teams</b-button>
    <b-button @click="backFavourites" variant="primary">Back to Favourites</b-button>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Team',
  data () {
    return {
      comment: '',
      isFavorite: false
    }
  },
  mounted () {
    const id = this.teamInfo.id
    const newComment = localStorage.getItem(id)
    this.comment = newComment
    this.isFavorite = !!Object.keys(localStorage).map(item => (Number(item))).includes(id)
  },
  computed: {
    ...mapState({
      teamsList: state => state.teamsList
    }),
    teamInfo () {
      return this.teamsList.find(team => team.id === this.$route.query.id)
    }
  },
  watch: {
    comment (newComment) {
      this.comment = newComment
    }
  },
  methods: {
    backTeams () {
      this.$router.push({ path: '/' })
    },
    backFavourites () {
      this.$router.push({ path: '/favouriteTeams' })
    },
    saveFav (id, newComment) {
      if (newComment === null) {
        newComment = ''
      }
      localStorage.setItem(id, newComment)
    },
    removeFav (id) {
      localStorage.removeItem(id)
      this.isFavorite = false
      this.comment = ''
    }
  }
}
</script>
