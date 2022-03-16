import Battery from "../../../models/Battery.js";

export default {
    name: "BatteryItem",
    props: {
        battery: Object
    },
    data() {
        return {
            chartOptions: {
                chart: { id: this.battery.getId() },
                xaxis: { categories: [0, 5, 10, 15, 20, 25] }
            },
            series: [{
                name: 'Voltage',
                data: this.battery.getEntries().values()
            }]
        }
    },
    mounted() {
    },
    methods: {
    }
};