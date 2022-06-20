class BatteryEntry {
    constructor(generalObject = {id: -1, batteriesId: -1, voltage: -1, fecha: new Date()}) {
        this.id = generalObject.id;
        this.batteriesId = generalObject.batteriesId;
        this.voltage = generalObject.voltage;
        this.fecha = new Date(generalObject.fecha);
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getBatteriesId() {
        return this.batteriesId;
    }

    setBatteriesId(batteriesId) {
        this.batteriesId = batteriesId;
    }

    getVoltage() {
        return this.voltage;
    }

    setVoltage(voltage) {
        this.voltage = voltage;
    }

    getFecha() {
        return this.fecha;
    }
}

export default BatteryEntry;