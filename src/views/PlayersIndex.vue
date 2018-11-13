<template>
  <div class="home">
    <h1>Players Index</h1>
    <div class="players-index">
      <div class="row">
        <div class="col-md-4" v-for="player in players">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ player.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link class="btn btn-primary" v-bind:to="'/games/'">Lets Find A Game Lobby</router-link>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      players: []
    };
  },
  created: function() {
    axios
    .get("/api/players")
    .then(function(response) {
      this.players = response.data;
    }.bind(this));
  },
  methods: {
    
  },
  computed: {}
};
</script>