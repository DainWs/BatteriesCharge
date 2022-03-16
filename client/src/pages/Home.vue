<!-- JS -->
<script src="./Home.js"></script>

<!-- HTML -->
<template>
  <div class="card">
    <h1>Baterias</h1>
    <div class="d-flex flex-wrap">
      <BatteryList/>
    </div>
    <button class="btn btn-primary" type="button" @click="getBatteries">Actualizar</button>
  </div>
</template>