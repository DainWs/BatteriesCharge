import VueApexCharts from "vue3-apexcharts";

export default {
    name: "BatteryItem",
    components: {
      apexcharts: VueApexCharts
    },
    props: {
        battery: Object
    },
    mounted() {
    },
    methods: {
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
            Array.from(entries)
                .filter((entry) => (Math.round((new Date() - entry.fecha) / 1000) < 25))
                .sort((a, b) => a.fecha - b.fecha)
                .forEach((entry) => {
                    seriesData.push(entry.voltage);
                });
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