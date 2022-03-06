import axios from "axios";
import Battery from '../../components/Battery.vue';

export default {
    name: "Home",
    components: {
        Battery
    },
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            userName: "",
            age: "",
            batteries: [],
        };
    },
    methods: {
        // add Battery methods
        addBattery() {
            let name = this.userName;
            let age = this.age;
            axios.post("/api/addUser", {
                name,
                age,
            })
                .then((res) => {
                    alert("Información agregada correctamente");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getBatteries() {
            axios
                .post("/api/getBatteries", {})
                .then((res) => {
                    let data = res.data;
                    console.log(data);
                    this.batteries = data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    }
};