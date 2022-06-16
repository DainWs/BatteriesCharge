import axios from "axios";
import { SocketController } from "../services/SocketController";
import { UPDATE_BATTERIES } from "../services/SocketEvents";
import { SocketObserver } from "../services/SocketObserver";
import BatteryList from './components/BatteryList.vue';

const COMPONENT_NAME = "Home";

export default {
    name: COMPONENT_NAME,
    components: {
        BatteryList
    },
    data() {
        return {
            batteries: [],
        };
    },
    mounted() {
        this.getBatteries();
        SocketController.start();
        SocketObserver.subscribe(UPDATE_BATTERIES, COMPONENT_NAME, this.updateBatteries.bind(this));
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
        getBattery(id) {
            axios.get("/api/getBattery", {id: id})
                .then((res) => {
                    let data = res.data;
                    console.log(data);
                    this.batteries = data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getBatteries() {
            axios.get("/api/getBatteries", {})
                .then((res) => {
                    let data = res.data;
                    console.log(data);
                    this.batteries = data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateBatteries(data) {
            console.log(data);
        }
    }
};