<!-- JS -->
<script src="../assets/js/Battery.js"></script>

<!-- HTML -->
<template>
   <b-card :title={}>
     <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
   </b-card>
</template>