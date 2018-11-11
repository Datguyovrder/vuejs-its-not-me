<template>
  <div class="home">
    <!-- <h1>everything: {{ everything }}</h1> -->
    <h1>participations: {{ participations }}</h1>
    <h1>game round: {{ everything[0]["game_round"][0].game_round }}</h1>
    <h1>current player: {{everything[0].current_user_name}}</h1>
  </div>
</template>

<style>
</style>

<script>
var axios  = require('axios');

export default {
  data: function() {
    return {
     everything:[],
     participations: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/games/" + this.$route.params.id)
    .then(response => {
      this.everything.push(response.data)
      this.participations = this.everything[0].participations
    });
  },
  methods: {},
  computed: {}
};
</script>