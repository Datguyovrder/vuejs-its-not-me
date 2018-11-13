<template>
  <div class="home">
    <!-- <h1>participations {{ participations }}</h1>
    <h1>players: {{ participations.length }}</h1> -->
    <!-- <h1>roles: {{ participations}}</h1> -->
    <!-- <h1>game round: {{ everything["game_round"][0].game_round}}</h1> -->
    <div class="button-spacer row justify-content-md-cewnter">
      <div class="col-md-5">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Player Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="participation in participations">
              <td>{{participation.player["name"]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-5">
        <div class="button-spacer" v-if="!isParticipant()">
          <button v-on:click="submit()" class="btn btn-info">Join Lobby</button>
        </div>
        <div class="button-spacer" v-else-if="everything.organizer_id === everything.current_user_id && everything.participations.length > 3 && !everything.started">
          <div v-on:click="beginGame()" class="btn btn-info" >Begin Game</div>
        </div>
        <div class="button-spacer" v-if="isParticipant()">
          <button v-on:click="readyYet()" class="btn btn-info">Now?</button>
        </div>
      </div>
    </div>
    </div>
    


</template>

<style>
.button-spacer {
  margin-bottom: 20px;
}
</style>

<script>
var axios = require('axios')

export default {
  data: function() {
    return {
      everything: {participations:[]},
      participations: []
    };
  },
  created: function() {
    axios
    .get("/api/games/" + this.$route.params.id)
    .then(response => {
      this.everything = response.data;
      this.participations = this.everything.participations;
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
      .post("/api/participations/", params)
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
    .post("/api/games/" + this.$route.params.id + "/rounds", params)
    .then(response => {
      this.everything.push(response.data)
    });
    },
    readyYet: function() {
      axios
      .get("/api/games/" + this.$route.params.id)
      .then(response => {
        this.everything = response.data;
        this.participations = this.everything.participations;
        if (response.data.started) {
          this.$router.push('/rounds/' + this.everything.current_round_id);
        }
      });
    },
    beginGame: function() {
      axios
      .post("/api/games/" + this.everything.id + "/start")
      .then(response => {
        this.$router.push('/rounds/' + response.data.current_round_id);
      });
    },
    isParticipant: function() {
      var inParticipations = false;
      this.everything.participations.forEach(participation => {
        if (participation.player.id === this.everything.current_user_id) {
          inParticipations = true;
        }
      });

      return inParticipations;
    }
  },
  computed: {}
};
</script>
