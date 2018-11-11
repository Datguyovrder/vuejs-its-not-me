<template>
  <div class="home">
    <h1>Prompts</h1>
    <div>
      <h4>Total Number of Prompts: {{ prompts.length }}</h4>
    </div>

    <div class="prompts-index">
        <div class="row">
          <div class="col-md-4" v-for="prompt in prompts">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Prompt {{prompt.id }}: {{ prompt.message }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      prompts: [],
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/prompts")
    .then( response => {
      this.prompts = response.data;
    })
    .bind(this);
  },
  methods: {},
  computed: {}
};
</script>