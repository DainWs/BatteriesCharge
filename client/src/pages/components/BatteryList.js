import axios from "axios";
import BatteryFactory from "../../factories/BatteryFactory";
import BatteryItem from './models/BatteryItem.vue';

export default {
    name: "BatteryList",
    components: {
        BatteryItem
    },
    data() {
        return {
            batteries: []
        };
    },
    mounted() {
        this.getBatteries();
       console.log(this.batteries);
    },
    methods: {
        // add Battery methods
        addBattery() {
            axios.post("/api/addBattery", { id: this.baterries.lenght, nombre: new Date().getTime() })
                .then((res) => {
                    console.log(res);
                    alert("Información agregada correctamente");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getBatteries() {
            axios.get("/api/getBatteries", {})
                .then((res) => {
                    this.batteries = new BatteryFactory().parseBatteries(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
};