<template>
  <div class="TeamCard">
    <div class="Title mb-2">
      <b-card-title :title="school" />
      <img v-if="isFavourite" :src="star">
    </div>
    <img :src="logos !== null ? logos[0] : ''" @error="imageUrlAlt" class="Logo mb-4">
    <b-card-sub-title sub-title="Colours" class="Subtitle font-weight-bold text-left mb-3" />
    <div  v-if="color || alt_color" class="Colours mb-2">
      <b-card-text v-if="color">
        Primary: <div class="Colour" :style="{backgroundColor: color}"></div>
      </b-card-text>
      <b-card-text v-if="alt_color" class="ml-2">
        Alternative: <div class="Colour" :style="{backgroundColor: alt_color}"></div>
      </b-card-text>
    </div>
    <b-card-text v-else class="mb-3 text-left">There are no colors</b-card-text>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import star from '@/assets/star.png'

export default {
  name: 'TeamCard',
  props: {
    id: VueTypes.number.isRequired,
    school: VueTypes.string.def(''),
    color: VueTypes.string.def(''),
    alt_color: VueTypes.string.def(''),
    logos: VueTypes.arrayOf(VueTypes.string)
  },
  data () {
    return {
      star
    }
  },
  computed: {
    isFavourite () {
      return Object.keys(localStorage).map(item => (Number(item))).includes(this.id)
    }
  },
  methods: {
    imageUrlAlt (event) {
      event.target.src = 'https://fakeimg.pl/300x300/?text=No image'
    }
  }
}
</script>

<style lang="scss" scoped>
.Team {
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }
}
.Logo {
  width: 150px;
  height: 150px;
}
.Title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    height: 20px;
    width: 20px;
    margin-left: 0.5rem;
  }
}
.Subtitle {
  margin-bottom: 0rem;
  font-size: 1.25rem;
}
.Colours {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .card-text {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }
}
.Colour {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  border: 1px solid rgba(black, 0.3);
  text-align: left;
  font-weight: bold;
}
</style>
