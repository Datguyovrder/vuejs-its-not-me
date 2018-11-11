<template>
  <div class="home">
    <!-- <h1>everything: {{ everything }}</h1> -->
    <h1>participations: {{ participations }}</h1>
    <h1>round info: {{ round_info }}</h1>
    <h1>game round: {{ round_info.game_round }}</h1>
    <h1>current player: {{ current_player_info }}</h1>

    <h1 v-for="participation in participations">
      <h4 v-if="((current_player_info == participation.player.role[0].player_id) && (participation.player.role[0].label == 'decoy'))"> {{ round_info.prompt_message }}
      </h4>

      <h4 v-else-if="((current_player_info == participation.player.role[0].player_id) && (participation.player.role[0].label == 'hider'))"> Try to copy the other decoys
      </h4>

      <!-- <h4 v-else> 
        <h4>Who do you think is the hider?</h4>
        <input type="number" v-model="who_did_it">
        <b>{{ whoDoneIt }}</b>
      </h4> -->
     <!--  <h4>{{ current_player_info }} is a {{ participation.player.role[0].label }}</h4> -->
      
    </h1> 
    

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
     participations: [],
     hider: [], 
     current_player_info: [],
     round_info: [],
     score: [],
     who_did_it: 0
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/games/" + this.$route.params.id)
    .then(response => {
      this.everything.push(response.data)
      this.participations = this.everything[0].participations
      this.round_info = this.everything[0]["game_round"][0]
      this.current_player_info = this.everything[0].current_user_id
    });
  },
  methods: {
    // decoyScreen: function() {

    // },
    // hiderScreen: function() {

    // },
    // seekerScreen: function() {

    // }
  },
  computed: {
    whoDoneIt: function() {
      for (var x=0; x<participations.length; x++) {
        if (who_did_it == participations[x]["player"]["role"][0]["player_id"] && participations[x]["player"]["role"][0]["label"] == "hider"){
          return "Congrats You Found The Hider"
        } else {
          return "Sorry You Guessed Wrongsu"
        }
      }
    }
  }
};
</script>