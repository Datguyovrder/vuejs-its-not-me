<template>
  <div class="home">

    <!-- <h1>everything: {{ everything }}</h1> -->
    <h1>participations {{ participations }}</h1>
    <h1>players: {{ participations.length }}</h1>
    <!-- <h1>roles: {{ participations}}</h1> -->
    <!-- <h1>game round: {{ everything["game_round"][0].game_round}}</h1> -->
    <button v-on:click="submit()">Join Lobby</button>
          
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
        <tr v-for="participation in participations">
          <td>Player {{ participation.player.id }}</td>
          <td>{{participation.player["name"]}}</td>
          <td><router-link v-bind:to="'/games/' + everything.id + '/round'" tag="button" v-if="participation.player.name == everything.participations[0].player.name && everything.participations.length > 3">Begin Game</router-link></td>
          <td><button v-on:click="readyYet()">Now?</button></td>
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
      everything: [],
      participations: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/games/" + this.$route.params.id)
    .then(response => {
      this.everything = response.data;
      this.participations = this.everything.participations
    });
  },
  methods: {
    submit: function() {
      var params = {
        game_id: this.everything.id,
        player_id: this.everything["participations"][0]["player"].id,
        organizer: this.false
      };

      axios
      .post("http://localhost:3000/api/participations/", params)
      .then(response => {
        console.log(response.data);
        // this.$router.push("/games/43/waiting");
        this.everything.participations.push(response.data);

      });
    },
    createRound: function() {
      var params = {
      game_id: this.everything.id,
      prompt_id: this.prompt_id,
      game_round: this.game_round
    };

    axios
    .post("http://localhost:3000/api/games/" + this.$route.params.id + "/rounds", params)
    .then(response => {
      this.everything.push(response.data)
    });
    },
    readyYet: function() {
      if (players.length != 4) {
        this.$router.go();
      }
    }
  },
  computed: {}
};
</script>
