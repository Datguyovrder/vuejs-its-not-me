<template>
  <div class="home">                                                                                                                                                                                                                                                                              
    <h1>Game Lobbies</h1>
    <div>
      <h4>Total Number of Games: {{ games.length }}</h4>
    </div>

    <div class="games-index">
      <div class="row">
        <div class="col-md-4" v-for="game in games">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Lobby: {{ game.id }}</h5>
              <router-link class="btn btn-primary" v-bind:to="'/games/' + game.id + '/waiting'">Pick Lobby</router-link>
            </div>
          </div>
        </div>
      </div>
    </div><br>
    
    <button @click="newLobby()">Create Lobby</button>
    <router-link to="/logout" tag="button">Logout</router-link>
</div>

</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      games: [],
    };
  },
  created: function() {
    this.updatedGames();
  },
  methods: {
    updatedGames: function() {
      axios
      .get("http://localhost:3000/api/games")
      .then( response => {
        this.games = response.data;
      });
    },

    newLobby: function() {
      axios
      .post("http://localhost:3000/api/games")
      .then(response => {
        console.log(response.data);
        this.$router.push({name: "waiting-screen", params: {id: response.data["id"]}});
      });
    }
  },
  computed: {}
};
</script>