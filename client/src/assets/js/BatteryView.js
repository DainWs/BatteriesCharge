export default {
    name: "Battery",
    props: {
        battery: Object
    },
    data() {
      return {
        chartOptions: {
          chart: {
            id: this.battery.id
          },
          xaxis: {
            categories: [0, 5, 10]
          }
        },
        series: [{
          name: 'Voltage',
          data: [1, 4, 5, 2, 6, 10, 8, 9]
        }]
      }
    },
    mounted() {
       this.load();
    },
    methods: {

    }
};