<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>