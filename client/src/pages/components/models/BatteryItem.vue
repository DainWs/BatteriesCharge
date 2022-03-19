<!-- JS -->
<script src="./BatteryItem.js"></script>

<!-- HTML -->
<template>
  <div class="col-md-6">
    <h3 class="text-align-center">{{battery.getNombre()}}</h3>
    <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>