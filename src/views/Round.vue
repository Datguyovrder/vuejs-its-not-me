<template>
  <div class="home">
    <div v-for="participation in participations">
          <h1 class="display-3">{{ participation.player.name }}, You are a {{ participation.role }}</h1>

      <div v-if="((current_player_id == participation.player.id) && (participation.role == 'decoy'))"> 
        <div class="jumbotron">
          <h1 class="display-3">{{ participation.player.name }}, You are a {{ participation.role }}</h1>
          <p class="lead">Make it hard for the hider to disguise themselves</p>
          <hr class="my-4">
          <p>{{ prompt_message }}</p>
          <p class="lead">
            <div class="btn btn-info" v-on:click="nextRoundCheck()">Done</div>
          </p>
        </div>
      </div>
      <div v-else-if="((current_player_id == participation.player.id) && (participation.role == 'hider'))"> 
        <div class="jumbotron">
          <h1 class="display-3">{{ participation.player.name }}, You are a {{ participation.role }}</h1>
          <p class="lead">Uh oh, better hide</p>
          <hr class="my-4">
          <p>Try to copy the other decoys</p>
          Try to copy the other decoys
          <div class="btn btn-info" v-on:click="nextRoundCheck()" >Done</div>
        </div>
      </div>
      <div v-else-if="((current_player_id == participation.player.id) && (participation.role == 'seeker'))"> 
        <div class="jumbotron">
          <h1 class="display-3">{{ participation.player.name }}, You are a {{ participation.role }}</h1>
          <p class="lead">Who do you think is the hider?</p>
          <hr class="my-4">

          <select class="custom-select" v-model="who_is_hider">
            <option selected="">Open this select menu</option>
            <option v-for="participation in participations" v-bind:value="participation.player.id">{{participation.player.name}}</option>
          </select>

          <span>selected: {{ who_is_hider }}</span>
          <button v-on:click="whoDoneIt()" :disabled="one_guess">Guess</button> 
          <h1>{{ right_or_wrong }}</h1>
          <button v-on:click="newRound()"></button>
        </div>      
      </div>
    </div> 
  </div>
</template>

<style>
</style>

<script>
var axios  = require('axios');

export default {
  data: function() {
    return {
     game_id: 0,
     prompt_message: "",
     participations: [],
     current_player_id: 0,
     prompt_message: 0,
     round_info: [],
     score: [],
     who_is_hider: "",
     right_or_wrong: "",
     one_guess: false
    };
  },
  created: function() {
    axios
    .get("/api/rounds/" + this.$route.params.id)
    .then(response => {
      this.game_id = response.data.game_id;
      this.participations = response.data.participations;
      this.current_player_id = response.data.current_player_id;
      this.prompt_message = response.data.prompt_message;
      this.round_info = response.data.game_round
    });
  },
  methods: {
    newRound: function() {
      // var params = {

      // }

      // axios

      // .then(response) {

      // }
    },
    nextRoundCheck: function() {
      console.log("checked for new round");
      axios
      .get("/api/games/" + this.game_id)
      .then(response => {
        if (response.data.current_round_id != this.$route.params.id) {
          this.$router.push({ name: "rounds-show", params: { id: response.data.current_round_id }});
        }
      });
    },
    whoDoneIt: function() {
      this.right_or_wrong = "Sorry You Guessed Wrongsu";

      this.participations.forEach(participation => {
        if (participation.player.id == this.who_is_hider && participation.role == 'hider') {
          this.right_or_wrong = "Congrats You Found The Hider";
        }
      });

      this.one_guess = true
    },
  },
  beforeRouteUpdate (to, from, next) {
    axios
    .get("/api/rounds/" + to.params.id)
    .then(response => {
      this.game_id = response.data.game_id;
      this.participations = response.data.participations;
      this.current_player_id = response.data.current_player_id;
      this.prompt_message = response.data.prompt_message;
      this.round_info = response.data.game_round
    });

    next()
  },
  computed: {}
};
</script>