import axios from "axios";
export default {
  name: "Battery",
  props: {
    battery: Object
  },
  data() {
    if (this.battery.entries == undefined) {
      this.battery.entries = []
    }
    return {
      chartOptions: {
        chart: {
          id: this.battery.ID
        },
        xaxis: {
          categories: [0, 5, 10]
        }
      },
      series: [{
        name: 'Voltage',
        data: this.battery.entries
      }]
    }
  },
  mounted() {
    this.getEntries();
  },
  methods: {
    getEntries() {
      axios.get("/api/getBatteriesEntries", {headers: {"content-type":"application/json"}, json: {id: this.battery.ID}})
        .then((res) => {
          let data = res.data;
          console.log(data);
          this.battery.entries = data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};