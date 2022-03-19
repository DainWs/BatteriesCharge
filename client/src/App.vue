<!-- JS -->
<script src="./App.js"></script>

<style>
@import url('./App.css');
</style>

<!-- HTML -->
<template>
  <div id="app">
    <header class="position-sticky top-0">
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
        <a class="navbar-brand d-flex align-items-center m-0 p-0" href="#">
          <img src="./assets/logo.png" width="40" height="40" alt="" />
          <span class="h3 m-0 ml-3">Monitor de Baterias</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active p-2">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <Home />
  </div>
</template>