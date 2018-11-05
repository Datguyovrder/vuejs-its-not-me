<template>
  <div class="home">
    <!-- <h1> {{ collection }}</h1> -->
    <h1>Made it here</h1>
    <button>Player 1</button><br><br>
    <button>Player 2</button><br><br>
    <button>Player 3</button><br><br>
    <button>Player 4</button><br><br>
    <router-link to="/games/1/round" tag="button">Begin Game</router-link>
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
    .get("http://localhost:3000/api/games/1")
    .then(response => {
      this.collection = response.data
    })
    .bind(this);
  },
  methods: {
    assignplayer: function() {

    }
  },
  computed: {}
};
</script>
