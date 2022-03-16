<!-- JS -->
<script src="./BatteryList.js"></script>

<!-- HTML -->
<template>
    <div class="container">
        <div class="row">
            <h1 class="col-md-9">Baterias</h1>
            <button class="col-md-3 btn btn-primary" type="button" @click="update">Actualizar</button>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex flex-wrap">
                <BatteryItem v-for="(battery, index) in batteries" :key="index" :battery="battery"></BatteryItem>
            </div>
        </div>
    </div>
</template>