// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue';
import App from './App.vue';
import VueApexCharts from "vue3-apexcharts";

import 'bootstrap/dist/css/bootstrap.css';

let app = createApp(App);
app.config.productionTip = false;
app.use(VueApexCharts);
app.mount('#app');