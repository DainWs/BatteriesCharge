<!-- JS -->
<script src="../assets/js/Home.js"></script>

<!-- HTML -->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <form action="">
    <Battery v-for="(battery, index) in batteries" :key="index" :battery="battery"></Battery>
      <input
        type="text"
        v-model="keywords"
        placeholder="Ingresar consulta de nombre"
      />
      <button type="button" @click="getBatteries">Preguntar</button>
    </form>
  </div>
</template>