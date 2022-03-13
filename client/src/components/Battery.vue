<!-- JS -->
<script src="../assets/js/BatteryView.js"></script>

<!-- HTML -->
<template>
  <div class="col-md-6">
    <h3 class="text-align-center">{{battery.NOMBRE}}</h3>
    <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>