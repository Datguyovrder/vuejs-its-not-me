<template>
  <div class="home">
    <h1>Roles</h1>
    <div>
      <h4>Total Number of Roles: {{ roles["roles"].length }}</h4>
    </div>

    <h2 v-for="role in roles"> Player {{ role.player_id }} Role: {{ role.label }}</h2>

  </div>
</template>

<style>
</style>

<script>
var axios  = require('axios');

export default {
  data: function() {
    return {
      roles: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/games/:id")
    .then(function(response) {
      this.roles = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>