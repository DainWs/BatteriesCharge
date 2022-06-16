import VueApexCharts from "vue3-apexcharts";
import { UPDATE_BATTERIES } from "../../../services/SocketEvents";
import { SocketObserver } from "../../../services/SocketObserver";

const COMPONENT_NAME = "BatteryItem";

export default {
    name: "BatteryItem",
    components: {
      apexcharts: VueApexCharts
    },
    props: {
        battery: Object
    },
    mounted() {
        SocketObserver.subscribe(UPDATE_BATTERIES, COMPONENT_NAME, this.updateBatteries.bind(this));
    },
    methods: {
        updateBatteries(data) {
            console.log(data);
            if (data.batteryId == this.battery.id) {
                this.battery.addEntry(data);
            }
            console.log(this.battery);
        }
    },
    computed: {
        chartOptions() {
            return {
                chart: {
                    id: this.battery.getId(),
                    type: 'area',
                    zoom: {
                        enabled: false
                    }
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Voltage',
                    align: 'left'
                },
                xaxis: {
                    categories: ['5s ago', '10s ago', '15s ago', '20s ago', '25s ago']
                }
            };
        },
        series() {
            var seriesData = [];
            let entries = this.battery.getEntries();
            console.log(entries);
            Array.from(entries)
                .sort((a, b) => a.fecha - b.fecha)
                .forEach((entry) => {
                    seriesData.push(entry.voltage);
                });
            console.log(seriesData);
            if (seriesData.length < 5) {
                let remainings = 5 - seriesData.length;
                for (let i = 0; i < remainings; i++) {
                    seriesData.push(0);
                }
            }
            console.log(seriesData);
            return [{
                name: 'Voltage',
                data: seriesData.slice(0, 5)
            }];
        }
    }
};