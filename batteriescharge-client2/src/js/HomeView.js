import axios from "axios";
import Battery from '../../components/Battery.vue';

export default {
    name: "Home",
    components: {
        Battery
    },
    data() {
        return {
            batteries: [],
        };
    },
    mounted() {
        this.getBatteries();
        setInterval(this.getBatteries.bind(this), (5 * 1000));
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
        }
    }
};