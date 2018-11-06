<template>
  <div class="home">
          
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Select Spot</th>
          <th>Player Name</th>
          <th>Start Game</th>
          <th>Ready?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in collection['players']">
          <td><button>Player {{ player.id }}</button></td>
          <td>{{player["name"]}}</td>
          <td><router-link to="/games/1/round" tag="button" v-if="player.id == 1">Begin Game</router-link></td>
          <td><button>Now?</button></td>
        </tr>
      </tbody>
    </table>
  </div>


</template>

<style>
</style>

<script>
var axios = require('axios')

export default {
  data: function() {
    return {
      collection: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/games/" + this.$route.params.id)
    .then(response => {
      this.collection = response.data
    })
    .bind(this);
  },
  methods: {
    // assignplayer: function() {

    // }
  },
  computed: {}
};
</script>
