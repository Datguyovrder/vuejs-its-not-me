<template>
  <div class="home">
    <h1> {{ collection }}</h1>
          
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Select Spot</th>
          <th>Player Name</th>
          <th>Start Game</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><button>Player 1</button></td>
          <td></td>
          <td><router-link to="/games/1/round" tag="button">Begin Game</router-link></td>
        </tr>
        <tr>
          <td><button>Player 2</button></td>
          <td></td>
        </tr>
        <tr>
          <td><button>Player 3</button></td>
          <td></td>
        </tr>
        <tr>
          <td><button>Player 4</button></td>
          <td></td>
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
