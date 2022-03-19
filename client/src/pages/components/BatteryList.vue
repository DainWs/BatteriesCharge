<!-- JS -->
<script src="./BatteryList.js"></script>

<!-- HTML -->
<template>
    <div class="container col-md-12">
        <div class="row">
            <h1 class="col-md-6 mr-auto">Baterias</h1>
            <a class="btn btn-light b-0 d-flex align-items-center hover-rotate" @click="update"><img src="../../assets/images/rotate-solid.svg" style="height: 1.5rem;"/></a>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex flex-wrap">
                <BatteryItem v-for="(battery, index) in batteries" :key="index" :battery="battery"></BatteryItem>
            </div>
        </div>
    </div>
</template>