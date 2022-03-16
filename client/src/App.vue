<template>
  <div id="app">
    <div class="d-flex">
      <img src="./assets/logo.png" height="50">
      <h1>Monitor de Baterias</h1>
    </div>
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>