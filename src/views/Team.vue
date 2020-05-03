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

export default {
  name: 'Team',
  data () {
    return {
      team: null
    }
  },
  methods: {
    back () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
