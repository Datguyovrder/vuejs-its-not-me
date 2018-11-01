import Vue from "vue";
import Router from "vue-router";

// import Home from "./views/Home.vue";
// import About from "./views/About.vue";
import PlayersIndex from "./views/PlayersIndex.vue";

import GamesIndex from "./views/GamesIndex.vue";

import Round from "./views/Round.vue"

import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: {name: "login"}},
    // { path: "/about", name: "about", component: About },
    { path: "/players", name: "players-index", component: PlayersIndex },

    { path: "/games", name: "games-index", component: GamesIndex },
    { path: "/games/:id", redirect: {name: "round"}},

    { path: "/round", name: "round", component: Round},

    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});