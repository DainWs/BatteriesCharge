<!-- JS -->
<script src="../assets/js/HomeView.js"></script>

<!-- HTML -->
<template>
  <div class="card">
    <h1>Baterias</h1>
    <div class="container">
      <Battery v-for="(battery, index) in batteries" :key="index" :battery="battery"></Battery>
    </div>
    <button type="button" @click="getBatteries">Actualizar</button>
  </div>
</template>