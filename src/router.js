import Vue from "vue";
import Router from "vue-router";

import PlayersIndex from "./views/PlayersIndex.vue";

import PromptsIndex from "./views/PromptsIndex.vue";

import GamesIndex from "./views/GamesIndex.vue";

import WaitingScreen from "./views/WaitingScreen.vue"

import Round from "./views/Round.vue"

import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "root", component: GamesIndex },

    // { path: "/players", name: "players-index", component: PlayersIndex },

    { path: "/prompts", name: "prompts-index", component: PromptsIndex},

    { path: "/games", name: "games-index", component: GamesIndex },
    { path: "/games/:id/waiting", name: "waiting-screen", component: WaitingScreen},
    
    { path: "/rounds/:id", name: "rounds-show", component: Round},

    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});