import BatteryEntryFactory from "../factories/BatteryEntryFactory";
import BatteryEntry from "./BatteryEntry";

class Battery {
    constructor(generalObject = {id: -1, nombre: '', inputPin: -1, outputPin: -1, entries: []}) {
        this.id = generalObject.id;
        this.nombre = generalObject.nombre;
        this.inputPin = generalObject.inputPin;
        this.outputPin = generalObject.outputPin;

        this.entries = new Set();
        if (Array.isArray(generalObject.entries)) {
            var newEntries = new Set();
            var batteriesEntryFactory = new BatteryEntryFactory();
            Array.from(generalObject.entries).forEach((entryObject) => {
                let batteryEntry = entryObject;
                if (!(batteryEntry instanceof BatteryEntry)) {
                    batteryEntry = batteriesEntryFactory.parseBatteryEntry(batteryEntry);
                }
                newEntries.add(Object.assign(new BatteryEntry(), batteryEntry));
            });
            this.entries = newEntries;
        }
    }

    getId() {
        return this.id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getInputPin() {
        return this.inputPin;
    }

    setInputPin(inputPin) {
        this.inputPin = inputPin;
    }

    getOutputPin() {
        return this.outputPin;
    }

    setOutputPin(outputPin) {
        this.outputPin = outputPin;
    }

    getEntries() {
        return this.entries.values();
    }

    addEntry(entry) {
        entry.setId(this.entries.size);
        entry.setBatteriesId(this.id);
        this.entries.add(entry);
    }

    removeEntry(entry) {
        this.entries.delete(entry);
    }
}

export default Battery;