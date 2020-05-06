<template>
  <div class="Team">
    <!-- {{ teamInfo }} -->
    <h1>{{ teamInfo.school }}</h1>
    <!-- <img :src="logos !== null ? logos[0] : ''" @error="imageUrlAlt" class="Logo mr-4"> -->
    <div class="Wrapper border border-info rounded-lg p-4 mb-4">
      <img src="https://fakeimg.pl/300x300/?text=No image" class="mr-4" style="width: 300px; height: 300px;">
      <div class="WrapperInfo">
        <div class="Info">
          <h4>Mascot: </h4>
          <p>{{ teamInfo.mascot || 'There is no mascot' }}</p>
        </div>
        <div class="Info">
          <h4>Abbreviation: </h4>
          <p>{{ teamInfo.abbreviation || 'There is no abbreviation name' }}</p>
        </div>

        <div class="Info">
          <h4>Alternative names: </h4>
          <div v-if="teamInfo.alt_name1 || teamInfo.alt_name2 || teamInfo.alt_name3" class="WrapperAlternativeNames">
            <p>{{ teamInfo.alt_name1 }}</p>
            <p>{{ teamInfo.alt_name2 }}</p>
            <p>{{ teamInfo.alt_name3 }}</p>
          </div>
          <p v-else>There are no alternative names</p>
        </div>

        <div class="Info">
          <h4>Conference: </h4>
          <p>{{ teamInfo.conference || 'There is no conference'}}</p>
        </div>

        <div class="Info">
          <h4>Division: </h4>
          <p>{{ teamInfo.division || 'There is no division'}}</p>
        </div>

        <div class="Info">
          <h4>Colors: </h4>
          <div v-if="teamInfo.color || teamInfo.alt_color">
            <span v-if="teamInfo.color" class="WrapperColor">Primary: <div class="Color" :style="{backgroundColor: teamInfo.color}"></div></span>
            <span v-if="teamInfo.alt_color" class="WrapperColor">Alternative:  <div class="Color" :style="{backgroundColor: teamInfo.alt_color}"></div></span>
          </div>
          <p v-else>There are no colors</p>
        </div>
      </div>
    </div>
    <b-form-textarea
        v-if="isFavorite"
        id="textarea"
        v-model="comment"
        placeholder="You can add a note about your team"
        rows="3"
        max-rows="6"
        class="mb-3"
      ></b-form-textarea>

    <div class="FavouriteActions text-left mb-2">
      <b-button v-if="!isFavorite" @click="isFavorite = true" variant="info">Add to favourites</b-button>
      <b-button v-if="isFavorite" @click="saveFav(teamInfo.id, comment)" variant="info mr-2">Save</b-button>
      <b-button v-if="isFavorite" @click="removeFav(teamInfo.id)" variant="info">Remove from favourites</b-button>
    </div>
    <div class="BackActions">
      <b-button @click="backTeams" variant="info mr-2">Back to Teams</b-button>
      <b-button @click="backFavourites" variant="info">Back to Favourites</b-button>
    </div>

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
    },
    imageUrlAlt (event) {
      event.target.src = 'https://fakeimg.pl/300x300/?text=No image'
    }
  }
}
</script>

<style lang="scss" scoped>
.Team {
  max-width: 810px;
  margin: auto !important;
  margin-bottom: 3rem !important;
}
.Wrapper {
  display: flex;
  flex-direction: row;
}
.Logo {
  height: 300px;
  width: 300px;
}
.WrapperInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
.Info {
  display: flex;
  align-items: baseline;
  h4, p {
    margin-bottom: 0rem;
    text-align: left;
  }
  h4 {
    margin-right: 0.5rem;
  }
}
.WrapperColor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.Color {
  width: 20px;
  height: 20px;
  margin-left: 1rem;
  border: 1px solid rgba(black, 0.3);
}
.BackActions {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
</style>
