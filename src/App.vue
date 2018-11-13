<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/#/">It's Not Me</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <li class="nav-item active">
            <a class="nav-link" href="/#/login">Login</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="/#/signup">Sign up</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="/#/logout">Logout</a>
          </li>

        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
  nav {
    margin-bottom: 20px;
  }
</style>

<script>
